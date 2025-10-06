# PDF Content

## Propiedades ACID en Bases de

## Datos


## Las propiedades ACID son un conjunto de principios fundamentales que

garantizan que las transacciones en una base de datos se realicen de manera

confiable y consistente. Estas propiedades aseguran que las transacciones

mantengan la integridad de la base de datos incluso en presencia de fallos del

sistema o errores. ACID es un acrónimo que representa:


## Atomicidad (Atomicity)


## Consistencia (Consistency)


## Aislamiento (Isolation)


## Durabilidad (Durability)


A continuación, se detallan cada una de estas propiedades:


## 1. Atomicidad (Atomicity)

## La atomicidad asegura que una transacción se ejecute en su totalidad o no se

ejecute en absoluto. En otras palabras, una transacción es una unidad indivisible.

## Si una transacción está incompleta debido a un error o fallo, todos los cambios

realizados hasta ese punto se revierten (rollback), y la base de datos vuelve a su

estado previo a la transacción.

Ejemplo:

## Imaginemos una transacción que transfiere dinero entre dos cuentas. Si el débito

en la cuenta de origen se realiza correctamente pero el crédito en la cuenta de

destino falla, la transacción completa se revierte, y ningún cambio se aplica a la

base de datos.


BEGIN TRANSACTION;



## UPDATE Cuentas SET Saldo = Saldo - 100 WHERE CuentaID = 1; --





## Propiedades ACID en Bases de Datos                                                              1

## Debitar

## UPDATE Cuentas SET Saldo = Saldo + 100 WHERE CuentaID = 2; --

## Acreditar


## COMMIT; -- Confirma los cambios si todo es exitoso



Si ocurre un error antes de   COMMIT   , la base de datos revierte todos los cambios.


## 2. Consistencia (Consistency)

## La consistencia garantiza que una transacción lleve la base de datos de un

estado consistente a otro estado consistente. Esto significa que las transacciones

deben cumplir con todas las reglas, restricciones y validaciones definidas en el

esquema de la base de datos, y que la base de datos debe permanecer en un

estado válido después de que la transacción se complete.


Ejemplo:

## Supongamos que una base de datos tiene una restricción que prohíbe los saldos

negativos en una tabla de cuentas. Una transacción que intente dejar una cuenta

con un saldo negativo no debería ser permitida. La consistencia asegura que, tras

completar la transacción, la restricción se mantenga intacta.


BEGIN TRANSACTION;


-- Intentar transferir dinero

## UPDATE Cuentas SET Saldo = Saldo - 100 WHERE CuentaID = 1; --

## Debitar



-- Verificar que el saldo no quede negativo

## IF (SELECT Saldo FROM Cuentas WHERE CuentaID = 1) < 0

## BEGIN

## ROLLBACK; -- Revierte si la consistencia no se mantiene

RETURN;

## END


## UPDATE Cuentas SET Saldo = Saldo + 100 WHERE CuentaID = 2; --

## Acreditar




Propiedades ACID en Bases de Datos                                                                 2

## COMMIT; -- Confirma los cambios si todo es consistente



## 3. Aislamiento (Isolation)

## El aislamiento asegura que las transacciones se ejecuten de manera

independiente y que el estado intermedio de una transacción no sea visible para

otras transacciones hasta que se haya completado. Esto evita que las

transacciones concurrentes interfieran entre sí, garantizando resultados

consistentes.

Niveles de Aislamiento:


## Read Uncommitted: Permite la lectura de datos no confirmados (lectura

sucia). El nivel más bajo de aislamiento.


## Read Committed: Permite la lectura solo de datos confirmados. Previene

lecturas sucias pero no lecturas no repetibles.


## Repeatable Read: Asegura que los datos leídos durante la transacción no

cambien durante la misma. Previene lecturas sucias y lecturas no repetibles.


## Serializable: El nivel más alto de aislamiento, que asegura que las

transacciones se comporten como si se ejecutaran en secuencia. Previene

lecturas sucias, lecturas no repetibles y fantasmas.


Ejemplo:

## Si dos transacciones intentan actualizar el mismo registro simultáneamente, el

aislamiento asegura que una transacción no vea los cambios realizados por la otra

hasta que la primera transacción haya sido confirmada.


BEGIN TRANSACTION;

-- Transacción A lee y modifica datos

-- Transacción B lee y modifica datos concurrentemente

-- Aislamiento asegura que las transacciones no interfieran e

ntre sí

COMMIT;



## 4. Durabilidad (Durability)



## Propiedades ACID en Bases de Datos                                                              3

## La durabilidad asegura que una vez que una transacción ha sido confirmada, sus

cambios son permanentes y persisten incluso en caso de fallos del sistema, como

caídas de energía o fallos en el hardware. Los cambios confirmados se guardan

de manera permanente en el sistema de almacenamiento.


Ejemplo:

## Una vez que se ejecuta

## COMMIT en una transacción, los cambios realizados por la transacción se


almacenan de forma segura en la base de datos. Si el sistema se apaga

inesperadamente, los cambios confirmados se mantienen y la base de datos no

pierde estos cambios.


BEGIN TRANSACTION;


## UPDATE Cuentas SET Saldo = Saldo - 100 WHERE CuentaID = 1; --

## Debitar

## UPDATE Cuentas SET Saldo = Saldo + 100 WHERE CuentaID = 2; --

## Acreditar


## COMMIT; -- Cambios son duraderos y no se perderán



## Conclusión

## Las propiedades ACID son esenciales para garantizar que las transacciones en

una base de datos se ejecuten de manera segura y consistente. La atomicidad

asegura que las transacciones se completen en su totalidad o se reviertan; la

consistencia mantiene la integridad de la base de datos antes y después de la

transacción; el aislamiento previene interferencias entre transacciones

concurrentes; y la durabilidad garantiza que los cambios realizados por

transacciones confirmadas sean permanentes. Comprender y aplicar

correctamente estas propiedades es crucial para el diseño y mantenimiento de

sistemas de bases de datos robustos y fiables.





## Propiedades ACID en Bases de Datos                                                           4

Material de la materia Administración y gestión de bases de datos.


## Institución: EET UBA


## Profesor: Guillermo Pedro Cuneo

## Mail: gcuneo@etec.uba.ar





## Propiedades ACID en Bases de Datos                                              5

