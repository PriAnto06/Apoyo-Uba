# PDF Content

## Introducción a Flask

Flask en un framework de python para desarrollar aplicaciones web.

## Está diseñado para que sea fácil y rápido de empezar, pero

manteniendo la posibilidad de escalar para acompañar el desarrollo de

aplicaciones más complejas



## Página de Flask con la documentación


Original en inglés:

https://flask.palletsprojects.com/


En español:

https://flask.palletsprojects.com/es



## Comandos para correr en la terminal antes de

empezar a trabajar cada día:


Para revisar y cambiar la configuración del git:

git config --global -l

git config --global user.name "el nombre"

git config --global user.email "dir@gmail.com"

git config --global -l


## Para clonar el repositorio en la carpeta documentos y

entrar a la carpeta principal del proyecto (remplazar "usr"

por el nombre de usuario y "repo" por el nombre del

proyecto):

cd Documentos

git clone "https://github.com/usr/repo.git"

cd repo


## Entorno Virtual


## Para crear un entorno virtual, desde la carpeta del

proyecto usar el comando:

python -m venv .venv


## Para activar el entorno virtual, desde la carpeta del

proyecto usar el comando:

source .venv/bin/activate


## Para instalar el flask (en el entorno virtual, después de

activarlo) usar el comando:

pip install flask


Para verificar si está instalado el flask usar el comando:

flask --version



Debería figurar la versión 2.3.2 o más nueva.


Para abrir el Visual Studio Code con el proyecto:

code .


Para guardar la base de datos:

## Se debe colocar el archivo de la base de datos

(por ejemplo "datos.sqlite") dentro de la

carpeta del proyecto, en una carpeta llamada

"instance".      Recuerden que esta carpeta figura

en el .gitignore y por lo tanto no se guarda en

el repositorio.        Esto significa que hay que

crearla cada vez.


Para ver que rutas están definidas:

flask routes


Para poner a correr el servidor:

flask run --debug


Una vez corriendo se puede ver en:

http://127.0.0.1:5000


## Para poner a correr el servidor para que además se pueda

acceder desde otras computadoras de la red:

flask -h 0.0.0.0 run --debug


## Ejercicios preliminares


## 1.​Crear un repositorio y poner el código de ejemplo de una

aplicación sencilla en flask

## 2.​Definir varias rutas simples

## 3.​Definir rutas con argumentos

## 4.​Definir rutas estáticas

## 5.​Definir una página principal con links a otras rutas

utilizando url_for

## 6.​Agregamos una base de datos a nuestra página y varias

rutas para realizar operaciones sobre la misma

## 7.​Modificar el código de la ruta y la plantilla que muestra la

información de un usuario para agregar dos nuevos

campos: dirección y teléfono.

## 8.​Agregar una ruta que muestre una lista de los nombres de

usuarios. Cada nombre debe ser un link que me lleva a la

ruta de detalle del punto anterior para ese usuario en

particular.


db = None



def dict_factory(cursor, row):

"""Arma un diccionario con los valores de la fila."""

fields = [column[0] for column in cursor.description]

return {key: value for key, value in zip(fields, row)}



def abrirConexion():

global db

db = sqlite3.connect("instance/datos.sqlite")

db.row_factory = dict_factory



def cerrarConexion():

global db

db.close()

db = None



@app.route("/test-db")

def testDB():

abrirConexion()

cursor = db.cursor()

