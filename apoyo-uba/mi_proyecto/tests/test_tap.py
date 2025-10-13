import json

def test_get_tap(client):
    response = client.get("/tap")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_tap(client):
    payload = {"Apuntes": "Lenguajes de programación", "Profesor": "Julián Impelluso"}
    response = client.post("/tap", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_tap_falta_apuntes(client):
    payload = {"Profesor": "Julián Impelluso"}  # Apuntes faltante
    response = client.post("/tap", json=payload)
    assert response.status_code in [201, 500]

def test_insert_tap_falta_profesor(client):
    payload = {"Apuntes": "Lenguajes de programación"}  # Profesor faltante
    response = client.post("/tap", json=payload)
    assert response.status_code in [201, 500]
