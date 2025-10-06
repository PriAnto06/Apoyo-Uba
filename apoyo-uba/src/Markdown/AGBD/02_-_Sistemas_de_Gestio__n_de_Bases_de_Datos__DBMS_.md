# PDF Content

## Sistemas de Gestión de Bases

de Datos (DBMS)


## 1. ¿Qué es un DBMS?

## Un Sistema de Gestión de Bases de Datos (DBMS, por sus siglas en inglés) es un

software que permite crear, gestionar y manipular bases de datos. Actúa como un

puente entre los datos y los usuarios o aplicaciones, garantizando que los datos

se almacenen de manera organizada, segura y que se puedan acceder fácilmente.

Ejemplo simple:


## Imagina una biblioteca con miles de libros. Un DBMS sería como un sistema

de organización y catalogación que te permite encontrar cualquier libro en

segundos, en lugar de buscar manualmente entre todas las estanterías.


## 2. Funciones Principales de un DBMS

## Almacenamiento de Datos: El DBMS guarda los datos de forma eficiente en

disco, permitiendo su rápida recuperación.


## Manipulación de Datos: Permite insertar, actualizar, eliminar y consultar datos

mediante lenguajes como SQL.


## Seguridad de Datos: Controla el acceso a los datos, asegurando que solo

usuarios autorizados puedan ver o modificar la información.


## Mantenimiento de la Integridad de los Datos: Asegura que los datos sean

consistentes y correctos.


## Control de Concurrencia: Gestiona las operaciones simultáneas de varios

usuarios para evitar conflictos o pérdida de datos.


## Recuperación de Datos: Proporciona mecanismos para restaurar datos en

caso de fallos o pérdida.


Ejemplo práctico:





Sistemas de Gestión de Bases de Datos (DBMS)                                                       1

## En un banco, el DBMS asegura que cuando varias personas realizan

transacciones al mismo tiempo, los datos se actualicen correctamente sin

errores ni pérdida de información.


## 3. Tipos de DBMS

## Relacionales (RDBMS): Almacenan los datos en tablas y permiten relaciones

entre ellas. Utilizan SQL como lenguaje de consulta.


Ejemplos: MySQL, PostgreSQL, Oracle Database.


## Uso típico: Sistemas financieros, gestión de clientes, sistemas de

información empresarial.


## No Relacionales (NoSQL): Diseñados para manejar grandes volúmenes de

datos no estructurados. Son más flexibles que los RDBMS.


## Ejemplos: MongoDB (Documental), Redis (Clave-Valor), Cassandra

(Columnas), Neo4j (Grafos).


## Uso típico: Aplicaciones web con grandes volúmenes de datos, redes

sociales, análisis en tiempo real.


## Jerárquicos: Organizan los datos en una estructura en forma de árbol, donde

cada registro tiene un único padre.


Ejemplo: IBM Information Management System (IMS).


## Uso típico: Aplicaciones antiguas, como sistemas de gestión de reservas

de vuelos.


## En Red: Permiten que un registro tenga múltiples padres, lo que facilita

relaciones más complejas.


Ejemplo: IDMS (Integrated Database Management System).


## Uso típico: Sistemas donde se requieren relaciones complejas, como

redes de telecomunicaciones.


## 4. Arquitectura de un DBMS

## La arquitectura de un DBMS puede variar según su tipo y complejidad, pero

generalmente tiene tres niveles:





## Sistemas de Gestión de Bases de Datos (DBMS)                                                    2

## Nivel Físico (Interno): Describe cómo se almacenan físicamente los datos en

los dispositivos de almacenamiento. Incluye la estructura de almacenamiento

y los métodos de acceso.


Ejemplo: Cómo se organizan los archivos de datos en un disco duro.


Nivel Conceptual: Ofrece una vista lógica de toda la base de datos,

independiente de la estructura física. Define qué datos se almacenan y las

relaciones entre ellos.


## Ejemplo: Un diagrama de entidad-relación (ER) que muestra las tablas y

sus relaciones.


Nivel Externo (Vista de Usuario): Es la capa más cercana a los usuarios,

proporcionando una vista personalizada de los datos según las necesidades

de cada usuario o aplicación.


## Ejemplo: Un usuario de recursos humanos solo ve los datos de

empleados, mientras que el contable accede a información financiera.


## 5. Ventajas y Desventajas de Usar un DBMS

Ventajas:


## Organización y Acceso Eficiente: Un DBMS permite organizar grandes

volúmenes de datos de manera estructurada, facilitando su acceso rápido.


## Control de Acceso: Gestiona quién puede ver o modificar los datos, lo que es

esencial para la seguridad.


## Integridad de Datos: Asegura que los datos sean correctos y estén libres de

inconsistencias.


## Recuperación ante Fallos: Proporciona mecanismos para restaurar datos en

caso de pérdida o daño.


Desventajas:


## Coste: Implementar y mantener un DBMS puede ser costoso, tanto en

términos de dinero como de recursos.


## Complejidad: La administración de un DBMS requiere conocimientos técnicos

especializados.





## Sistemas de Gestión de Bases de Datos (DBMS)                                                    3

## Rendimiento: Si no se configura adecuadamente, un DBMS puede volverse

lento, especialmente con grandes volúmenes de datos.


## 6. Ejemplo de un Ciclo de Vida de la Gestión de Datos con un

## DBMS

## 1. Definición de la Estructura: Un administrador de base de datos (DBA) define

las tablas y relaciones que se usarán.


Ejemplo: Crear tablas para   Clientes   ,   Pedidos   y   Productos   .


2. Carga de Datos: Los datos se ingresan en la base de datos.


Ejemplo: Insertar registros de clientes con sus datos de contacto.


## 3. Consulta de Datos: Los usuarios realizan consultas para recuperar

información.


## Ejemplo: Un representante de ventas consulta todos los pedidos de un

cliente específico.


4. Actualización de Datos: Se realizan cambios en los datos existentes.


Ejemplo: Actualizar la dirección de un cliente en la tabla                Clientes   .


## 5. Mantenimiento y Optimización: Se realizan tareas para asegurar el buen

rendimiento y seguridad de la base de datos.


Ejemplo: Crear índices para acelerar las consultas más frecuentes.


## 6. Copia de Seguridad y Recuperación: Se realizan copias de seguridad

regulares y se prueban los planes de recuperación ante desastres.


## Ejemplo: Programar backups diarios de toda la base de datos y

almacenarlos en un servidor seguro.




## Resumen

## Este módulo sobre Sistemas de Gestión de Bases de Datos (DBMS) proporciona

una visión general de lo que es un DBMS, sus funciones principales, tipos,

ventajas y desventajas, así como su arquitectura básica. Este conocimiento es

fundamental para entender cómo se gestionan los datos en sistemas modernos y





Sistemas de Gestión de Bases de Datos (DBMS)                                                                   4

por qué los DBMS son esenciales para cualquier organización que maneje

grandes volúmenes de datos.





Material de la materia Administración y gestión de bases de datos.

## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Sistemas de Gestión de Bases de Datos (DBMS)                                        5