cursor.execute("SELECT COUNT(*) AS cant FROM usuarios;

")

res = cursor.fetchone()

registros = res["cant"]

cerrarConexion()

return f"Hay {registros} registros en la tabla

usuarios"

## Tutorial de Flask


Original en inglés:

https://flask.palletsprojects.com/en/stable/tutorial/

En español:

https://flask.palletsprojects.com/es/stable/tutorial/


## Para hacer el tutorial, vamos a crear un repositorio público y

elegimos la opción "Add a README file". A continuación

armar un entorno virtual e instalar el flask dentro de él.


Comandos para correr en la terminal:


Para revisar y cambiar la configuración del git:

git config --global -l

git config --global user.name "el nombre"

git config --global user.email "dir@gmail.com"

git config --global -l


## Para clonar el repositorio en la carpeta documentos y

entrar a la carpeta principal del proyecto (remplazar usr

por el nombre de usuario y repo por el nombre del

proyecto):

cd Documentos

git clone "https://github.com/usr/repo.git"

cd repo

## Para crear un entorno virtual, desde la carpeta del

proyecto usar el comando:

python -m venv .venv

## Para activar el entorno virtual, desde la carpeta del

proyecto usar el comando:

source .venv/bin/activate


## Para instalar el flask (en el entorno virtual, después de

activarlo) usar el comando:

pip install flask


Para verificar si está instalado el flask usar el comando:

flask --version



Debería figurar la versión 2.3.2 o más nueva.


Para abrir el Visual Studio Code con el proyecto:

code .


Para inicializar la base de datos (desde el tercer commit):

flask --app flaskr init-db


Para ver que rutas están definidas:

flask --app flaskr routes


Para poner a correr el servidor (desde el segundo commit):

flask --app flaskr run --debug

Una vez corriendo se puede ver en:

http://127.0.0.1:5000


## Para poner a correr el servidor para que además se pueda

acceder desde otras computadoras de la red:

flask --app flaskr -h 0.0.0.0 run --debug


## Es importante leer con mucha atención todo el tutorial y de ser

necesario buscar en el resto de la documentación lo que no se

entienda.


## También se debe probar cada paso corriendo el servidor y

viendo la página completa y corrigiendo los errores antes de

cada commit.


Se deben respetar los commits aclarados acá abajo.


Commits del tutorial:

## 1.​Project Layout/Diseño del Proyecto (solo la parte de crear

.gitignore)

## 2.​Application Setup/Configuración de la Aplicación

## 3.​Define and access database/Definir y acceder a la base

de datos

4.​Tres pasos pero un solo commit:

a.​Blueprints and Views/Blueprints y Vistas

b.​Templates/Plantillas

c.​Static files/Archivos Estáticos

## 5.​Blog blueprint

## 6.​Make the project installable/Hacer que el proyecto sea

instalable

## 7.​Test coverage/Cobertura de la Prueba

Commits de modificaciones:

## 1.​Modificar el esquema de colores de la página

## 2.​Poner nombre y traducir la página al español

## 3.​Agregarle a la creación de usuario un campo para verificar

contraseña.

## 4.​Agregarle al usuario el email (que se muestre junto con el

nombre)

## 5.​Agregar una página que me permita modificar el mail del

usuario logueado.

## 6.​Agregar a la página del punto anterior la posibilidad de

borrar el usuario (tener cuidado de desloguear al usuario

al usar esta opción).

## 7.​Agregar la posibilidad de votar en los posts (upvote y

downvote), con la restricción de que un usuario no puede

votar más de una vez (pero si corregir su voto). En la

página principal se debe ver junto a cada post, el puntaje

actual y (sólo si estoy logueado) links/botones para votar

## Ejercicio Flask


## La idea es armar una página utilizando alguna de las bases de datos

que trabajamos durante el año en la materia de Administración y

Gestión de Bases de Datos.


Vamos a hacer una base de datos distinta en cada curso:


●​ 5to B: Chinook. Para comenzar nos vamos a concentrar en la

parte de tracks, albums, artists, media_type y genres.

●​ 5to D: Sakila. Para comenzar nos vamos a concentrar en la parte

de film, language, actor y category y sus tablas auxiliares

(film_category, film_actor)


Pasos a seguir (1 paso = 1 commit):

## 1.​Armar un repositorio nuevo (público, con readme) y

configurar el .gitignore igual que en el proyecto del tutorial

de flask.

## 2.​Armar una aplicación mínima de flask con un __init__.py

en una carpeta (que no se llame flaskr sino con un

nombre de proyecto) y una ruta con un mensaje de hola

mundo.

## 3.​Agregar la parte de conexión con la base de datos (db.py)

siguiendo el modelo del tutorial, pero reemplazando el

