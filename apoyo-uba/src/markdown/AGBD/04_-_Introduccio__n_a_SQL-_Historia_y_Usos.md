# PDF Content

## Introducción a SQL: Historia y

## Usos


## 1. ¿Qué es SQL?

## SQL (Structured Query Language) es un lenguaje estándar utilizado para

gestionar y manipular bases de datos relacionales. SQL permite a los usuarios

ejecutar una variedad de operaciones en los datos almacenados, como consultas,

inserciones, actualizaciones, eliminaciones y más. A lo largo de los años, SQL se

ha convertido en la herramienta fundamental para interactuar con bases de datos

relacionales.

Ejemplo simple:


## Si quieres encontrar todos los estudiantes en una base de datos que hayan

aprobado un examen, puedes usar una consulta SQL para obtener esa

información en segundos.


## 2. Historia de SQL

1970 - El Origen:


## SQL tiene sus raíces en los años 70, cuando Edgar F. Codd, un científico de

## IBM, publicó un artículo sobre el modelo de datos relacional. Este modelo

proponía que los datos podían organizarse en tablas, permitiendo un acceso

más flexible y eficiente a la información.


1974 - El Lenguaje SEQUEL:


Inspirado por el trabajo de Codd, Donald D. Chamberlin y Raymond F. Boyce,

también de IBM, desarrollaron un lenguaje llamado SEQUEL (Structured

English Query Language) para interactuar con bases de datos relacionales.

## SEQUEL más tarde se renombró a SQL debido a problemas de marca

registrada.


1979 - Comercialización:





## Introducción a SQL: Historia y Usos                                                             1

## Relational Software, Inc. (que luego se convertiría en Oracle Corporation)

lanzó la primera implementación comercial de SQL con su producto Oracle V2.

Este fue el primer DBMS comercial en utilizar SQL.


1986 - Estandarización:


## El American National Standards Institute (ANSI) adoptó SQL como estándar

para bases de datos relacionales. Esto marcó el comienzo de SQL como el

lenguaje dominante para bases de datos.


Evolución y Actualidad:


## A lo largo de las décadas, SQL ha sido mejorado y ampliado con

características adicionales, como transacciones, control de concurrencia,

procedimientos almacenados, y mucho más. Sigue siendo el estándar en la

mayoría de las bases de datos relacionales modernas, incluyendo MySQL,

PostgreSQL, Microsoft SQL Server, y Oracle Database.


## 3. Usos de SQL

a. Consultas de Datos:


## SQL se utiliza principalmente para consultar datos almacenados en una base

de datos. Esto incluye la selección de datos específicos, la combinación de

datos de múltiples tablas, y la agregación de datos para obtener estadísticas.


Ejemplo:


SELECT nombre, edad FROM estudiantes WHERE edad > 18;



## Esta consulta selecciona los nombres y edades de todos los estudiantes mayores

de 18 años.


b. Manipulación de Datos (DML):


## SQL permite la inserción, actualización y eliminación de datos en una base de

datos.


Ejemplos:


Inserción:





Introducción a SQL: Historia y Usos                                                                2

INSERT INTO estudiantes (nombre, edad) VALUES ('Ana', 20);



Actualización:


UPDATE estudiantes SET edad = 21 WHERE nombre = 'Ana';



Eliminación:


DELETE FROM estudiantes WHERE nombre = 'Ana';



c. Definición de Datos (DDL):


## SQL se utiliza para definir y modificar la estructura de la base de datos, como

la creación de tablas, la alteración de tablas existentes, y la eliminación de

tablas.


Ejemplos:


Creación de tabla:


## CREATE TABLE estudiantes (

id INT PRIMARY KEY,

nombre VARCHAR(50),

edad INT

);



Alteración de tabla:


ALTER TABLE estudiantes ADD COLUMN direccion VARCHAR(100);



Eliminación de tabla:


DROP TABLE estudiantes;



d. Control de Acceso (DCL):





Introducción a SQL: Historia y Usos                                                                 3

## SQL también se utiliza para gestionar permisos y controlar el acceso a los

datos, asegurando que solo los usuarios autorizados puedan ver o modificar

la información.


Ejemplo:


GRANT SELECT ON estudiantes TO usuario1;



## Este comando concede permisos de solo lectura sobre la tabla      estudiantes   al

usuario       usuario1    .

e. Control de Transacciones (TCL):


## SQL proporciona comandos para gestionar transacciones, asegurando que las

operaciones sobre los datos sean consistentes y fiables. Esto incluye

comandos para iniciar una transacción, confirmar los cambios, o deshacer los

cambios en caso de error.


Ejemplo:


BEGIN TRANSACTION;

UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;

UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;

COMMIT;



Este ejemplo transfiere dinero de una cuenta a otra de manera segura,

asegurando que ambas actualizaciones se realicen juntas o no se realice ninguna.


## 4. Ventajas de Usar SQL

## Universalidad: SQL es el estándar en la mayoría de las bases de datos

relacionales, lo que significa que aprender SQL te permite trabajar con casi

cualquier DBMS.


## Simplicidad: Es un lenguaje declarativo, lo que significa que describes qué

quieres obtener sin preocuparte de cómo se va a realizar la operación.


## Eficiencia: Permite realizar operaciones complejas en grandes conjuntos de

datos de manera eficiente.





## Introducción a SQL: Historia y Usos                                                              4

## Flexibilidad: SQL es lo suficientemente flexible como para manejar tanto

operaciones simples como complejas, desde consultas básicas hasta análisis

avanzados de datos.


## 5. SQL en el Mundo Real

## Empresas: SQL es utilizado por empresas de todos los tamaños para gestionar

sus datos. Desde una pequeña tienda en línea que utiliza MySQL para su base de

datos de clientes, hasta grandes corporaciones que utilizan Oracle para gestionar

sus datos financieros.


## Desarrolladores: Los desarrolladores utilizan SQL para interactuar con bases de

datos en sus aplicaciones. Por ejemplo, una aplicación web puede utilizar SQL

para almacenar y recuperar datos de usuarios, pedidos, productos, etc.


Analistas de Datos: SQL es una herramienta clave para los analistas de datos,

que la utilizan para extraer, analizar y presentar datos almacenados en grandes

bases de datos.


## Conclusión

## SQL es el lenguaje fundamental para trabajar con bases de datos relacionales. Su

historia refleja su importancia y evolución como herramienta clave en el manejo

de datos. Desde su creación en los años 70 hasta su uso en la actualidad, SQL ha

demostrado ser una tecnología robusta y versátil que sigue siendo esencial para

cualquier profesional que trabaje con bases de datos.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Introducción a SQL: Historia y Usos                                                             5

