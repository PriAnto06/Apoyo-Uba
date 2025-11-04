# app.py (CÓDIGO COMPLETO CON GOOGLE SIGN-IN, JWT Y RUTAS CRUD PROTEGIDAS)

from flask import Flask, jsonify, request ,render_template
import mysql.connector
from dotenv import load_dotenv
import os
from pathlib import Path
from flask_cors import CORS
# 🔑 IMPORTS JWT Y SEGURIDAD
from flask_jwt_extended import create_access_token, jwt_required, JWTManager, get_jwt, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash 
# 🔑 IMPORTS GOOGLE
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

app = Flask(__name__)
# 🔑 CORS debe permitir credenciales para sesiones JWT
CORS(app, origins=["http://localhost:5173"], supports_credentials=True) 

env_path = Path(__file__).parent / "ini.env"
load_dotenv(dotenv_path=env_path)

# 🔑 CONFIGURACIÓN JWT
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "SUPER_CLAVE_SECRETA_DEBES_CAMBIARLA")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 3600  
jwt = JWTManager(app)

# Configuración de la base de datos usando .env
db_config = {
    "host": os.getenv("DB_HOST", "10.9.120.5"),
    "port": int(os.getenv("DB_PORT", 3306)),
    "user": os.getenv("DB_USER", "proyecto"),
    "password": os.getenv("DB_PASS", "proyecto1234"),
    "database": os.getenv("DB_NAME", "ProyectoUBA")
}

def get_connection():
    return mysql.connector.connect(**db_config)

@app.route("/")
def index():
    return render_template("index.html")

# ----------------------
# VERIFICACIÓN DE CONEXIÓN
# ----------------------
try:
    conn = get_connection()
    conn.close()
    print("Conexión a la base de datos exitosa ✅")
except Exception as e:
    # No detiene la aplicación si la DB falla, pero lanza la advertencia
    print("Error al conectar a la base de datos ❌:", e)

# ----------------------
# FUNCIONES AUXILIARES DE SEGURIDAD
# ----------------------

