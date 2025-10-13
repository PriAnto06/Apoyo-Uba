import json

def test_get_programacion_web(client):
    response = client.get("/programacionweb")
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)

def test_insert_programacion_web(client):
    payload = {"Apuntes": "HTML y CSS", "Profesor": "Federico Villarreal"}
    response = client.post("/programacionweb", json=payload)
    assert response.status_code == 201
    data = response.get_json()
    assert "mensaje" in data
    assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_programacion_web_falta_apuntes(client):
    payload = {"Profesor": "Federico Villarreal"}  # Apuntes faltante
    response = client.post("/programacionweb", json=payload)
    assert response.status_code in [201, 500]

def test_insert_programacion_web_falta_profesor(client):
    payload = {"Apuntes": "HTML y CSS"}  # Profesor faltante
    response = client.post("/programacionweb", json=payload)
    assert response.status_code in [201, 500]
