# PDF Content

Consultas Simples en SQL:

SELECT , WHERE , ORDER BY ,

## LIMIT


## Las consultas simples en SQL permiten recuperar y manipular datos de manera

eficiente. Los principales componentes de las consultas simples incluyen           SELECT   ,

## WHERE , ORDER BY y LIMIT . A continuación, se detallan cada uno de estos


componentes con ejemplos.


## 1. SELECT

## La sentencia SELECT se utiliza para especificar las columnas que se desean

recuperar de una tabla.

Sintaxis:


SELECT columna1, columna2, ...

FROM nombre_tabla;



Ejemplo:


## SELECT Nombre, Salario

FROM Empleados;



En este ejemplo:


## La consulta recupera los datos de las columnas   Nombre   y   Salario   de la tabla

Empleados   .


a. Seleccionar Todas las Columnas

Sintaxis:





Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                                   1

## SELECT *

FROM nombre_tabla;



Ejemplo:


## SELECT *

FROM Empleados;



En este ejemplo:


## La consulta recupera todas las columnas y todos los registros de la tabla

Empleados   .


## 2. WHERE

## La cláusula WHERE se utiliza para filtrar los registros que cumplen con una

condición específica.

Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

WHERE Salario > 3000;



En este ejemplo:


## La consulta recupera los datos de          Nombre   y   Salario   para los empleados cuyo

salario es mayor a 3000.


a. Condiciones Múltiples

Sintaxis:





Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                                    2

SELECT columna1, columna2, ...

## FROM nombre_tabla

WHERE condicion1 AND/OR condicion2;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

WHERE Salario > 3000 AND FechaContratacion < '2024-01-01';



En este ejemplo:


## La consulta recupera             Nombre    y   Salario   para los empleados con un salario

mayor a 3000 y cuya fecha de contratación es anterior al 1 de enero de 2024.


b. Operadores de Comparación y Lógicos


=   : Igual a


<>    o   !=   : Diferente de


>   : Mayor que


<   : Menor que


>=   : Mayor o igual que


<=   : Menor o igual que


## AND   : Y lógico


## OR   : O lógico


## NOT   : Negación


Ejemplo:


## SELECT Nombre

## FROM Empleados

WHERE Salario >= 3000 OR Nombre LIKE 'A%';



En este ejemplo:




Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                                     3

## La consulta recupera los nombres de los empleados cuyo salario es mayor o

igual a 3000, o cuyo nombre comienza con la letra 'A'.


## 3. ORDER BY

## La cláusula ORDER BY se utiliza para ordenar los resultados de la consulta según

una o más columnas, ya sea en orden ascendente ( ASC ) o descendente ( DESC ).


Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

ORDER BY columna [ASC|DESC];



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

ORDER BY Salario DESC;



En este ejemplo:


## La consulta recupera Nombre y Salario de los empleados, ordenados por

Salario en orden descendente.



a. Ordenar por Múltiples Columnas


Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

ORDER BY columna1 [ASC|DESC], columna2 [ASC|DESC];



Ejemplo:


## SELECT Nombre, Salario, FechaContratacion

## FROM Empleados

ORDER BY FechaContratacion ASC, Salario DESC;





## Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                      4

En este ejemplo:


La consulta recupera            Nombre     ,   Salario   y   FechaContratacion   , ordenando primero

por FechaContratacion en orden ascendente y luego por                            Salario   en orden

descendente.


## 4. LIMIT

## La cláusula LIMIT se utiliza para restringir el número de registros devueltos por

una consulta.


Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

LIMIT numero;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados

LIMIT 5;



En este ejemplo:


La consulta recupera solo los primeros 5 registros de la tabla                             Empleados   .


a. Limitar con Offset


Sintaxis:


SELECT columna1, columna2, ...

## FROM nombre_tabla

LIMIT numero OFFSET offset;



Ejemplo:


## SELECT Nombre, Salario

## FROM Empleados





Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                                                   5

LIMIT 5 OFFSET 10;



En este ejemplo:


## La consulta recupera 5 registros comenzando desde el registro 11 (el índice de

registro 10 es el punto de partida).


## Conclusión

## Las consultas simples en SQL permiten extraer y manipular datos de manera

efectiva. La sentencia SELECT es fundamental para recuperar datos, mientras que

## WHERE se usa para filtrar los registros según condiciones específicas. ORDER BY


permite ordenar los resultados, y LIMIT restringe la cantidad de registros

devueltos. Utilizando estas cláusulas en combinación, puedes realizar consultas

precisas y eficientes en tus bases de datos.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Consultas Simples en SQL: SELECT, WHERE, ORDER BY, LIMIT                                         6

