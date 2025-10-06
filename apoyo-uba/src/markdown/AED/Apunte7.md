# Presentation Content

## Slide 1

Pseudocódigo y

lotes de pruebas

Programando antes de programar... y después

---

## Slide 2

¿Qué es el pseudocódigo?

---

## Slide 3

¿Qué es el pseudocódigo?

---

## Slide 4

Escribiendo pseudocódigo

No hace falta escribir en ningún lenguaje de programación. ¡Eso viene después!

Pensar el flujo del programa, teniendo en cuenta su objetivo

Validar lo que escribimos antes de ponernos a programarlo

---

## Slide 5

Escribiendo pseudocódigo

No hace falta escribir en ningún lenguaje de programación. ¡Eso viene después!

Pensar el flujo del programa, teniendo en cuenta su objetivo

Validar lo que escribimos antes de ponernos a programarlo

Cuando vamos a salir de la escuela un día de lluvia...

Si nos olvidamos el paraguas, esperamos a que pare de llover antes de salir

Sino, salimos y nos vamos a casa

---

## Slide 6

Escribiendo pseudocódigo

No hace falta escribir en ningún lenguaje de programación. ¡Eso viene después!

Pensar el flujo del programa, teniendo en cuenta su objetivo

Validar lo que escribimos antes de ponernos a programarlo

Cuando vamos a salir de la escuela un día de lluvia...

Si nos olvidamos el paraguas, esperamos a que pare de llover antes de salir

Sino, salimos y nos vamos a casa

tieneParaguas

= input("¿Trajiste paraguas? (si/no): ")

estaLloviendo

= "si"

while

 

estaLloviendo

== "si" and

tieneParaguas

== "no":

 

estaLloviendo

 = input("¿Sigue lloviendo? (si/no): ")

print

("Entonces

podés

irte a casa")

---

## Slide 7

¿Qué son los

lotes de pruebas?

---

## Slide 8

¿Qué son los

lotes de pruebas?

---

## Slide 9

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

---

## Slide 10

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

---

## Slide 11

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Ejemplo:

Representemos las temperaturas en una recta numérica...

0                      75            80

Justo

Muy frío

Muy caliente

---

## Slide 12

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Ejemplo:

Representemos las temperaturas en una recta numérica...

0                      75            80

Justo

Muy frío

Muy caliente

                           

entre 75 y 80

---

## Slide 13

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Ejemplo:

Representemos las temperaturas en una recta numérica...

0                      75            80

Justo

Muy frío

Muy caliente

                           

 

≥

75 y

≤

80

---

## Slide 14

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Para verificar esto, deberíamos probar los bordes

                            74, 75, 80, 81

0                      75            80

Justo

Muy frío

Muy caliente

                           

 

≥

75 y

≤

80

---

## Slide 15

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Para verificar esto, deberíamos probar los bordes

                           74, 75, 80, 81

---

## Slide 16

Escribiendo

lotes de pruebas

Hay que considerar los distintos casos de uso

También hay que buscar los casos extremos donde el programa podría fallar

Ejemplo: tenemos una pava eléctrica que tiene que medir la temperatura del agua para mate.

El agua debería quedar entre 75 y 80ºC.

¿Qué deberíamos probar para verificar si está andando bien o no?

Con esta tabla ya sabemos qué valores probar. Si la pava (o el programa) responde como esperamos a cada uno de ellos, podemos decir que funciona bien.

---

## Slide 17

Escribiendo

lotes de pruebas

Siempre es importante probar casos de uso inesperados...

En el caso de la pava, no debería arrancar si detecta que no tiene agua

En el caso de un ascensor, no debería ponerse a andar si la puerta está abierta

Si el cable cargador de nuestro celular está roto y carga mal, el teléfono nos avisa (salvo que esté

tan mal que ni siquiera lo detecte)

Si intentamos acceder a una página sin estar conectados a internet, el navegador nos avisa

Si vamos al baño, nos fijamos que haya papel higiénico antes de entrar, y sino vamos a buscar

¿Por qué hay saldo negativo en la SUBE? ¡Justamente por si alguien se olvidó de cargar!

Cuando llamamos por un problema con la impresora, es normal que nos pregunten si hay luz, si está bien conectada a electricidad, si prendió la luz de arranque, si está bien conectada a la computadora...

---

## Slide 18

Resumen

---