script con extensión ".sql" por uno generado de exportar

las tablas necesarias desde el programa SQliteBrowser.

## Para mejorar como se ven los resultados de la consulta

conviene cambiar la forma en la que se devuelven las filas

con este procedimiento:

def dict_factory(cursor, row):

"""Arma un diccionario con los valores de la fila."""

fields = [column[0] for column in cursor.description]

return {key: value for key, value in zip(fields, row)}

## En el __init__.py podemos importar el db.py de la

siguiente manera:

with app.app_context():

from . import db

db.init_app(app)


## 4.​Utilizando el modelo de template, css y blueprints del

tutorial y el blog.py (método index principalmente) como

punto de partida armar una página sencilla que muestre

una lista de los elementos principales de la base de datos:

las canciones (para 5to B) y las películas (para 5to D).

Incluir un archivo css de estilo.

## 5.​Hacer lo mismo para los otros elementos usando rutas

diferentes: albums, artists (5to B) o language, actor y

category (5to D).

## 6.​Pasando el id como parametro (ver ejemplo del

update.html de blog) agregar enlaces entre las distintas

páginas y hacer páginas de detalle de:

a.​5to B: disco, canción o artista específicos, etc

b.​5to D: película, actor/actriz específicos, etc





Para permitir agregar elementos nuevos:

## 1.​Hacer una ruta nueva que acepte los métodos GET y

## POST

## 2.​Si el método es GET mostrar una plantilla con el

formulario si es POST leer los valores enviados e

insertarlos en la base de datos

## 3.​Hacer la plantilla con el formulario

## 4.​Agregar un link desde el listados de elementos a la página

de creación

## Ejercicios Testing

## Partiendo de la base del tutorial completo del repositorio oficial

en github:

https://github.com/pallets/flask/tree/3.0.3/examples/tutorial

vamos a ir haciendo modificaciones y tests que comprueben su

funcionamiento. En todos los casos la idea es empezar por los

tests que inicialmente van a fallar y luego modificar el código

de la aplicación hasta agregar o modificar la funcionalidad y

que pase los tests. INTENTAR por cada punto hacer un

commit para los tests y otro para la modificación del

programa en sí


## 1.​Hacer un fork del repositorio para obtener una copia en

nuestro usuario de github en la cual podamos hacer

modificaciones

## 2.​Clonar el fork que creamos. ATENCIÓN: en este caso el

tutorial está dentro de la carpeta examples/tutorial,

por lo cual para abrir el visual studio code y correr la

aplicación hay que estar dentro de esa carpeta

## 3.​Configurar los tests en el visual studio code seleccionando

pytest y la carpeta actual (.) y verificar que funcione y

todos los tests pasen

## 4.​Traducir los mensajes de error de login y register (5 en

total), modificando los tests correspondientes. Para poder

usar tildes y ñ es necesario sacarle las b a los strings y

utilizar un .decode() al response.data

## 5.​Unificar los mensajes de error cuando pone mal el nombre

de usuario y mal el password para que no de mensajes

diferentes sino que simplemente informe "Usuario o

contraseña incorrectos", actualizando los tests para

verificar este comportamiento

## 6.​Agregarle a la creación de usuario un campo para verificar

contraseña y actualizar los tests de creación de usuario

para contemplar esto incluídos los mensajes de error.

## 7.​Agregarle al registro de usuario el email (que se muestre

junto con el nombre en todas las páginas) y actualizar los

tests, incluídos los mensajes de error

## 8.​Agregar una página que me permita modificar el mail del

usuario logueado. El test para eso deberá ir en un nuevo

archivo (por ejemplo test_user_mod.py). Se puede tomar

como guía el test_update en test_blog.py.

## 9.​Agregar a la página del punto anterior la posibilidad de

borrar el usuario (tener cuidado de desloguear al usuario

al usar esta opción). El test para eso deberá ir en el

mismo archivo del punto anterior. Se puede tomar como

guía el test_delete en test_blog.py, pero se deberá

verificar también que el usuario no quede logueado.

