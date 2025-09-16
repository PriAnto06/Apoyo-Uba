
from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)


# Configuración de conexión con MySQL
config = {
   'user': 'proyecto',
   'password': 'proyecto1234',
   'host': '10.9.120.5',
   'port': 3306,             
   'database': 'ProyectoUBA'
}
#endponit ingles
@app.route("/Ingles")
def get_Ingles():
    try:
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor(dictionary=True)
        query = """
        SELECT materia, profesor, correo
        FROM Ingles
        """
        cursor.execute(query)
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(rows)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Configuración de conexión con MySQL
config = {
    'user': 'proyecto',
    'password': 'proyecto1234',
    'host': '10.9.120.5',
    'port': 3306,
    'database': 'ProyectoUBA'
}

# UPDATE ingles: Modificar un registro de la tabla Ingles
@app.route("/Ingles/<int:id>", methods=["PUT"])
def update_ingles(id):
    try:
        data = request.json  # Datos que me manda el cliente (ej: Postman)
        materia = data.get("materia")
        profesor = data.get("profesor")
        correo = data.get("correo")
        telefono = data.get("telefono")

        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()
        query = """
        UPDATE Ingles
        SET materia = %s, profesor = %s, correo = %s, telefono = %s
        WHERE id = %s
        """
        values = (materia, profesor, correo, telefono, id)
        cursor.execute(query, values)

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Registro actualizado correctamente"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


