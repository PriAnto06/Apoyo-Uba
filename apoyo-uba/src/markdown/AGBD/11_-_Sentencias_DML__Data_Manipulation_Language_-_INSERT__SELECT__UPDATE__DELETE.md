# PDF Content

## Sentencias DML (Data

Manipulation Language):

INSERT, SELECT, UPDATE,

## DELETE


## Las sentencias DML (Data Manipulation Language) se utilizan para manipular y

gestionar los datos dentro de las tablas de una base de datos. Estas sentencias

permiten insertar, consultar, actualizar y eliminar datos. A continuación, se

detallan las principales sentencias DML: INSERT , SELECT , UPDATE y DELETE .


## 1. Sentencia INSERT

La sentencia        INSERT   se utiliza para agregar nuevos registros a una tabla.

a. Insertar un Solo Registro

Sintaxis:


## INSERT INTO nombre_tabla (columna1, columna2, ...)

VALUES (valor1, valor2, ...);



Ejemplo:


INSERT INTO Empleados (EmpleadoID, Nombre, FechaContratacion,

## Salario)

VALUES (1, 'Juan Pérez', '2024-01-10', 3000.00);



En este ejemplo:


Se insertan valores en las columnas                   EmpleadoID   ,   Nombre   ,   FechaContratacion   y

Salario    de la tabla     Empleados    .


b. Insertar Múltiples Registros




Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                                 1

Sintaxis:


## INSERT INTO nombre_tabla (columna1, columna2, ...)

VALUES (valor1, valor2, ...),

(valor1, valor2, ...),

...;



Ejemplo:


sqlCopiar código

INSERT INTO Empleados (EmpleadoID, Nombre, FechaContratacion,

## Salario)

VALUES (2, 'Ana López', '2024-01-15', 3200.00),

(3, 'Carlos Fernández', '2024-02-01', 2900.00);




En este ejemplo:


Se insertan dos registros nuevos en la tabla                  Empleados   en una sola operación.


c. Insertar Datos Desde Otra Tabla

Sintaxis:


## INSERT INTO nombre_tabla_destino (columna1, columna2, ...)

SELECT columna1, columna2, ...

## FROM nombre_tabla_origen

WHERE condiciones;



Ejemplo:


## INSERT INTO EmpleadosAntiguos (EmpleadoID, Nombre, FechaContr

atacion)

## SELECT EmpleadoID, Nombre, FechaContratacion

## FROM Empleados

WHERE FechaContratacion < '2024-01-01';





Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                        2

En este ejemplo:


Se copian registros de la tabla Empleados a la tabla                        EmpleadosAntiguos   basándose

en la condición de FechaContratacion .


## 2. Sentencia SELECT

## La sentencia SELECT se utiliza para consultar y recuperar datos de una o más

tablas. Es una de las sentencias más versátiles y poderosas en SQL.


a. Seleccionar Todas las Columnas

Sintaxis:


## SELECT *

FROM nombre_tabla;



Ejemplo:


## SELECT *

FROM Empleados;



En este ejemplo:


Se seleccionan todas las columnas y todos los registros de la tabla                              Empleados   .


b. Seleccionar Columnas Específicas

Sintaxis:


SELECT columna1, columna2, ...

FROM nombre_tabla;



Ejemplo:


## SELECT Nombre, Salario

FROM Empleados;



En este ejemplo:


Se seleccionan solo las columnas                  Nombre      y   Salario   de la tabla   Empleados   .




Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                                      3

c. Filtrar Resultados

Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

WHERE Salario > 3000;



En este ejemplo:


## Se seleccionan          Nombre   y   Salario   de los empleados cuyo        Salario   es mayor a

3000.


d. Ordenar Resultados


Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

ORDER BY columna [ASC|DESC];



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

ORDER BY Salario DESC;



En este ejemplo:


## Se seleccionan          Nombre   y   Salario   y se ordenan por   Salario    en orden

descendente.


e. Limitar Resultados





Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                        4

Sintaxis (en MySQL y PostgreSQL):


SELECT columna1, columna2, ...

## FROM nombre_tabla

LIMIT numero;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

LIMIT 5;



En este ejemplo:


Se seleccionan solo los primeros 5 registros de la tabla           Empleados   .


## 3. Sentencia UPDATE

La sentencia        UPDATE   se utiliza para modificar los datos existentes en una tabla.


Sintaxis:


## UPDATE nombre_tabla

SET columna1 = valor1, columna2 = valor2, ...

WHERE condiciones;



Ejemplo:


## UPDATE Empleados

## SET Salario = 3500.00

WHERE EmpleadoID = 1;



En este ejemplo:


Se actualiza el         Salario   a 3500.00 para el empleado con   EmpleadoID      igual a 1.


b. Actualizar Múltiples Registros


Sintaxis:





Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                     5

## UPDATE nombre_tabla

SET columna1 = valor1, columna2 = valor2, ...

WHERE condiciones;



Ejemplo:


## UPDATE Empleados

## SET Salario = Salario * 1.10

WHERE FechaContratacion < '2024-01-01';



En este ejemplo:


## Se incrementa el Salario en un 10% para todos los empleados cuya

FechaContratacion es anterior al 1 de enero de 2024.




## 4. Sentencia DELETE

La sentencia        DELETE   se utiliza para eliminar registros de una tabla.


a. Eliminar Registros Específicos


Sintaxis:


## DELETE FROM nombre_tabla

WHERE condiciones;



Ejemplo:


## DELETE FROM Empleados

WHERE EmpleadoID = 3;



En este ejemplo:


Se elimina el registro del empleado con                       EmpleadoID   igual a 3.


b. Eliminar Todos los Registros


Sintaxis:





Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                             6

DELETE FROM nombre_tabla;



Ejemplo:


DELETE FROM Empleados;



En este ejemplo:


Se eliminan todos los registros de la tabla                   Empleados   , pero la estructura de la

tabla permanece intacta.


## Conclusión

## Las sentencias DML permiten realizar operaciones fundamentales sobre los datos

en una base de datos SQL. Usar INSERT para agregar datos, SELECT para consultar

y recuperar información, UPDATE para modificar registros existentes y DELETE para

eliminar datos son operaciones básicas que forman la base de la manipulación de

datos en bases de datos relacionales. Cada sentencia tiene una sintaxis

específica y opciones que permiten personalizar las consultas y modificaciones

para satisfacer diversas necesidades de gestión de datos.





Material de la materia Administración y gestión de bases de datos.

## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo

## Mail: gcuneo@etec.uba.ar





Sentencias DML (Data Manipulation Language): INSERT, SELECT, UPDATE, DELETE                                            7

