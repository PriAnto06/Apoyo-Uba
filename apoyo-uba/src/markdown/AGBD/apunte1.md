# PDF Content

## Conceptos Básicos de Bases de

## Datos


## 1. ¿Qué es una Base de Datos?

## Una base de datos es un conjunto organizado de datos que se almacena y se

accede electrónicamente. Imagina una biblioteca, donde los libros (datos) están

organizados en estanterías (tablas) para que sea fácil encontrar lo que necesitas.

## De manera similar, en una base de datos, los datos están organizados para que se

puedan recuperar, gestionar y actualizar de manera eficiente.

Ejemplo:

•    Un sistema de base de datos de una biblioteca podría contener tablas como

## Libros, Autores, Usuarios, donde cada tabla almacena datos específicos

relacionados con la biblioteca.



## 2. ¿Qué es un Sistema de Gestión de Bases de Datos (DBMS)?

## Un Sistema de Gestión de Bases de Datos (DBMS, por sus siglas en inglés) es un

software que permite a los usuarios crear, gestionar y manipular bases de datos.

## Actúa como un intermediario entre el usuario y la base de datos para garantizar

que los datos se almacenen de manera segura y se puedan acceder fácilmente.


Ejemplo:

•   MySQL, PostgreSQL y Oracle son ejemplos de DBMS que permiten a las

organizaciones gestionar sus datos de manera efectiva.



## 3. Tipos de Bases de Datos

## Existen varios tipos de bases de datos, cada uno diseñado para diferentes

propósitos:

•      Bases de Datos Jerárquicas: Los datos se organizan en una estructura en

forma de árbol, con relaciones padre-hijo.




## Conceptos Básicos de Bases de Datos                                                             1

•   Ejemplo: Un directorio de archivos en una computadora, donde cada carpeta

puede contener subcarpetas o archivos.

•   Bases de Datos en Red: Similar a la jerárquica, pero aquí un registro puede

tener múltiples padres, lo que permite relaciones más complejas.

•   Ejemplo: Un sistema de gestión de una universidad, donde un estudiante

puede estar relacionado con varios cursos, y cada curso puede tener varios

profesores.

•    Bases de Datos Relacionales: Organizan los datos en tablas que pueden

estar relacionadas entre sí. Este es el tipo más común.

•    Ejemplo: Una tienda en línea podría tener una base de datos relacional con

tablas como Clientes, Pedidos, Productos, donde cada tabla almacena datos

específicos.

•   Bases de Datos NoSQL: Están diseñadas para manejar grandes volúmenes

de datos no estructurados y pueden ser documentales, de clave-valor, de

columnas o de grafos.

•   Ejemplo: MongoDB es una base de datos NoSQL documental que almacena

datos en formato JSON.



## 4. ¿Por qué son importantes las Bases de Datos?


## Las bases de datos son cruciales para cualquier organización porque permiten el

almacenamiento, organización y recuperación eficiente de grandes cantidades de

datos. Sin bases de datos, gestionar información de manera estructurada y

accesible sería muy difícil, lo que afectaría la toma de decisiones y el

funcionamiento general de una empresa.


Ejemplo práctico:

•    Sistema de Gestión de un Hospital: Una base de datos puede almacenar

información sobre pacientes, médicos, citas y tratamientos. Esto permite al

hospital acceder rápidamente a los historiales médicos, programar citas y

gestionar los recursos de manera efectiva.



## 5. Componentes de una Base de Datos




## Conceptos Básicos de Bases de Datos                                                          2

Los principales componentes de una base de datos son:


Tablas: Almacenan los datos en filas y columnas.


Ejemplo: Una tabla Clientes podría tener columnas como ID, Nombre, Email,

Teléfono.


## Registros: Cada fila en una tabla es un registro que contiene datos sobre una

entidad específica.


Ejemplo: Un registro en la tabla Clientes podría ser (1, “Juan Pérez”,

“juan@example.com”, “123456789”).


## Campos: Cada columna en una tabla representa un campo, que es una

categoría de datos.


## Ejemplo: El campo Nombre en la tabla Clientes almacena los nombres de los

clientes.


Índices: Ayudan a acelerar las consultas en la base de datos.


## Ejemplo: Crear un índice en el campo Email de la tabla Clientes permitiría

buscar clientes por correo electrónico más rápidamente.


## Consultas: Son instrucciones que se utilizan para extraer o manipular datos

en una base de datos.


## Ejemplo: Una consulta para obtener todos los clientes cuyo nombre empieza

con “Juan” sería:


SELECT * FROM Clientes WHERE Nombre LIKE 'Juan%';



## Ejemplo Ilustrativo

## Imagina que tienes una lista de contactos en tu teléfono. Si quieres encontrar el

número de un amigo, normalmente buscarías por su nombre. Ahora, si tu lista de

contactos fuera una base de datos, su estructura sería algo así:


## Tabla:    Contactos



## Campos:        Nombre   ,   Teléfono   ,   Email


Registros: Cada contacto en tu lista sería un registro con datos específicos.





Conceptos Básicos de Bases de Datos                                                                3

## Una consulta sería como usar la función de búsqueda en tu teléfono para

encontrar el contacto. Esto es esencialmente lo que haces en una base de datos,

pero a una escala mucho mayor y con la capacidad de realizar análisis más

complejos.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Conceptos Básicos de Bases de Datos                                                          4

