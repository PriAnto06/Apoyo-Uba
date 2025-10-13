from flask import Flask, jsonify, request, render_template
import mysql.connector
from dotenv import load_dotenv
import os
from pathlib import Path
from flask_cors import CORS

def create_app():
    # Crea la instancia de la aplicación Flask
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:5173"])  # Permitir CORS para tu frontend

    # Cargar variables de entorno desde .env
    env_path = Path(__file__).parent / "ini.env"
    load_dotenv(dotenv_path=env_path)

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

    # ----------------------
    # RUTAS PARA LA APLICACIÓN
    # ----------------------
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
        print("Error al conectar a la base de datos ❌:", e)

    # ----------------------
    # RUTAS PARA INGLES
    # ----------------------
    @app.route("/ingles", methods=["GET"])
    def get_ingles():
        try:
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM Ingles")
            rows = cursor.fetchall()
            cursor.close()
            conn.close()
            return jsonify(rows)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/ingles", methods=["POST"])
    def insertar_ingles():
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO Ingles (Apuntes, Profesor) VALUES (%s, %s)", (apuntes, profesor))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro insertado correctamente"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/ingles/<int:id>", methods=["PUT"])
    def modificar_ingles(id):
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("UPDATE Ingles SET Apuntes=%s, Profesor=%s WHERE Ingles_id=%s", (apuntes, profesor, id))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro modificado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/ingles/<int:id>", methods=["DELETE"])
    def eliminar_ingles(id):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Ingles WHERE Ingles_id=%s", (id,))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": f"Registro con id {id} eliminado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # ----------------------
    # RUTAS PARA QUIMICA
    # ----------------------
    @app.route("/quimica", methods=["GET"])
    def get_quimica():
        try:
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM Quimica")
            rows = cursor.fetchall()
            cursor.close()
            conn.close()
            return jsonify(rows)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/quimica", methods=["POST"])
    def insertar_quimica():
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO Quimica (Apuntes, Profesor) VALUES (%s, %s)", (apuntes, profesor))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro insertado correctamente"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/quimica/<int:id>", methods=["PUT"])
    def modificar_quimica(id):
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("UPDATE Quimica SET Apuntes=%s, Profesor=%s WHERE Quimica_id=%s", (apuntes, profesor, id))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro modificado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/quimica/<int:id>", methods=["DELETE"])
    def eliminar_quimica(id):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Quimica WHERE Quimica_id=%s", (id,))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": f"Registro con id {id} eliminado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # ----------------------
    # RUTAS PARA MATEMATICA
    # ----------------------
    @app.route("/matematica", methods=["GET"])
    def get_matematica():
        try:
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM Matematica")
            rows = cursor.fetchall()
            cursor.close()
            conn.close()
            return jsonify(rows)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/matematica", methods=["POST"])
    def insertar_matematica():
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO Matematica (Apuntes, Profesor) VALUES (%s, %s)", (apuntes, profesor))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro insertado correctamente"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/matematica/<int:id>", methods=["PUT"])
    def modificar_matematica(id):
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("UPDATE Matematica SET Apuntes=%s, Profesor=%s WHERE Matematica_id=%s", (apuntes, profesor, id))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro modificado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/matematica/<int:id>", methods=["DELETE"])
    def eliminar_matematica(id):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM Matematica WHERE Matematica_id=%s", (id,))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": f"Registro con id {id} eliminado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # ----------------------
    # RUTAS PARA TAP
    # ----------------------
    @app.route("/tap", methods=["GET"])
    def get_tap():
        try:
            conn = get_connection()
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM TAP")
            rows = cursor.fetchall()
            cursor.close()
            conn.close()
            return jsonify(rows)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/tap", methods=["POST"])
    def insertar_tap():
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO TAP (Apuntes, Profesor) VALUES (%s, %s)", (apuntes, profesor))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro insertado correctamente"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/tap/<int:id>", methods=["PUT"])
    def modificar_tap(id):
        try:
            data = request.json
            apuntes = data.get("Apuntes")
            profesor = data.get("Profesor")
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("UPDATE TAP SET Apuntes=%s, Profesor=%s WHERE TAP_id=%s", (apuntes, profesor, id))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": "Registro modificado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/tap/<int:id>", methods=["DELETE"])
    def eliminar_tap(id):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM TAP WHERE TAP_id=%s", (id,))
            conn.commit()
            cursor.close()
            conn.close()
            return jsonify({"mensaje": f"Registro con id {id} eliminado correctamente"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    # ----------------------
    # EJECUTAR APP
    # ----------------------
    return app

# Si el archivo es ejecutado directamente, inicia la aplicación
if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)
