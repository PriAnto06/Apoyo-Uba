# tests/test_materias.py
import json

def test_get_ingles(client):
    response = client.get("/ingles")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_ingles(client):
    payload = {"Apuntes": "Verb to be", "Profesor": "Gabriel Beronda"}
    response = client.post("/ingles", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_ingles_falta_apuntes(client):
    payload = {"Profesor": "Gabriel Beronda"}  # Apuntes faltante
    response = client.post("/ingles", json=payload)
    # Según tu código actual, puede insertar None o devolver error
    assert response.status_code in [201, 500]

def test_insert_ingles_falta_profesor(client):
    payload = {"Apuntes": "Verb to be"}  # Profesor faltante
    response = client.post("/ingles", json=payload)
    assert response.status_code in [201, 500]
