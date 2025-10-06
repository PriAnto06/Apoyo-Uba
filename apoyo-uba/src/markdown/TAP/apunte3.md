# Presentation Content

## Slide 1

Procedimientos

y

Funciones

---

## Slide 2

edad

=

int

(

input

(

“

¡

Cuantos

a

ños

tenés

?”

) 

)

print

(

f

“Tenes

{

edad

}

años”

)

¿

Cuántos

a

ños

tenés

?

Entrada y

salida

16

Tenes

16 a

ños

---

## Slide 3

Comenzamos

a

ordenar

con

Procedimientos

---

## Slide 4

print

()

Un procedimiento conocido, que se utiliza para mostrar cosas por consola

El primer procedimiento

print

(

“Hola mundo”

)

Nombre

Identificador

Argumento

Parámetro

Entrada

---

## Slide 5

print

()

Un procedimiento conocido, que se utiliza para mostrar cosas por consola

El primer procedimiento

print

(

3.1415

)

>>> 3.1415

---

## Slide 6

def

f

()

:

<

expresi

ón

>

Procedimientos: Esqueleto

nombre

Necesario

para

definirla

, solo se

usa

una

vez

---

## Slide 7

Procedimientos

:

ejemplos

de

uso

saludar

print

def

f

()

:

print

(

“Hola

mundo

”

)

saludar

()

:

>>> Hola

mundo

saludar

()

---

## Slide 8

Procedimientos

:

ejemplos

de

uso

print

def

saludar

()

:

print

(

“Hola

mundo

”

)

saludar

()

saludar

()

saludar

()

>>> Hola

mundo

>>> Hola

mundo

>>> Hola

mundo

saludar

---

## Slide 9

Procedimientos

:

Modularizando

f

print

def

cumpleañosParte1

()

:

:

print

(

“

Cumplea

ños

feliz

”

)

def

cumpleañosParte2

()

:

:

print

(

“Que

los

cumplas

”

)

print

(

“Que

los

cumplas

”

)

print

(

“Que

los

cumplas

,

feliz

”

)

cumpleañosParte1

()

cumpleañosParte1

()

cumpleañosParte2

()

---

## Slide 10

Procedimientos

:

ejemplos

de

uso

f

print

def

pedirYMostrarNumero

()

:

:

x

=

int

(

input

(

“

Ingrese

un

numero

: ”

))

print

(

x

)

print

(

“Hola

”

)

pedirYMostrarNumero

()

print

(

“Adiós”

)

input

---

## Slide 11

Ámbito

y

alcance

variables

globales

def

f

():

  x = 10

 

print

(x)

f

()

Las variables

definidas

en

este

ámbito

solo

estan

disponibles

dentro

del

mismo

---

## Slide 12

Ámbito

y

alcance

variables

globales

f

def

f

():

  x = 10

 

print

(x)

f

()

>>> 10

x = 10

1

---

## Slide 13

Ámbito

y

alcance

variables

globales

f

def

f

():

  x = 10

 

print

(x)

No

hace

nada

x = 10

2

---

## Slide 14

Ámbito

y

alcance

variables

globales

f

def

f

():

  x = 10

f

()

print

(x)

>>>

NameError

x = 10

3

---

## Slide 15

Ámbito

y

alcance

variables

globales

f

y

= 5

print

(y)

def

f

():

  y = 10

f

()

print

(y)

>>> 5

    5

y = 10

4

---

## Slide 16

Ámbito

y

alcance

variables

globales

f

y

= 5

print

(y)

def

f

():

  y = 10

  print(y)

f

()

print

(y)

>>> 5

>>> 10

>>> 5

y = 10

5

---

## Slide 17

Ámbito

y

alcance

variables

globales

f

y

= 5

def

f

():

  y = 10

f

()

print

(y)

>>> 5

y = 10

6

---

## Slide 18

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

f

(x)

print

(x)

>>> 5

7

---

## Slide 19

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(x):

x = x + 10

f

(x)

print

(x)

>>> 5

Presta a la

confusión

,

pero

funciona

igualmente

8

---

## Slide 20

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

print

(x)

f

(x)

>>> 5

9

---

## Slide 21

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

  print

(y)

f

(x)

>>> 15

10

---

## Slide 22

Procedimientos

:

ejemplos

de

uso

f

print

def

sumar

()

:

:

x

=

int

(

input

())

y

=

int

(

input

())

print

(

x + y

)

print

(

“Hola

”

)

sumar

()

print

(

“Adiós”

)

