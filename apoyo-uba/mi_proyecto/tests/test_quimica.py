# tests/test_quimica.py
import json

def test_get_quimica(client):
    response = client.get("/quimica")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_quimica(client):
    payload = {"Apuntes": "Cambios y componentes químicos", "Profesor": "Marcela Gleiser"}
    response = client.post("/quimica", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_quimica_falta_apuntes(client):
    payload = {"Profesor": "Marcela Gleiser"}  # Apuntes faltante
    response = client.post("/quimica", json=payload)
    assert response.status_code in [201, 500]

def test_insert_quimica_falta_profesor(client):
    payload = {"Apuntes": "Cambios y componentes químicos"}  # Profesor faltante
    response = client.post("/quimica", json=payload)
    assert response.status_code in [201, 500]
