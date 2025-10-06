# PDF Content

## Agrupaciones y Subconsultas

en SQL: GROUP BY , HAVING


## Las cláusulas       GROUP BY    y   HAVING   se utilizan para realizar agrupaciones y aplicar

condiciones a los resultados de estas agrupaciones. Las subconsultas permiten

realizar consultas anidadas que pueden servir para obtener datos intermedios o

realizar filtrados adicionales.


## 1. GROUP BY

## La cláusula GROUP BY se utiliza para agrupar filas que tienen valores iguales en

columnas específicas. Es comúnmente usada junto con funciones de agregado

como COUNT , SUM , AVG , MAX y MIN .

Sintaxis:


## SELECT columna1, función_agregada(columna2)

## FROM nombre_tabla

GROUP BY columna1;



Ejemplo:


## SELECT Departamento, COUNT(*)

## FROM Empleados

GROUP BY Departamento;



En este ejemplo:


## La consulta agrupa los registros de la tabla            Empleados   por la columna

Departamento    y cuenta el número de empleados en cada departamento.


a. Agrupación Múltiple

Sintaxis:





Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                                       1

## SELECT columna1, columna2, función_agregada(columna3)

## FROM nombre_tabla

GROUP BY columna1, columna2;



Ejemplo:


## SELECT Departamento, Ciudad, AVG(Salario)

## FROM Empleados

GROUP BY Departamento, Ciudad;



En este ejemplo:


## La consulta agrupa los registros por Departamento y Ciudad , y calcula el salario

promedio para cada combinación de departamento y ciudad.


b. Ordenar Resultados Agrupados

Sintaxis:


## SELECT columna1, función_agregada(columna2)

## FROM nombre_tabla

## GROUP BY columna1

ORDER BY función_agregada(columna2) [ASC|DESC];



Ejemplo:


## SELECT Departamento, AVG(Salario)

## FROM Empleados

## GROUP BY Departamento

ORDER BY AVG(Salario) DESC;



En este ejemplo:


## La consulta agrupa por Departamento , calcula el salario promedio para cada

departamento, y ordena los resultados por el salario promedio en orden

descendente.





Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                                2

## 2. HAVING

## La cláusula HAVING se utiliza para aplicar condiciones a los grupos de resultados

creados con GROUP BY . A diferencia de la cláusula WHERE , que filtra filas antes de

agrupar,     HAVING   filtra después de agrupar.

Sintaxis:


## SELECT columna1, función_agregada(columna2)

## FROM nombre_tabla

## GROUP BY columna1

HAVING condición;



Ejemplo:


## SELECT Departamento, COUNT(*)

## FROM Empleados

## GROUP BY Departamento

HAVING COUNT(*) > 10;



En este ejemplo:


## La consulta agrupa los registros por Departamento y cuenta el número de

empleados en cada departamento. Luego, solo se devuelven los

departamentos que tienen más de 10 empleados.


a. Condiciones Complejas en                 HAVING


Sintaxis:


## SELECT columna1, función_agregada(columna2)

## FROM nombre_tabla

## GROUP BY columna1

HAVING función_agregada(columna2) condición;



Ejemplo:


## SELECT Departamento, AVG(Salario)

## FROM Empleados




## Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                              3

## GROUP BY Departamento

HAVING AVG(Salario) > 3000;



En este ejemplo:


## La consulta agrupa los registros por Departamento , calcula el salario promedio

para cada departamento y devuelve solo aquellos departamentos cuyo salario

promedio es mayor a 3000.


## 3. Subconsultas

## Una subconsulta es una consulta anidada dentro de otra consulta. Se puede usar

en las cláusulas        SELECT   ,   WHERE   ,   HAVING   y   FROM   .


a. Subconsulta en          SELECT


Sintaxis:


## SELECT columna1, (SELECT función_agregada(columna2) FROM nomb

re_tabla2 WHERE condiciones) AS alias

FROM nombre_tabla1;



Ejemplo:


## SELECT Nombre, (SELECT AVG(Salario) FROM Empleados) AS Salari

oPromedio

FROM Empleados;



En este ejemplo:


## La subconsulta calcula el salario promedio de todos los empleados y el

resultado se muestra en cada fila de la consulta principal.


b. Subconsulta en          WHERE


Sintaxis:


## SELECT columna1

## FROM nombre_tabla





## Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                              4

## WHERE columna2 = (SELECT columna2 FROM nombre_tabla2 WHERE co

ndiciones);



Ejemplo:


## SELECT Nombre

## FROM Empleados

WHERE Salario > (SELECT AVG(Salario) FROM Empleados);



En este ejemplo:


## La subconsulta calcula el salario promedio de los empleados, y la consulta

principal devuelve los nombres de los empleados cuyo salario es mayor que

este promedio.


c. Subconsulta en          HAVING


Sintaxis:


## SELECT columna1, función_agregada(columna2)

## FROM nombre_tabla

## GROUP BY columna1

## HAVING función_agregada(columna2) > (SELECT función_agregada

(columna2) FROM nombre_tabla2 WHERE condiciones);



Ejemplo:


## SELECT Departamento, AVG(Salario)

## FROM Empleados

## GROUP BY Departamento

HAVING AVG(Salario) > (SELECT AVG(Salario) FROM Empleados);



En este ejemplo:


## La subconsulta calcula el salario promedio de todos los empleados, y la

consulta principal devuelve los departamentos cuyo salario promedio es

mayor que el promedio general.


d. Subconsulta en          FROM





## Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                         5

Sintaxis:


## SELECT columna1

## FROM (SELECT columna1, función_agregada(columna2) FROM nombre

_tabla2 GROUP BY columna1) AS alias

WHERE condición;



Ejemplo:


## SELECT Departamento, SalarioPromedio

## FROM (SELECT Departamento, AVG(Salario) AS SalarioPromedio FR

## OM Empleados GROUP BY Departamento) AS Subconsulta

WHERE SalarioPromedio > 3000;



En este ejemplo:


## La subconsulta calcula el salario promedio por departamento y la consulta

principal filtra los departamentos cuyo salario promedio es mayor a 3000.


## Conclusión

## Las cláusulas GROUP BY y HAVING son esenciales para agrupar datos y aplicar filtros

a los grupos resultantes. La cláusula GROUP BY agrupa los datos según una o más

columnas y permite aplicar funciones de agregado, mientras que     HAVING   filtra los

resultados agrupados según condiciones específicas. Las subconsultas permiten

realizar consultas más complejas al anidar consultas dentro de otras consultas,

proporcionando flexibilidad y poder en la manipulación y análisis de datos.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo




Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING                                                6

## Mail: gcuneo@etec.uba.ar





## Agrupaciones y Subconsultas en SQL: GROUP BY, HAVING   7

