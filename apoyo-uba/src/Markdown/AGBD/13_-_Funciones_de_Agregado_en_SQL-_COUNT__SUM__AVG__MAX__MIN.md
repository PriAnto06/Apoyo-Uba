# PDF Content

Funciones de Agregado en SQL:

## COUNT , SUM , AVG , MAX , MIN


## Las funciones de agregado en SQL se utilizan para realizar cálculos en un

conjunto de registros y devolver un único valor. Estas funciones son útiles para

obtener resúmenes y estadísticas de los datos en una tabla. A continuación se

describen las funciones de agregado más comunes: COUNT , SUM , AVG , MAX y MIN .


## 1. COUNT

## La función COUNT se utiliza para contar el número de filas que cumplen con una

condición o el número total de filas en una columna.

a. Contar Todas las Filas

Sintaxis:


## SELECT COUNT(*)

FROM nombre_tabla;



Ejemplo:


## SELECT COUNT(*)

FROM Empleados;



En este ejemplo:


La consulta devuelve el número total de filas en la tabla   Empleados   .


b. Contar Filas con Valores No Nulos en una Columna

Sintaxis:


## SELECT COUNT(columna)

FROM nombre_tabla;





## Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                       1

Ejemplo:


## SELECT COUNT(Salario)

FROM Empleados;



En este ejemplo:


## La consulta devuelve el número de registros en la columna         Salario   que no

tienen valores nulos.


## 2. SUM

## La función      SUM   se utiliza para calcular la suma total de los valores en una columna

numérica.

Sintaxis:


## SELECT SUM(columna)

FROM nombre_tabla;



Ejemplo:


## SELECT SUM(Salario)

FROM Empleados;



En este ejemplo:


## La consulta devuelve la suma total de los valores en la columna        Salario   de la

tabla   Empleados   .


a. Sumar con Condiciones


Sintaxis:


## SELECT SUM(columna)

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:





Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                                  2

## SELECT SUM(Salario)

## FROM Empleados

WHERE FechaContratacion >= '2024-01-01';



En este ejemplo:


## La consulta devuelve la suma total de los salarios de los empleados

contratados a partir del 1 de enero de 2024.


## 3. AVG

## La función      AVG   se utiliza para calcular el promedio de los valores en una columna

numérica.

Sintaxis:


## SELECT AVG(columna)

FROM nombre_tabla;



Ejemplo:


## SELECT AVG(Salario)

FROM Empleados;



En este ejemplo:


## La consulta devuelve el salario promedio de los empleados en la tabla

Empleados .



a. Promedio con Condiciones

Sintaxis:


## SELECT AVG(columna)

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:





Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                               3

## SELECT AVG(Salario)

## FROM Empleados

WHERE Departamento = 'Ventas';



En este ejemplo:


## La consulta devuelve el salario promedio de los empleados en el

departamento de ventas.


## 4. MAX

La función      MAX   se utiliza para encontrar el valor máximo en una columna.


Sintaxis:


## SELECT MAX(columna)

FROM nombre_tabla;



Ejemplo:


## SELECT MAX(Salario)

FROM Empleados;



En este ejemplo:


## La consulta devuelve el salario más alto en la columna      Salario   de la tabla

Empleados   .


a. Máximo con Condiciones


Sintaxis:


## SELECT MAX(columna)

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:





Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                             4

## SELECT MAX(Salario)

## FROM Empleados

WHERE FechaContratacion >= '2024-01-01';



En este ejemplo:


## La consulta devuelve el salario más alto de los empleados contratados a partir

del 1 de enero de 2024.


## 5. MIN

La función      MIN   se utiliza para encontrar el valor mínimo en una columna.

Sintaxis:


## SELECT MIN(columna)

FROM nombre_tabla;



Ejemplo:


## SELECT MIN(Salario)

FROM Empleados;



En este ejemplo:


## La consulta devuelve el salario más bajo en la columna       Salario   de la tabla

Empleados .



a. Mínimo con Condiciones

Sintaxis:


## SELECT MIN(columna)

## FROM nombre_tabla

WHERE condiciones;



Ejemplo:





Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                              5

## SELECT MIN(Salario)

## FROM Empleados

WHERE Departamento = 'Marketing';



En este ejemplo:


## La consulta devuelve el salario más bajo de los empleados en el departamento

de marketing.


## Conclusión

## Las funciones de agregado en SQL son esenciales para realizar cálculos y

resúmenes de datos en una base de datos. COUNT permite contar filas o valores no

nulos, SUM calcula la suma total de valores numéricos, AVG determina el promedio,

## MAX encuentra el valor máximo y MIN encuentra el valor mínimo. Estas funciones


se pueden utilizar solas o en combinación con cláusulas como WHERE para obtener

estadísticas detalladas y útiles sobre los datos almacenados en la base de datos.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA

## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Funciones de Agregado en SQL: COUNT, SUM, AVG, MAX, MIN                                        6

