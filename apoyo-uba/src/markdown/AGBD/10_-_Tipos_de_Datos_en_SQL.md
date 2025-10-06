# PDF Content

## Tipos de Datos en SQL


## Los tipos de datos en SQL definen el tipo de información que puede ser

almacenada en una columna de una tabla. Cada tipo de dato tiene características

específicas que determinan el tipo de datos que se pueden almacenar y cómo se

almacenan. A continuación se detallan los tipos de datos más comunes en SQL,

organizados en categorías generales.


## 1. Tipos de Datos Numéricos

a. Enteros


## INT: Representa números enteros. Puede tener diferentes tamaños

dependiendo del sistema de gestión de bases de datos (DBMS), como

TINYINT , SMALLINT , MEDIUMINT , INT , BIGINT .



Ejemplo:


## CREATE TABLE Empleados (

ID INT PRIMARY KEY,

## Edad TINYINT

);



: Un tipo especial que se utiliza en MySQL para autoincrementar

## SERIAL


automáticamente los valores. Equivale a INT con la propiedad de

autoincremento.


Ejemplo:


## CREATE TABLE Productos (

ID SERIAL PRIMARY KEY,

## Nombre VARCHAR(100)

);



b. Decimales





## Tipos de Datos en SQL                                                                        1

: Representa números decimales con precisión fija. p es la

## DECIMAL(p, s)


precisión total (número total de dígitos) y s es la escala (número de dígitos a

la derecha del punto decimal).


Ejemplo:


## CREATE TABLE Ventas (

## Precio DECIMAL(10, 2)

);



NUMERIC(p, s)   : Similar a   DECIMAL   , con la misma funcionalidad.


Ejemplo:


## CREATE TABLE Compras (

## Costo NUMERIC(8, 3)

);



FLOAT   : Representa números de punto flotante con precisión simple.


Ejemplo:


## CREATE TABLE Medidas (

## Valor FLOAT

);



DOUBLE   : Representa números de punto flotante con precisión doble.


Ejemplo:


## CREATE TABLE Resultados (

## Calculo DOUBLE

);



## 2. Tipos de Datos de Caracteres

a. Cadenas de Texto





Tipos de Datos en SQL                                                                              2

## CHAR(n): Almacena cadenas de longitud fija de     n   caracteres. Si el texto es más

corto, se rellena con espacios.


Ejemplo:


## CREATE TABLE Usuarios (

## Codigo CHAR(6)

);



: Almacena cadenas de longitud variable hasta

## VARCHAR(n)                                                    n   caracteres. Utiliza

solo el espacio necesario.


Ejemplo:


## CREATE TABLE Clientes (

## Nombre VARCHAR(50)

);



: Almacena cadenas de texto largas, con una longitud que puede variar

## TEXT


dependiendo del DBMS.


Ejemplo:


## CREATE TABLE Articulos (

## Descripcion TEXT

);



## 3. Tipos de Datos de Fecha y Hora

a. Fechas y Tiempos


DATE   : Almacena una fecha en el formato   YYYY-MM-DD   .


Ejemplo:


## CREATE TABLE Eventos (

## Fecha DATE

);





Tipos de Datos en SQL                                                                                     3

TIME   : Almacena una hora en el formato             HH:MM:SS   .


Ejemplo:


## CREATE TABLE Horarios (

## Tiempo TIME

);



DATETIME   : Almacena fecha y hora en el formato                YYYY-MM-DD HH:MM:SS   .


Ejemplo:


## CREATE TABLE Citas (

## Cita DATETIME

);



## TIMESTAMP    : Similar a   DATETIME   , pero con una mayor precisión en el manejo de

zonas horarias y puede ser utilizado para registrar el momento exacto de las

actualizaciones.


Ejemplo:


## CREATE TABLE Logs (

## Registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



YEAR   : Almacena un año en formato           YYYY   .


Ejemplo:


## CREATE TABLE Proyectos (

## Ano YEAR

);



## 4. Tipos de Datos de Datos Binarios

a. Datos Binarios





Tipos de Datos en SQL                                                                                       4

BINARY(n)   : Almacena datos binarios de longitud fija de    n   bytes.


Ejemplo:


## CREATE TABLE Archivos (

## Datos BINARY(256)

);



VARBINARY(n)   : Almacena datos binarios de longitud variable hasta       n   bytes.


Ejemplo:


## CREATE TABLE Imagenes (

## Imagen VARBINARY(65535)

);



: Almacena grandes bloques de datos binarios, como archivos de

## BLOB


imágenes o documentos.


Ejemplo:


## CREATE TABLE Multimedia (

## Contenido BLOB

);



## 5. Tipos de Datos Especiales

a. Booleanos


## BOOLEAN   o   BOOL   : Representa valores verdaderos o falsos. En la mayoría de los

sistemas, se almacena como           TINYINT(1)   .


Ejemplo:


## CREATE TABLE Preferencias (

## Activado BOOLEAN

);





Tipos de Datos en SQL                                                                                    5

b. Enumeraciones


: Almacena un conjunto de valores predefinidos. El valor almacenado es

## ENUM


uno de los valores de la lista.


Ejemplo:


## CREATE TABLE Estados (

## Estado ENUM('Activo', 'Inactivo', 'Pendiente')

);



c. Conjuntos


SET   : Almacena uno o más valores de una lista de valores predefinidos.


Ejemplo:


## CREATE TABLE Roles (

## Rol SET('Admin', 'Usuario', 'Invitado')

);



## Conclusión

## Comprender los tipos de datos en SQL es esencial para diseñar una base de datos

eficiente y funcional. Elegir el tipo de dato adecuado para cada columna no solo

asegura que los datos se almacenen correctamente, sino que también afecta al

rendimiento y la integridad de la base de datos. Al seleccionar tipos de datos, se

debe considerar el tipo de información que se va a almacenar, el tamaño de los

datos y cómo se utilizarán en las consultas y operaciones de la base de datos.





Material de la materia Administración y gestión de bases de datos.

## Institución: EET UBA





## Tipos de Datos en SQL                                                                           6

## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Tipos de Datos en SQL                        7

