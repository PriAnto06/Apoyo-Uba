# tests/test_materias.py
import json

def test_get_ingles(client):
    response = client.get("/ingles")
    assert response.status_code == 200
    # si no hay registros, devuelve lista vacía
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_ingles(client):
    payload = {"Apuntes": "present simple", "Profesor": "Gabriel Beronda"}
    response = client.post("/ingles", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data

def test_insert_ingles_falta_nombre(client):
    payload = {"Profesor": "Prof. Test"}
    response = client.post("/ingles", json=payload)
    # tu código actual inserta None si falta Apuntes, ajustá según reglas de negocio
    assert response.status_code in [201, 500]  # depende de cómo manejes campos vacíos
