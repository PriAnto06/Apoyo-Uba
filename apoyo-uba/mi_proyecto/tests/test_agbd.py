# tests/test_agbd.py
import json

def test_get_agbd(client):
    response = client.get("/agbd")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_agbd(client):
    payload = {"Apuntes": "Bases de datos", "Profesor": "Tomas Mayorga"}
    response = client.post("/agbd", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_agbd_falta_apuntes(client):
    payload = {"Profesor": "Tomas Mayorga"}  # Apuntes faltante
    response = client.post("/agbd", json=payload)
    assert response.status_code in [201, 500]

def test_insert_agbd_falta_profesor(client):
    payload = {"Apuntes": "Bases de datos"}  # Profesor faltante
    response = client.post("/agbd", json=payload)
    assert response.status_code in [201, 500]
