# PDF Content

## Normalización: Formas

normales (1NF, 2NF, 3NF, BCNF).


## 1. ¿Qué es la Normalización?

## La normalización es un proceso en el diseño de bases de datos que organiza los

datos para minimizar la redundancia y evitar problemas de inconsistencia. El

objetivo principal de la normalización es descomponer las tablas en estructuras

más pequeñas y manejables, asegurando que los datos estén distribuidos de

manera eficiente y que las dependencias entre los datos sean claras y no

redundantes.

## El proceso de normalización se realiza mediante la aplicación de una serie de

reglas llamadas Formas Normales (Normal Forms), que van desde la Primera

## Forma Normal (1NF) hasta formas más avanzadas como la Tercera Forma Normal

(3NF) y la Forma Normal de Boyce-Codd (BCNF).


## 2. Primera Forma Normal (1NF)

a. Definición:

## Una tabla está en

Primera Forma Normal (1NF) si cumple con los siguientes requisitos:


## Cada columna de la tabla debe contener valores atómicos, es decir, no

divisibles.


Todos los valores en una columna deben ser del mismo tipo de dato.


Cada fila debe ser única, es decir, no puede haber filas duplicadas.


b. Ejemplo de No 1NF:

Supongamos que tenemos la siguiente tabla:


## ID_Estudiante           Nombre             Cursos_Tomados


## 1                       Juan Pérez         Matemáticas, Física


## 2                       Ana López          Química




## Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                                        1

## 3                       Luis Díaz           Física, Química, Biología


## Aquí, la columna           Cursos_Tomados    contiene valores que no son atómicos (listas de

cursos).

c. Transformación a 1NF:

## Para normalizar esta tabla a 1NF, se descomponen los valores no atómicos en filas

separadas:


## ID_Estudiante           Nombre              Curso


## 1                       Juan Pérez          Matemáticas


## 1                       Juan Pérez          Física


## 2                       Ana López           Química


## 3                       Luis Díaz           Física


## 3                       Luis Díaz           Química


## 3                       Luis Díaz           Biología


Ahora, cada valor en la columna                Curso   es atómico y la tabla está en 1NF.


## 3. Segunda Forma Normal (2NF)

a. Definición:

## Una tabla está en

Segunda Forma Normal (2NF) si cumple con los requisitos de 1NF y, además:


## Todos los atributos no clave deben depender completamente de la clave

primaria. Esto significa que no puede haber dependencias parciales.


b. Ejemplo de No 2NF:

Consideremos la siguiente tabla:


## ID_Pedido               ID_Producto         Nombre_Producto      Cantidad


## 1                       101                 Televisor            2


## 1                       102                 Control Remoto       1


## 2                       103                 Refrigerador         1


Aquí, la clave primaria es la combinación de                 ID_Pedido    y   ID_Producto   . Sin embargo,

el atributo      Nombre_Producto       depende solo de     ID_Producto   , no de la combinación





Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                                                                   2

completa.

c. Transformación a 2NF:

Para llevar esta tabla a 2NF, descomponemos la tabla en dos:


1. Tabla de Pedidos:


## ID_Pedido              ID_Producto       Cantidad


## 1                      101               2


## 1                      102               1


## 2                      103               1


2. Tabla de Productos:


## ID_Producto            Nombre_Producto


## 101                    Televisor


## 102                    Control Remoto


## 103                    Refrigerador


## Ahora, cada atributo no clave depende completamente de la clave primaria en su

respectiva tabla.


## 4. Tercera Forma Normal (3NF)

a. Definición:

## Una tabla está en

Tercera Forma Normal (3NF) si cumple con los requisitos de 2NF y, además:


## No debe haber dependencias transitivas. Es decir, ningún atributo no clave

debe depender de otro atributo no clave.


b. Ejemplo de No 3NF:

Supongamos que tenemos la siguiente tabla:


## ID_Empleado             Nombre_Empleado       ID_Departamento   Nombre_Departamento


## 1                       Juan Pérez            10                Ventas


## 2                       Ana López             20                Finanzas


## 3                       Luis Díaz             10                Ventas





Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                                              3

Aquí, Nombre_Departamento depende de                ID_Departamento   , no directamente de la clave

primaria ID_Empleado .

c. Transformación a 3NF:

Para normalizar esta tabla a 3NF, descomponemos la tabla en dos:


1. Tabla de Empleados:


## ID_Empleado            Nombre_Empleado        ID_Departamento


## 1                      Juan Pérez             10


## 2                      Ana López              20


## 3                      Luis Díaz              10


2. Tabla de Departamentos:


## ID_Departamento          Nombre_Departamento


## 10                       Ventas


## 20                       Finanzas


## Ahora, todos los atributos no clave dependen únicamente de la clave primaria en

su tabla correspondiente.


## 5. Forma Normal de Boyce-Codd (BCNF)

a. Definición:

## La

## Forma Normal de Boyce-Codd (BCNF) es una versión más estricta de la 3NF. Una

tabla está en BCNF si cumple con los requisitos de 3NF y, además:


## Para cada dependencia funcional en la tabla, la parte izquierda (determinante)

debe ser una superclave. Esto significa que la clave que determina otro

atributo debe ser única en la tabla.


b. Ejemplo de No BCNF:

Consideremos la siguiente tabla:


## Curso                   Profesor           Aula


## Matemáticas             Prof. García       Aula 101


## Física                  Prof. López        Aula 102





Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                                                            4

## Matemáticas             Prof. García        Aula 103


Aquí, tenemos una dependencia                 Curso -> Aula   , pero   Curso   no es una superclave,

ya que no identifica de manera única a las filas.

c. Transformación a BCNF:

Para llevar esta tabla a BCNF, descomponemos la tabla en dos:


1. Tabla de Asignaciones:


## Curso                  Profesor


## Matemáticas            Prof. García


## Física                 Prof. López


2. Tabla de Aulas:


## Profesor               Aula


## Prof. García           Aula 101


## Prof. López            Aula 102


## Prof. García           Aula 103


Ahora, cada dependencia funcional se satisface con una superclave.


## Conclusión

## La normalización es un proceso fundamental en el diseño de bases de datos que

garantiza la eficiencia y la integridad de los datos. A través de la aplicación de las

formas normales (1NF, 2NF, 3NF y BCNF), se pueden eliminar redundancias, evitar

anomalías en la actualización de datos, y asegurar que la estructura de la base de

datos sea sólida y fácil de mantener. Cada forma normal añade un nivel de rigor

adicional, asegurando que los datos estén organizados de la manera más óptima

posible.





Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                                                             5

Material de la materia Administración y gestión de bases de datos.

## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Normalización: Formas normales (1NF, 2NF, 3NF, BCNF).                           6

