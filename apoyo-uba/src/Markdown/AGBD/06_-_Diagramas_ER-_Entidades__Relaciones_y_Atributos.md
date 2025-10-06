# PDF Content

Diagramas ER: Entidades,

## Relaciones y Atributos


## 1. ¿Qué son los Diagramas ER?

## Los Diagramas Entidad-Relación (ER) son representaciones gráficas que se

utilizan para diseñar y modelar la estructura de una base de datos. Estos

diagramas describen cómo las entidades (que representan objetos o conceptos

del mundo real) se relacionan entre sí dentro de un sistema de información. Un

diagrama ER es una herramienta clave para visualizar y planificar la base de datos

antes de su implementación.


## 2. Entidades en un Diagrama ER

a. ¿Qué es una Entidad?

## Una

entidad es cualquier objeto o concepto del mundo real sobre el cual queremos

almacenar datos. Las entidades son las piezas fundamentales en un modelo de

base de datos, y pueden representar cosas físicas, como personas o productos, o

conceptos más abstractos, como transacciones o eventos.


## Ejemplo: En un sistema de base de datos de una tienda en línea, algunas

posibles entidades podrían ser            Cliente   ,   Pedido   ,y   Producto   .


b. Tipos de Entidades:


## Entidad fuerte (o regular): Tiene existencia independiente en la base de datos

y se identifica de manera única por un atributo clave, como un ID .


## Ejemplo: La entidad       Cliente   con un atributo         ClienteID      que lo identifica de

forma única.


## Entidad débil: No puede existir sin estar asociada a otra entidad fuerte y no

tiene una clave primaria independiente. Depende de la entidad fuerte para su

identificación.





Diagramas ER: Entidades, Relaciones y Atributos                                                                           1

Ejemplo: Una entidad           DetallePedido   que depende de la entidad                Pedido   para

su existencia.


c. Representación gráfica de Entidades:

## En un diagrama ER, las entidades se representan con

rectángulos. El nombre de la entidad se coloca dentro del rectángulo.


## 3. Atributos en un Diagrama ER

a. ¿Qué es un Atributo?

## Un

atributo es una propiedad o característica de una entidad que queremos

almacenar en la base de datos. Cada entidad tiene uno o más atributos que

describen aspectos específicos de esa entidad.


Ejemplo: Para la entidad Cliente , los atributos podrían incluir                    Nombre     ,   Dirección   ,

Teléfono , y Correo Electrónico .



b. Tipos de Atributos:


Atributo simple: No se puede dividir en partes más pequeñas.


Ejemplo:       Edad   .


Atributo compuesto: Se puede dividir en subcomponentes más pequeños.


Ejemplo:       Dirección   , que puede desglosarse en         Calle   ,   Ciudad   ,   Código Postal     ,

etc.


Atributo multivaluado: Puede tener más de un valor para una entidad dada.


## Ejemplo:       Teléfonos   , si un cliente puede tener múltiples números de

teléfono.


Atributo derivado: Puede ser calculado o inferido a partir de otros atributos.


Ejemplo:       Edad   , que puede derivarse de la        Fecha de Nacimiento       .


c. Clave primaria y clave foránea:


## Clave primaria (Primary Key, PK): Es un atributo o conjunto de atributos que

identifica de manera única cada registro en una tabla. En un diagrama ER, la

clave primaria suele estar subrayada.


Ejemplo:       ClienteID   en la entidad   Cliente   .




Diagramas ER: Entidades, Relaciones y Atributos                                                                                      2

## Clave foránea (Foreign Key, FK): Es un atributo que crea una relación entre

dos entidades. Este atributo en una tabla referencia la clave primaria de otra

tabla.


## Ejemplo: ClienteID en la entidad Pedido , donde                   ClienteID   en   Pedido    hace

referencia a ClienteID en Cliente .


d. Representación gráfica de Atributos:

## En un diagrama ER, los atributos se representan con

óvalos conectados a la entidad correspondiente. Los atributos de clave primaria

suelen estar subrayados.


## 4. Relaciones en un Diagrama ER

a. ¿Qué es una Relación?

## Una

relación describe cómo dos o más entidades están asociadas entre sí. Las

