# PDF Content

## Sentencias DDL (Data Definition

Language): CREATE, ALTER,

## DROP


## Las sentencias DDL (Data Definition Language) se utilizan en SQL para definir y

modificar la estructura de las bases de datos. Estas sentencias permiten crear,

alterar y eliminar objetos de la base de datos como tablas, índices y vistas. A

continuación, se describen las principales sentencias DDL: CREATE , ALTER y DROP .


## 1. Sentencia CREATE

## La sentencia CREATE se usa para crear nuevos objetos en la base de datos. Los

objetos más comunes que se crean con esta sentencia son tablas, índices, vistas

y esquemas.

a. Crear una Tabla

La sentencia CREATE TABLE define una nueva tabla en la base de datos,

especificando sus columnas, tipos de datos y restricciones.

Sintaxis:


## CREATE TABLE nombre_tabla (

columna1 tipo_dato restricciones,

columna2 tipo_dato restricciones,

...

);



Ejemplo:


## CREATE TABLE Empleados (

EmpleadoID INT PRIMARY KEY,

Nombre VARCHAR(50),

FechaContratacion DATE,




## Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                  1

## Salario DECIMAL(10, 2)

);



En este ejemplo:


## EmpleadoID    es una columna de tipo              INT   y se define como la clave primaria de la

tabla.


## Nombrees una columna de tipo                   VARCHAR(50)   , que puede almacenar hasta 50

caracteres.


FechaContratacion      es una columna de tipo             DATE   .


es una columna de tipo DECIMAL(10, 2) , que almacena valores

## Salario


numéricos con hasta 10 dígitos en total y 2 decimales.


b. Crear un Índice

## La sentencia CREATE INDEX se usa para crear un índice en una o más columnas de

una tabla, lo que mejora el rendimiento de las consultas.

Sintaxis:


## CREATE INDEX nombre_indice ON nombre_tabla (columna1, columna

2, ...);



Ejemplo:


CREATE INDEX idx_nombre ON Empleados (Nombre);



En este ejemplo, idx_nombre es el nombre del índice creado en la columna                      Nombre


de la tabla Empleados .


c. Crear una Vista

## La sentencia CREATE VIEW se usa para crear una vista, que es una consulta

predefinida que se puede tratar como una tabla.


Sintaxis:


## CREATE VIEW nombre_vista AS

SELECT columna1, columna2, ...




Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                                       2

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:


## CREATE VIEW VistaEmpleados AS

## SELECT Nombre, Salario

## FROM Empleados

WHERE Salario > 50000;



## En este ejemplo, VistaEmpleados es una vista que muestra los   Nombre   y   Salario   de

los empleados con un salario superior a 50,000.


## 2. Sentencia ALTER

## La sentencia ALTER se usa para modificar la estructura de un objeto existente en la

base de datos. Esto incluye agregar, eliminar o modificar columnas y restricciones

en una tabla.


a. Modificar una Tabla

Sintaxis para agregar una columna:


## ALTER TABLE nombre_tabla

ADD columna tipo_dato restricciones;



Sintaxis para eliminar una columna:


## ALTER TABLE nombre_tabla

DROP COLUMN columna;



Sintaxis para modificar una columna:


## ALTER TABLE nombre_tabla

MODIFY columna tipo_dato restricciones;



Ejemplo:





Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                        3

-- Agregar una columna

## ALTER TABLE Empleados

ADD Telefono VARCHAR(15);


-- Eliminar una columna

## ALTER TABLE Empleados

DROP COLUMN Telefono;


-- Modificar una columna

## ALTER TABLE Empleados

MODIFY Salario DECIMAL(12, 2);



En estos ejemplos:


La primera sentencia agrega una columna          Telefono    a la tabla   Empleados   .


La segunda sentencia elimina la columna         Telefono    de la tabla   Empleados   .


## La tercera sentencia modifica la columna        Salario    para permitir hasta 12 dígitos

en total y 2 decimales.


b. Modificar una Vista


Sintaxis:


## CREATE OR REPLACE VIEW nombre_vista AS

SELECT columna1, columna2, ...

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:


## CREATE OR REPLACE VIEW VistaEmpleados AS

## SELECT Nombre, Salario, FechaContratacion

## FROM Empleados

WHERE Salario > 60000;





Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                               4

En este ejemplo, la vista            VistaEmpleados       se actualiza para incluir también la columna

## FechaContratacion       y el filtro de salario se ajusta a empleados con salarios superiores

a 60,000.


## 3. Sentencia DROP

La sentencia DROP se usa para eliminar objetos existentes en la base de datos.

Esto incluye tablas, índices, vistas y esquemas. Cuando se elimina un objeto,

todos los datos y la estructura asociada también se eliminan.


a. Eliminar una Tabla

Sintaxis:


DROP TABLE nombre_tabla;



Ejemplo:


DROP TABLE Empleados;



## En este ejemplo, la tabla             Empleados       y todos sus datos asociados se eliminan de la

base de datos.


b. Eliminar un Índice


Sintaxis:


DROP INDEX nombre_indice;



Ejemplo:


DROP INDEX idx_nombre;



En este ejemplo, el índice             idx_nombre       en la tabla   Empleados   se elimina.

c. Eliminar una Vista


Sintaxis:


DROP VIEW nombre_vista;





Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                                      5

Ejemplo:


DROP VIEW VistaEmpleados;



En este ejemplo, la vista            VistaEmpleados   se elimina de la base de datos.


## Conclusión

## Las sentencias DDL son fundamentales para la gestión de la estructura de una

base de datos en SQL. Utilizando CREATE , ALTER y DROP , los administradores y

diseñadores de bases de datos pueden definir, modificar y eliminar objetos en la

base de datos de manera efectiva. Estas operaciones son esenciales para adaptar

la base de datos a las necesidades cambiantes y mantener su integridad y

rendimiento.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo

## Mail: gcuneo@etec.uba.ar





Sentencias DDL (Data Definition Language): CREATE, ALTER, DROP                                     6

