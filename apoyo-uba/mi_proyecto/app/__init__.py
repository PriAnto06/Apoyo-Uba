# app/__init__.py

from flask import Flask
def create_app():
    """
    Crea y devuelve la instancia de Flask.
    Configura templates, rutas y extensiones si es necesario.
    """
    app = Flask(__name__, template_folder="templates")

    # Ejemplo: ruta de prueba
    @app.route("/")
    def index():
        return "Hola, Flask está funcionando!"

    return app
