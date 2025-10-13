# tests/test_aed.py
import json

def test_get_aed(client):
    response = client.get("/aed")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_aed(client):
    payload = {"Apuntes": "Estructuras de datos", "Profesor": "Mauricio Uribe"}
    response = client.post("/aed", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_aed_falta_apuntes(client):
    payload = {"Profesor": "Mauricio Uribe"}  # Apuntes faltante
    response = client.post("/aed", json=payload)
    assert response.status_code in [201, 500]

def test_insert_aed_falta_profesor(client):
    payload = {"Apuntes": "Estructuras de datos"}  # Profesor faltante
    response = client.post("/aed", json=payload)
    assert response.status_code in [201, 500]
