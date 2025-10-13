# tests/test_matematica.py
import json

def test_get_matematica(client):
    response = client.get("/matematica")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_matematica(client):
    payload = {"Apuntes": "Función lineal", "Profesor": "Laura Carrizo"}
    response = client.post("/matematica", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_matematica_falta_apuntes(client):
    payload = {"Profesor": "Laura Carrizo"}  # Apuntes faltante
    response = client.post("/matematica", json=payload)
    assert response.status_code in [201, 500]

def test_insert_matematica_falta_profesor(client):
    payload = {"Apuntes": "Función lineal"}  # Profesor faltante
    response = client.post("/matematica", json=payload)
    assert response.status_code in [201, 500]
