# tests/test_aed.py
import json

materias =[
   'aed','agbd','diseño_software', 'ingles', 'matematica', 'programacionweb','quimica','tap'
]

def test_get_aed(client):
   for materia in materias:
      response = client.get(f"/{materia}")
      assert response.status_code == 200
      data = response.get_json()
      assert isinstance(data, list)

def test_insert_aed(client):
   for materia in materias:
      payload = {"Apuntes": "Estructuras de datos", "Profesor": "Mauricio Uribe"}
      response = client.post(f"/{materia}", json=payload)
      assert response.status_code == 201
      data = response.get_json()
      assert "mensaje" in data
      assert data["mensaje"] == "Registro insertado correctamente"

def test_insert_aed_falta_apuntes(client):
   for materia in materias:
      payload = {"Profesor": "Mauricio Uribe"}  # Apuntes faltante
      response = client.post(f"/{materia}", json=payload)
      assert response.status_code == 500
      data = response.get_json()
      assert "error" in data 

def test_insert_aed_falta_profesor(client):
   for materia in materias:
      payload = {"Apuntes": "Estructuras de datos"}  # Profesor faltante
      response = client.post(f"/{materia}", json=payload)
      assert response.status_code == 500
      data = response.get_json()
      assert "error" in data
    
#base de datos

# def test_get_agbd(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_agbd(client):
#  for materia in materias:
#     payload = {"Apuntes": "Bases de datos", "Profesor": "Tomas Mayorga"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_agbd_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Tomas Mayorga"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_agbd_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "base de datos"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data

# #diseño de software

# def test_get_diseño_software(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_diseño_software(client):
#  for materia in materias:
#     payload = {"Apuntes": "Introduccion Flask", "Profesor": "Andres Navarro"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_diseño_software_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Andres Navarro"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_diseño_software_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "Introduccion flask"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data

# #ingles
# def test_get_ingles(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_ingles(client):
#  for materia in materias:
#     payload = {"Apuntes": "verb to be", "Profesor": "Gabriel Beronda"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_ingles_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Gabriel Beronda"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_ingles_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "verb to be"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data    

# #matematica

# def test_get_matematica(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_matematica(client):
#  for materia in materias:
#     payload = {"Apuntes": "Funcion Lineal", "Profesor": "Laura Carrizo"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_matematica_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Laura Carrizo"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_matematica_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "Funcion Lineal"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data
    
# #programacion web

# def test_get_programacion_web(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_programacion_web(client):
#  for materia in materias:
#     payload = {"Apuntes": "HTML Y CSS", "Profesor": "Federico Villace"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_programacion_web_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Federico Villace"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_programacion_web_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "HTML y CSS"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data    

# #quimica

# def test_get_quimica(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_quimica(client):
#  for materia in materias:
#     payload = {"Apuntes":"Cambios Quimicos", "Profesor": "Marcela Gleiser"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_quimica_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Marcela Gleiser"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_quimica_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "Cambios Quimicos"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data    

# #tap 
# def test_get_tap(client):
#  for materia in materias:
#     response = client.get(f"/{materia}")
#     assert response.status_code == 200
#     data = response.get_json()
#     assert isinstance(data, list)

# def test_insert_tap(client):
#  for materia in materias:
#     payload = {"Apuntes": "Introduccion a Algoritmos", "Profesor": "Julian Impelluso"}
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 201
#     data = response.get_json()
#     assert "mensaje" in data
#     assert data["mensaje"] == "Registro insertado correctamente"

# def test_insert_tap_falta_apuntes(client):
#  for materia in materias:
#     payload = {"Profesor": "Julian Impelluso"}  # Apuntes faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data 

# def test_insert_tap_falta_profesor(client):
#  for materia in materias:
#     payload = {"Apuntes": "Introduccion a Algoritmos"}  # Profesor faltante
#     response = client.post(f"/{materia}", json=payload)
#     assert response.status_code == 500
#     data = response.get_json()
#     assert "error" in data    

    