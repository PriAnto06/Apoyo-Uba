# PDF Content

## Joins en SQL: INNER JOIN , LEFT

## JOIN , RIGHT JOIN , FULL JOIN


## Los joins en SQL se utilizan para combinar filas de dos o más tablas basándose en

una condición relacionada entre ellas. A continuación se describen los tipos más

comunes de joins:           INNER JOIN    ,   LEFT JOIN   ,   RIGHT JOIN   y   FULL JOIN   , junto con ejemplos

para cada uno.


## 1. INNER JOIN

## El INNER JOIN devuelve solo las filas que tienen coincidencias en ambas tablas. Si

no hay coincidencia, la fila no aparece en el resultado.

Sintaxis:


SELECT columna1, columna2, ...

## FROM tabla1

## INNER JOIN tabla2

ON tabla1.columna_común = tabla2.columna_común;



Ejemplo:

Supongamos que tenemos dos tablas:

## Empleados y Departamentos . Queremos recuperar los empleados y sus


departamentos.


## SELECT Empleados.Nombre, Departamentos.NombreDepartamento

## FROM Empleados

## INNER JOIN Departamentos

ON Empleados.DepartamentoID = Departamentos.DepartamentoID;



En este ejemplo:


## La consulta devuelve los nombres de los empleados y los nombres de los

departamentos, pero solo para aquellos empleados que tienen un




Joins en SQL: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN                                                                   1

departamento asociado.


## 2. LEFT JOIN (o LEFT OUTER JOIN )

## El LEFT JOIN devuelve todas las filas de la tabla de la izquierda (la primera tabla), y

las filas coincidentes de la tabla de la derecha (la segunda tabla). Si no hay

coincidencia, las columnas de la tabla de la derecha tendrán valores nulos.

Sintaxis:


SELECT columna1, columna2, ...

## FROM tabla1

## LEFT JOIN tabla2

ON tabla1.columna_común = tabla2.columna_común;



Ejemplo:

## Supongamos que queremos obtener una lista de todos los empleados y sus

departamentos, incluyendo aquellos empleados que no están asignados a ningún

departamento.


## SELECT Empleados.Nombre, Departamentos.NombreDepartamento

## FROM Empleados

## LEFT JOIN Departamentos

ON Empleados.DepartamentoID = Departamentos.DepartamentoID;



En este ejemplo:


## La consulta devuelve todos los empleados. Si un empleado no está asociado a

un departamento, la columna NombreDepartamento tendrá un valor nulo.


## 3. RIGHT JOIN (o RIGHT OUTER JOIN )

## El RIGHT JOIN devuelve todas las filas de la tabla de la derecha (la segunda tabla), y

las filas coincidentes de la tabla de la izquierda (la primera tabla). Si no hay

coincidencia, las columnas de la tabla de la izquierda tendrán valores nulos.


Sintaxis:





Joins en SQL: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN                                           2

SELECT columna1, columna2, ...

## FROM tabla1

## RIGHT JOIN tabla2

ON tabla1.columna_común = tabla2.columna_común;



Ejemplo:

## Supongamos que queremos obtener una lista de todos los departamentos y los

empleados que trabajan en ellos, incluyendo aquellos departamentos que no

tienen empleados asignados.


## SELECT Empleados.Nombre, Departamentos.NombreDepartamento

## FROM Empleados

## RIGHT JOIN Departamentos

ON Empleados.DepartamentoID = Departamentos.DepartamentoID;



En este ejemplo:


## La consulta devuelve todos los departamentos. Si un departamento no tiene

empleados, la columna Nombre tendrá un valor nulo.


## 4. FULL JOIN (o FULL OUTER JOIN )

## El FULL JOIN devuelve todas las filas cuando hay una coincidencia en una de las

tablas. Devuelve filas coincidentes de ambas tablas, así como filas que no tienen

coincidencia en una de las tablas, con valores nulos en las columnas

correspondientes.


Sintaxis:


SELECT columna1, columna2, ...

## FROM tabla1

## FULL JOIN tabla2

ON tabla1.columna_común = tabla2.columna_común;



Ejemplo:

## Supongamos que queremos obtener una lista completa de empleados y





## Joins en SQL: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN                                     3

departamentos, incluyendo empleados sin departamento y departamentos sin

empleados.


## SELECT Empleados.Nombre, Departamentos.NombreDepartamento

## FROM Empleados

## FULL JOIN Departamentos

ON Empleados.DepartamentoID = Departamentos.DepartamentoID;



En este ejemplo:


## La consulta devuelve todos los empleados y todos los departamentos. Las

filas que no tienen coincidencias en la otra tabla tendrán valores nulos en las

columnas correspondientes.


## Conclusión

## Los joins en SQL son fundamentales para combinar y relacionar datos de

múltiples tablas. INNER JOIN devuelve solo las filas con coincidencias en ambas

tablas, LEFT JOIN incluye todas las filas de la tabla de la izquierda y las

coincidencias de la tabla de la derecha, RIGHT JOIN incluye todas las filas de la

tabla de la derecha y las coincidencias de la tabla de la izquierda, y FULL JOIN

combina todas las filas de ambas tablas, mostrando coincidencias y no

coincidencias con valores nulos donde no hay correspondencia. Usar estos joins

correctamente permite realizar consultas complejas y obtener datos significativos

a partir de relaciones entre tablas.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo

## Mail: gcuneo@etec.uba.ar





Joins en SQL: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN                                         4

