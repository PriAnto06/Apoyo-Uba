# PDF Content

## Desnormalización y Sus Usos


## 1. ¿Qué es la Desnormalización?

La desnormalización es el proceso inverso a la normalización. Consiste en combinar tablas que fueron

previamente divididas durante la normalización para reducir la redundancia y mejorar la eficiencia de ciertas

operaciones de consulta. La desnormalización busca optimizar el rendimiento de la base de datos,

particularmente en sistemas donde las lecturas de datos son más frecuentes que las escrituras o

actualizaciones.


Aunque la normalización es ideal para minimizar la redundancia y evitar inconsistencias, en algunas situaciones

puede hacer que las consultas sean más complejas y lentas, ya que requieren unir múltiples tablas. La

desnormalización introduce cierta redundancia controlada para mejorar la eficiencia de las consultas,

sacrificando algo de la integridad de los datos y el espacio de almacenamiento.


## 2. ¿Cuándo Usar la Desnormalización?

La desnormalización se utiliza en escenarios donde el rendimiento es crítico y las consultas deben ejecutarse

de manera rápida y eficiente. Es común en aplicaciones donde:


Lecturas frecuentes y rápidas: Las consultas de lectura son mucho más frecuentes que las operaciones de

escritura o actualización, y se requiere que las lecturas sean lo más rápidas posible.


Consultas complejas: Las consultas requieren unir múltiples tablas, lo que resulta en un rendimiento lento.

La desnormalización puede reducir la cantidad de uniones necesarias.


Simplicidad de consulta: Se desea simplificar el esquema de la base de datos para hacer las consultas más

sencillas, especialmente en sistemas donde la complejidad de las consultas debe minimizarse para mejorar

la legibilidad y mantenimiento.


## 3. Ejemplos de Desnormalización

a. Ejemplo de Desnormalización para Mejorar el Rendimiento


Supongamos que tenemos un esquema normalizado con las siguientes tablas:


## 1. Clientes


## ClienteID       Nombre


## 1               Juan Pérez


## 2               Ana López


## 2. Pedidos


## PedidoID        Fecha          ClienteID


## 101             2024-01-10     1


## 102             2024-01-11     2


## 3. DetallePedidos


## DetalleID       PedidoID       ProductoID      Cantidad


## 1               101            201             2





Desnormalización y Sus Usos                                                                                                  1

## 2               102               202           1


## 4. Productos


## ProductoID      NombreProducto


## 201             Televisor


## 202             Computadora


Para obtener un resumen de los pedidos con los nombres de los productos y clientes, tendríamos que realizar

una consulta que involucre varias uniones entre tablas. Esta consulta podría ser costosa en términos de tiempo

de ejecución.


Desnormalización:


Podemos crear una tabla desnormalizada que almacene los datos necesarios en un solo lugar:


PedidoID            Fecha            ClienteID     NombreCliente   ProductoID       NombreProducto   Cantidad


101                 2024-01-10       1             Juan Pérez      201              Televisor        2


102                 2024-01-11       2             Ana López       202              Computadora      1


Esta tabla elimina la necesidad de unir múltiples tablas, acelerando las consultas, aunque introduce

redundancia.


b. Desnormalización para Prevenir Cálculos Complejos:


Supongamos que en un sistema de base de datos de ventas, queremos consultar el total de ventas diarias de

cada producto. Con un esquema normalizado, tendríamos que calcular estas sumas cada vez que se realiza la

consulta.


Desnormalización:


Podemos añadir una columna TotalVentas en la tabla de productos que almacene el total de ventas acumuladas

para cada producto. Cada vez que se realiza una venta, se actualiza este valor. Esto permite consultar

rápidamente el total de ventas sin tener que calcularlo sobre la marcha.


## 4. Ventajas y Desventajas de la Desnormalización

a. Ventajas:


## Mejora del rendimiento: Las consultas que requieren unir múltiples tablas pueden volverse

significativamente más rápidas.


Simplificación de las consultas: Se reduce la complejidad de las consultas, lo que facilita su escritura y

mantenimiento.


Reducción de costos de lectura: Al tener todos los datos relevantes en una sola tabla, las operaciones de

lectura pueden ser más eficientes.


b. Desventajas:


## Redundancia de datos: Introduce duplicación de datos, lo que puede llevar a un mayor uso de

almacenamiento y potenciales problemas de inconsistencia.


Mantenimiento más complejo: La desnormalización puede hacer que las operaciones de actualización,

inserción y eliminación sean más complicadas y propensas a errores.


Anomalías en la actualización: Existe el riesgo de que la redundancia lleve a inconsistencias si los datos

duplicados no se actualizan de manera sincronizada.





Desnormalización y Sus Usos                                                                                                    2

## 5. Casos de Uso Comunes

a. Sistemas de Información Geográfica (SIG): En bases de datos geográficas, la desnormalización se usa para

almacenar datos espacialmente relacionados en una sola tabla para mejorar el rendimiento de las consultas

espaciales.


b. Data Warehousing: En almacenes de datos (data warehouses), la desnormalización es común para crear

esquemas de estrellas o copos de nieve, donde las tablas fact y dimension contienen datos agregados y

desnormalizados para optimizar la consulta.


c. Aplicaciones Web de Alto Rendimiento: En aplicaciones web donde la latencia es crítica, como en e-

commerce o redes sociales, la desnormalización se usa para reducir el tiempo de respuesta al servir datos pre-

agregados o pre-unidos.


## Conclusión

La desnormalización es una técnica útil en el diseño de bases de datos, especialmente en contextos donde el

rendimiento de las consultas es prioritario. Aunque introduce redundancia y puede complicar el mantenimiento

de los datos, cuando se aplica de manera adecuada y controlada, puede ofrecer mejoras significativas en la

velocidad y eficiencia de las operaciones de lectura. Es una herramienta valiosa en el equilibrio entre la

integridad de los datos y el rendimiento del sistema.





Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo


## Mail: gcuneo@etec.uba.ar





Desnormalización y Sus Usos                                                                                                 3

