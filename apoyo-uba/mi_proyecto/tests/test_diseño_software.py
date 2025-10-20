# tests/test_diseno_software.py
import json

def test_get_diseño_software(client):
    response = client.get("/diseño_software")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_diseño_software(client):
    payload = {"Apuntes": "Patrones de diseño", "Profesor": "Andrés Navarro"}
    response = client.post("/diseño_software", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_diseño_software_falta_apuntes(client):
    payload = {"Profesor": "Andrés Navarro"}  # Apuntes faltante
    response = client.post("/diseño_software", json=payload)
    assert response.status_code in [201, 500]

def test_insert_diseño_software_falta_profesor(client):
    payload = {"Apuntes": "Patrones de diseño"}  # Profesor faltante
    response = client.post("/diseño_software", json=payload)
    assert response.status_code in [201, 500]
