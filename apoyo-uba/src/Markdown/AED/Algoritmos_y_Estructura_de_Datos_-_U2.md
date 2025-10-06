# PDF Content

## 1.1 Matriz

## Recomiendo ver el video [pendiente]


## Una matriz es como una tabla que usamos para organizar datos. En Python, podemos crear

una matriz usando una lista de listas. ¡Es como tener una lista dentro de otra lista!




## 1     matriz = [

## 2             [3, 4, 5]

## 3             [4, 2, 1]

## 4             [0, 1, 0]

## 5             ]

## 6     # Cada numero representa una celda de la matriz




Propiedades:

## Cada elemento de la matriz en una sub- lista por lo que tambien podemos

recorrerla.

len(matriz) = cantidad de sub-listas.

## Si las sub-listas tienen el mismo tamaño, len(matriz[0]) = cantidad de elementos

en cada sub-lista o al menos, en la primer sub-lista.

## Se suele usar el concepto de filas y columnas para hablar de la posicion de un

elemento en una matriz.




## Filas y columnas

Imagina que tu matriz es como un edificio:


## Las filas son los pisos

## Las columnas son los departamentos en cada piso

## Imagina los numeros de cada celda son la cantidad de personas que viven en ese

departamento




## 1     edificio = [

## 2             [3, 4, 5] # piso 1

## 3             [4, 2, 1] # piso 2

## 4             [0, 1, 0] # piso 3

## 5             ]#1 2 3     <- num de habitacion

## 6

7    # La matriz tiene 3 filas y 3 columnas.
8    # En el piso 2, habitacion 3 vive solo una persona.



## Mejor organizacion de datos


## 1    # Pasamos de esto      😒

## 2    actividades = [

## 3        "origami", "la sala de arte", 1415, 1530, "sabado y

4    domingo",
5        "crochet", "salon principal", 1400, 1800, "sabado",
6        "tango", "Teatro", 2030, 2230, "sabado",
7         "poesia", "biblioteca", 1130, 1300, "domingo",
## 8         ]

## 9

## 10    # A esto    😊

## 11    actividades_matriz = [

## 12        ["origami", "la sala de arte", 1415, 1530, "sabado y

13    domingo"],

14        ["crochet", "salon principal", 1400, 1800, "sabado"],

15         ["tango", "Teatro", 2030, 2230, "sabado"],

["poesia", "biblioteca", 1130, 1300, "domingo"]

]




## Recorrido de una lista de listas o matriz

## Para imprimir solo una columna: Ambos ciclos for imprimer los nombres de las actividades

("origami", "crochet", ...).




## 1    # Antes    😒

2    for i in range(0,len(actividades), 5):
## 3            print(actividades[i])

## 4

## 5    # Ahora    😊

## 6    for i in range(0,len(actividades_matriz)): # Esto recorre

## 7    cada fila

## 8            print(actividades[i][0])

9    # O tranquilamente podes usar:
10    for actividad in actividades_matriz:

print(actividad[0]) # ya que cada sub-lista

representa una actividad y en la posicion 0 de cada

actividad, se encuentra su nombre


Un ejemplo mas lindo:




## 1      # Ahora    😊

## 2      edificio = [

## 3                 [3, 4, 5] # piso 1

## 4                 [4, 2, 1] # piso 2

## 5                 [0, 1, 0] # piso 3

## 6                 ]#1 2 3     <- num de habitacion

## 7

8      for piso in range(len(edificio)):
## 9              for hab in (range(len(piso))): # piso es una sub-

## 10     lista de edificio

print(f"En el departamento {piso}-{hab}

viven {edificio[piso][hab]} personas")




## Ejercicio 0

## Ejercicio: Sistema de Reservas de Hotel


## Imagina que estás desarrollando un sistema simple de reservas para un pequeño hotel. El

hotel tiene 3 pisos y 4 habitaciones por piso. Utiliza una matriz para representar la

ocupación del hotel, donde cada número representa la cantidad de personas en una

habitación (0 significa que la habitación está vacía).


## 1. Crea una matriz llamada hotel que represente esta estructura. Inicialmente, todas las

habitaciones están vacías.

## 2. Escribe una función llamada reservar_habitacion(hotel, personas) que permita

reservar una habitación específica para un número determinado de personas. La

función debe actualizar la matriz hotel y imprimir un mensaje de confirmación.

3. reservar_habitacion(hotel, personas) devuelve :

## True si logra hacer la reserva

False si no lo logra.



## Para lograr reservar, la cantidad de personas debe ser igual a la de alguna habitación

del hotel . Luego de encontrar tal habitación, la capacidad de la misma debe cambiar

a 0 , pues desde ese momento se encontrará reservada.




## Ejercicio 1

Implementar la búsqueda por lugar para la siguiente matriz:




## 1    actividades_matriz = [

## 2        ["origami", "la sala de arte", 1415, 1530, "sabado y

3    domingo"],
4        ["crochet", "salon principal", 1400, 1800, "sabado"],
5        ["tango", "Teatro", 2030, 2230, "sabado"],
## 6          ["poesia", "biblioteca", 1130, 1300, "domingo"]

]


## Para esto, debes crear una función busqueda_lugar(actividades, lugar_buscado) que

retorne la posición donde encuentra el lugar_buscado o -1 si no lo encuentra.

