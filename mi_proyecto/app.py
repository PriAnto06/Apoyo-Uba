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



@app.route("/Ingles")
def get_Ingles():
    try:
        conn = mysql.connector.connect(**config)  # <-- cambió db_config a config
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM Ingles")    # ya no hace falta asignar a resultado
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(rows)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