relaciones son fundamentales para modelar la interconexión entre diferentes

partes del sistema.


## Ejemplo: En una base de datos de una tienda en línea, podría existir una

relación Realiza entre las entidades             Cliente   y   Pedido    , que indica que un cliente

realiza uno o más pedidos.


b. Grado de relaciones:


Uno a Uno (1:1): Una entidad A se relaciona con una sola entidad B.


Ejemplo: Un          Empleado   tiene asignada una       Oficina   específica.


Uno a Muchos (1): Una entidad A se relaciona con muchas entidades B.


Ejemplo: Un          Cliente    puede realizar varios     Pedidos   .


## Muchos a Muchos (M): Muchas entidades A se relacionan con muchas

entidades B.


## Ejemplo: Estudiantes pueden inscribirse en múltiples                    Cursos   , y un     Curso


puede tener múltiples Estudiantes .


c. Atributos en relaciones:

## Las relaciones también pueden tener atributos propios, que describen

propiedades específicas de la relación.




Diagramas ER: Entidades, Relaciones y Atributos                                                                             3

## Ejemplo: En la relación Realiza entre              Cliente      y    Pedido   , un atributo de la

relación podría ser FechaPedido .


d. Cardinalidad y participación:


## Cardinalidad: Define el número máximo de veces que una entidad puede

participar en una relación. Se representa típicamente como 1, N, o M.


## Ejemplo: En una relación Cliente-Pedido , la cardinalidad podría ser 1, donde

un cliente puede hacer muchos pedidos.


## Participación: Indica si la participación de una entidad en la relación es

obligatoria (total) o opcional (parcial). Se suele representar con líneas dobles

para la participación total y simples para la parcial.


e. Representación gráfica de Relaciones:

## En un diagrama ER, las relaciones se representan con

rombos conectados a las entidades implicadas. La cardinalidad y la participación

suelen indicarse en los extremos de las líneas que conectan las entidades con la

relación.


## 5. Ejemplo Completo de un Diagrama ER

Supongamos que queremos modelar una base de datos para una tienda en línea.

El diagrama ER podría incluir:


Entidades:


Cliente   : con atributos como     ClienteID    (PK),         Nombre   ,   Correo Electrónico          ,

Teléfono   .


Producto   : con atributos como     ProductoID       (PK),      NombreProducto        ,   Precio   .


Pedido   : con atributos como     PedidoID    (PK),          FechaPedido   ,   ClienteID     (FK).


DetallePedido  : con atributos como         DetalleID         (PK),    Cantidad   ,   PrecioUnitario       ,

PedidoID    (FK), ProductoID (FK).


Relaciones:


Realiza   : relación 1entre   Cliente   y   Pedido   .


## Incluye   : relación Mentre    Pedido   y   Producto     , con una entidad intermedia

DetallePedido      que almacena los atributos            Cantidad      y   PrecioUnitario     .




Diagramas ER: Entidades, Relaciones y Atributos                                                                                         4

## Este diagrama ER visualiza cómo los clientes pueden realizar pedidos, qué

productos están incluidos en esos pedidos, y cómo se detalla cada pedido en

términos de cantidades y precios.


## 6. Importancia de los Diagramas ER

Los diagramas ER son esenciales para:


## Visualizar la estructura de la base de datos: Ayudan a comprender cómo los

datos están organizados y cómo se relacionan entre sí.


## Planificar el diseño de la base de datos: Permiten detectar posibles

problemas de diseño, como redundancias o relaciones complejas, antes de

implementar la base de datos.


## Facilitar la comunicación: Sirven como un medio común para que

diseñadores, desarrolladores, y otras partes interesadas discutan y

comprendan la estructura de la base de datos.


## Conclusión

## Los diagramas ER son una herramienta poderosa y fundamental en el diseño de

bases de datos. A través de la identificación de entidades, atributos y relaciones,

estos diagramas permiten modelar de manera efectiva los datos y sus

interacciones en un sistema, asegurando un diseño claro, eficiente y escalable

para cualquier base de datos relacional.





Material de la materia Administración y gestión de bases de datos.

## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





## Diagramas ER: Entidades, Relaciones y Atributos                                                   5