input

---

## Slide 23

Procedimientos

:

ejemplos

de

uso

f

print

def

f

()

:

nombre

=

input

(

“

Ingresa

tu

nombre

”

)

print

(

“Hola

{

nombre

}

”

)

print

(

“Hola, c

ómo

estas?”

)

saludarPorNombre

()

print

(

“Adiós”

)

input

saludarPorNombre

()

:

---

## Slide 24

Nuestro

primer

procedimiento

Diseñar

un

procedimiento

que dados 2

lados

de un

rectangulo

,

calcule

 

su

 per

í

metro a

partir

de dos

lados

. 

El

programa

completo

debe

:

Pedir

el

largo de

los

lados

al

usuario

Calcular

el

perímetro

del

rectángulo

y lo

imprima

Usar

el

procedimiento

para que se

ejecute

en

el

programa

principal

---

## Slide 25

Se pone

interesante

Parámetros

---

## Slide 26

Procedimientos

:

ejemplos

de

uso

f

print

def

sumar

(

x

,

y

)

:

:

print

(

x + y

)

print

(

“Hola

”

)

sumar

(

4, 6

)

print

(

“Adiós”

)

x

>>> Hola

>>> 10

>>> Adi

ós

y

---

## Slide 27

Procedimientos

:

ejemplos

de

uso

f

print

def

sumar

(

x

,

y

)

:

:

print

(

x + y

)

print

(

“Hola

”

)

sumar

(

3, 1

)

print

(

“Adiós”

)

x

>>> Hola

>>> 4

>>> Adi

ós

y

---

## Slide 28

Procedimientos

:

ejemplos

de

uso

f

print

def

sumar

(

x

,

y

)

:

:

print

(

x + y

)

print

(

“Hola

”

)

sumar

(

“3

”

,

“1

”

)

print

(

“Adiós”

)

x

>>> Hola

>>> 31

>>> Adi

ós

y

---

## Slide 29

Procedimientos

:

ejemplos

de

uso

f

print

def

saludar

(

nombre

,

edad

)

:

:

print

(

f

“Hola

{

nombre

}

,

tenes

{

edad

}

”

)

saludar

(

“

Raul

”

,

17

)

>>> Hola Raul,

tenes

17

?

---

## Slide 30

Funciones

Ya llegó por quien lloraban

---

## Slide 31

Funciones

f

f(x)

Entrada

Argumento

Parametros

Salida

Retorno

Resultado

---

## Slide 32

Funciones

f

Nombrar

la

funci

ón

def

 

f

(

x

,

 y

)

:

:

​

  return 

x + y

def

 

suma

(

x

,

y

)

:

---

## Slide 33

Funciones

input

mensaje

Ingreso

del usuario

input(

mensaje

)

---

## Slide 34

Funciones

input

mensaje

Ingreso

del usuario

input(

mensaje

)

nombre

=

input

(

“

¿Cómo te llamas?: ”

)

---

## Slide 35

Funciones

f

Nombrar

la

funci

ón

True

f

False

f

True

…

---

## Slide 36

Funciones

f

Nombrar

la

funci

ón

True

f

False

f

True

…

---

## Slide 37

Funciones

y

Procedimientos

suma

input

calculadora

print

imprime

Procedimiento

Funciones

con

efectos

secundarios

f

Funcion

normal

---

## Slide 38

Funciones

vs

Procedimientos

f

def

g

(x, y):

return

x + y

def

f

(x, y):

print

(x + y)

g

resultado

= g(3, 1)

print(

resultado

)

f(3, 1)

EJERCICIO PARA CLASE: ENUMERAR DIFERENCIAS

---

## Slide 39

Funciones

vs

Procedimientos

f

def

f

(x):

if

x

% 2 == 0:

return

True

else

:

return

False

True/False

def

f

(x):

return

x % 2 == 0

2

True

f

7

False

---

## Slide 40

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

return

y

f

(x)

print

(x)

>>> 5

---

## Slide 41

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = x + 10

return

y

f

(x)

print

(x)

>>> 5

---

## Slide 42

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(x):

x = x + 10

return

x

f

(x+1)

print

(x)

>>> 5

---

## Slide 43

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

return

y

resul

=

f

(x)

print

(

resul

)

>>> 15

Piso

el

valor

---

## Slide 44

Ámbito

y

alcance

variables

globales

f

x

= 5

def

f

(y):

y = y + 10

return

y

print

(

f

(x))

>>> 15

---

## Slide 45

---