@jwt.additional_claims_loader
def add_claims_to_access_token(identity):
    """Agrega el rol y el nombre del usuario a las claims del token JWT."""
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        # Usaremos la tabla 'Profesores' para almacenar todos los usuarios
        cursor.execute("SELECT rol, nombre FROM Profesores WHERE email = %s", (identity,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        # Si el usuario no existe (debería existir si el token es válido), asigna valores por defecto
        return {'rol': user['rol'], 'name': user['nombre']} if user else {'rol': 'estudiante', 'name': 'Invitado'}
    except Exception:
        return {'rol': 'estudiante', 'name': 'Invitado'}

def check_professor_role():
    """Verifica si el rol del usuario autenticado es 'profesor'."""
    claims = get_jwt()
    if claims.get('rol') != 'profesor':
         return jsonify({"msg": "Acceso denegado: Se requiere rol de profesor"}), 403
    return None

# ==========================================================
# RUTAS DE AUTENTICACIÓN GOOGLE Y MANUAL
# ==========================================================

# RUTA DE INICIO DE SESIÓN CON GOOGLE
@app.route("/google_login", methods=["POST"])
def google_login():
    try:
        data = request.json
        token = data.get("token")
        
        if not token:
            return jsonify({"msg": "Token de Google no proporcionado"}), 400

        GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID") 
        
        # 1. Verificar el token con los servidores de Google
        idinfo = id_token.verify_oauth2_token(
            token, 
            google_requests.Request(), 
            GOOGLE_CLIENT_ID
        )

        email = idinfo['email']
        name = idinfo.get('name', 'Usuario Google')
        default_rol = 'estudiante' 

        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        
        # 2. Buscar/Crear usuario
        cursor.execute("SELECT id, nombre, rol FROM Profesores WHERE email = %s", (email,))
        user_data = cursor.fetchone()
        
        if not user_data:
            # 3. Registrar al usuario si no existe (el campo 'password' debe ser NULL en DB)
            insert_query = "INSERT INTO Profesores (nombre, email, rol) VALUES (%s, %s, %s)"
            cursor.execute(insert_query, (name, email, default_rol))
            conn.commit()
            
            # Recargar datos del usuario recién creado
            cursor.execute("SELECT id, nombre, rol FROM Profesores WHERE email = %s", (email,))
            user_data = cursor.fetchone()
            
        # 4. Generar token JWT para la sesión
        access_token = create_access_token(identity=email)
        
        cursor.close()
        conn.close()

        return jsonify(
            access_token=access_token,
            user={
                'email': email,
                'name': user_data['nombre'],
                'rol': user_data['rol']
            }
        )

    except ValueError:
        return jsonify({"msg": "Token de Google inválido"}), 401
    except Exception as e:
        return jsonify({"error": f"Error del servidor en Google Login: {str(e)}"}), 500

# RUTA DE LOGIN MANUAL
@app.route("/login", methods=["POST"])
def login_manual():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")

        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT password, nombre, rol FROM Profesores WHERE email = %s", (email,))
        user_data = cursor.fetchone()
        cursor.close()
        conn.close()

        # Verifica si hay hash de contraseña y si coincide
        if user_data and user_data.get('password') and check_password_hash(user_data['password'], password):
            access_token = create_access_token(identity=email)
            return jsonify(
                access_token=access_token,
                user={
                    'email': email,
                    'name': user_data['nombre'],
                    'rol': user_data['rol']
                }
            )
        else:
            return jsonify({"msg": "Email o contraseña incorrectos"}), 401
    except Exception as e:
        return jsonify({"error": f"Error al iniciar sesión manual: {str(e)}"}), 500

# ==========================================================
# RUTAS CRUD PROTEGIDAS POR FUNCIÓN GENERADORA
# ==========================================================

# 🔑 FUNCIÓN PARA GENERAR RUTAS CRUD PROTEGIDAS
def create_crud_routes_protected(app, slug, table_name, id_column):
    # GET: Abierto para lectura (puedes añadir @jwt_required() si quieres protegerlo)
    @app.route(f"/{slug}", methods=["GET"], endpoint=f"get_{slug}") 
    def get_materia():
        try:
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute(f"SELECT * FROM {table_name}")
            rows = cursor.fetchall()
            cursor.close()
            conn.close()
            return jsonify(rows)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # POST: Protegido (solo profesor)
    @app.route(f"/{slug}", methods=["POST"], endpoint=f"insert_{slug}")
    @jwt_required()
    def insertar_materia():
        error_response = check_professor_role()
        if error_response:
            return error_response
        
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            claims = get_jwt()
            profesor = claims.get('name', 'Profesor Desconocido') 
            
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute(f"INSERT INTO {table_name} (Apuntes, Profesor) VALUES (%s, %s)", (apuntes, profesor))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro insertado correctamente"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # PUT: Protegido (solo profesor)
    @app.route(f"/{slug}/<int:id>", methods=["PUT"], endpoint=f"update_{slug}")
    @jwt_required()
    def modificar_materia(id):
        error_response = check_professor_role()
        if error_response:
            return error_response

        try:
            data = request.json
            apuntes = data.get("Apuntes")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute(f"UPDATE {table_name} SET Apuntes=%s WHERE {id_column}=%s", (apuntes, id))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro modificado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # DELETE: Protegido (solo profesor)
    @app.route(f"/{slug}/<int:id>", methods=["DELETE"], endpoint=f"delete_{slug}")
    @jwt_required()
    def eliminar_materia(id):
        error_response = check_professor_role()
        if error_response:
            return error_response
        
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute(f"DELETE FROM {table_name} WHERE {id_column}=%s", (id,))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": f"Registro con id {id} eliminado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

# ----------------------
# REGISTRO DE MATERIAS
# ----------------------
create_crud_routes_protected(app, slug='ingles', table_name='Ingles', id_column='Ingles_id')
create_crud_routes_protected(app, slug='quimica', table_name='Quimica', id_column='Quimica_id')
create_crud_routes_protected(app, slug='matematica', table_name='Matematica', id_column='Matematica_id')
create_crud_routes_protected(app, slug='tap', table_name='TAP', id_column='TAP_id')
create_crud_routes_protected(app, slug='agbd', table_name='AGBD', id_column='AGBD_id')
create_crud_routes_protected(app, slug='aed', table_name='AED', id_column='AED_id')
create_crud_routes_protected(app, slug='programacionweb', table_name='ProgramacionWeb', id_column='ProgramacionWeb_id')
create_crud_routes_protected(app, slug='diseño_software', table_name='DiseñoSoftware', id_column='DiseñoSoftware_id')
create_crud_routes_protected(app, slug='apoyom', table_name='ApoyoM', id_column='ApoyoM_id') 


# ----------------------
# EJECUTAR APP
# ----------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)