# PDF Content

## Estructura de Datos

## Una estructura de datos es un contenedor que tienen un comportamiento interno específico

para manejar la información que guardan. Dependiendo de el problema en nuestras manos,

usaremos una estructura de datos especifica para facilitarnos la solucion del mismo. Los

que usaremos son: listas, tuplas, diccionarios, conjuntos.




## 1.1 Listas

## Definición de una Lista

## En Python, una lista es una colección ordenada y mutable de elementos. Estos elementos

pueden ser de diferentes tipos de datos (números, cadenas, booleanos, incluso otras listas).


## 1   # Ejemplo: Lista de números

## 2   numeros = [5, 12, 8, 3, 20]

## 3

## 4   # Ejemplo: Lista de cadenas (strings)

## 5   nombres = ["Ana", "Juan", "Carlos"]

## 6

## 7   # Ejemplo: Lista mixta

## 8   mixta = [10, "Hola", True, 3.14]




## Acceso por Índice

## Cada elemento de una lista tiene un índice asociado, que indica su posición. Los índices

comienzan en 0 para el primer elemento.


## 1   numeros = [5, 12, 8, 3, 20]

## 2   #          0 1 2 3 4 -> indices asociados segun la posicion de cada

elemento



## 1   # Acceder al segundo elemento de la lista "numeros"

## 2   print(numeros[2]) # Salida: 8

## 3

## 4   # Acceder al último elemento de la lista "nombres"

## 5   print(nombres[-1]) # Salida: Carlos




## Imprimir una Lista

Puedes imprimir una lista directamente usando la función print() :


## 1     print(numeros) # Salida: [5, 12, 8, 3, 20]

## 2     print(nombres) # Salida: ["Ana", "Juan", "Carlos"]




## Longitud de una Lista

La función len() te permite obtener la cantidad de elementos en una lista.


## 1     print(len(numeros))     # Salida: 5

## 2     print(len(nombres))     # Salida: 3




pop() y append()

complementar con video: https://youtu.be/vD9p4JEP4aY


append(elemento) : Agrega un elemento al final de la lista.

pop(indice) : Elimina y devuelve el elemento en la posición indice (por defecto,

elimina el último).


## 1     numeros.append(25)

## 2     print(numeros) # Salida: [5, 12, 8, 3, 20, 25]

## 3

## 4     ultimo_numero = numeros.pop()

## 5     print(ultimo_numero) # Salida: 25

## 6     print(numeros)       # Salida: [5, 12, 8, 3, 20]




## Recorrer una Lista con for

complementar con video: https://youtu.be/qIzk99oEfQQ


a) Por Elemento:


1     for nombre in nombres:
## 2         print(nombre) # Imprime cada nombre en una línea separada


b) Por indice (usando range() )


1     for i in range(len(numeros)):
## 2         print(numeros[i]) # Imprime cada número en una línea separada

## 1.1.2 Expliacion del range(i,f,p)

## En Python, range() es una función incorporada muy útil para generar secuencias de

números enteros. Se utiliza principalmente en bucles for para iterar un número específico

de veces.


La función range() puede tomar hasta tres argumentos:


## 1. inicio (start): El número entero desde el cual comienza la secuencia (inclusivo). Si se

omite, el valor predeterminado es 0.

## 2. fin (stop): El número entero hasta el cual se genera la secuencia (exclusivo). Este

argumento es obligatorio.

## 3. paso (step): El incremento entre cada número en la secuencia. Si se omite, el valor

predeterminado es 1.


Funcionamiento:


range(fin) : Genera una secuencia de números desde 0 hasta fin - 1 .

range(inicio, fin) : Genera una secuencia de números desde inicio hasta fin

- 1.
range(inicio, fin, paso) : Genera una secuencia de números desde inicio

hasta fin - 1 , incrementando en paso en cada iteración.


## 1    # range(fin)

2    for i in range(5):
## 3        print(i) # Salida: 0 1 2 3 4

## 4

## 5    # range(inicio, fin)

6    for i in range(2, 8):
## 7        print(i) # Salida: 2 3 4 5 6 7

## 8

## 9    # range(inicio, fin, paso)

10    for i in range(1, 10, 2):

## 11        print(i) # Salida: 1 3 5 7 9

## 12

## 13    # Paso negativo (cuenta hacia atrás)

14    for i in range(10, 0, -2):

## 15        print(i) # Salida: 10 8 6 4 2




1.1.3 Falsa Lista de 2 dimensiones:

## En python, podemos definir listas de una dimension pero con un orden específico que

simule una estructura de filas y columnas donde cada fila contiene los datos de un

entidad.

Ejemplo:

## En una lista que guarde las actividades de un Centro Cultural, usaremos la siguiente

estructura: actividades = [nombre, lugar, hora_inicio, hora_fin, dias]

nombre es el nombre de la actividad

lugar es donde se realiza la actividad

hora_inicio es la hora cuando inicia la actividad. Se expresa en notacion militar

hora_fin es la hora cuando finaliza la actividad. Se expresa en notacion militar


## 1    actividades = [

2        "origami", "la sala de arte", 1415, 1530, "sabado y domingo",
3        "crochet", "salon principal", 1400, 1800, "sabado",
4        "tango", "Teatro", 2030, 2230, "sabado",
5        "poesia", "biblioteca", 1130, 1300, "domingo",
6        "futbol", "cancha 1", 1700, 1900, "martes",
7        "basquet", "cancha 2", 2000, 2200, "jueves",
8        "voley", "cancha 3", 1400, 1600, "viernes",
9        "handball", "cancha 4", 1500, 1700, "sabado",
10        "origami","salon 101",800,1000,"lunes, martes, jueves",

11        "baile","salon 314",1300,1600,"martes",

12        "matematica","salon 512",2000,2100,"jueves",

## 13        "economia","aula 1800",1500,2000,"viernes",]




## Recorrer la lista del centro cultural

## La mejor opcion que tenemos para aprovechar esta estructura de datos es recorrerlo por

indice usando for y range() .


## Distintos recorridos


## 1    # Este codigo imprime todos los elemenos

2    for i in range(0,len(actividades)):
## 3            print(actividades[i])


Recorrido por nombre:

## Requiere que i tome los valores 0,5,10,15,... . Para conseguirlo, usamos el

## 3er parámetro del range(inicio, fin, paso)) . Si paso vale 5, range() va a

representar un conjunto de numeros que van incrementando de 5 en 5 unidades.

Por ejemplo, range(0, 30, 5) representa el siguiente conjunto:

## 0,5,10,15,20,25


## 1    # Este codigo imprime solo nombres

2    for i in range(0,len(actividades), 5):
## 3            print(actividades[i])


## Recorrido por lugar

## 1      # Este codigo imprime solo los lugares

2      for i in range(0,len(actividades), 5):
## 3              print(actividades[i+1])

## 4

## 5      # Alternativa: ¿Qué cambia y por qué funciona?

6      for i in range(1,len(actividades), 5):
## 7              print(actividades[i])




## Búsqueda por lugar en la lista del Centro Cultural


## Alto ahí, recomiendo entender los temas de la sección 2.2 búsqueda lineal

antes de seguir con esta búsqueda



ver video de busqueda del centro cultral: https://www.youtube.com/watch?

v=-7FJOqd_tto


## 1      # Busqueda por lugar

2      for i in range(0,len(actividades), 5):
3              if lugarBuscado == actividades[i+1]:
## 4                      print(f"La actividad {actividades[i]} se hace en

{actividades[i+1]}")

5                      # en este print podriamos agregar más información.
## 6                      # Ej: El horario de inicio de la actividad u otros datos

de la misma



## 1      # Busqueda por dia

2      for i in range(0,len(actividades), 5):
3              if diaBuscado in actividades[i+4]:
## 4                      print(f"La actividad {actividades[i]} se hace el dia

{diaBuscado}")

5                      # en este print podriamos agregar más información.
## 6                      # Ej: El lugar de la actividad u otros datos de la misma




## Ejemplos y usos adicionales de listas

## Pueden investigar lo que no entiendan


## 1      # Modificar elementos

## 2      nombres[1] = "María"

## 3      print(nombres) # Salida: ["Ana", "María", "Carlos"]

## 4

## 5      # Rebanar (slicing)

## 6      sublista = numeros[1:4]

## 7      print(sublista) # Salida: [12, 8, 3]

## 8

## 9   # Invertir una lista

## 10   numeros.reverse()

## 11   print(numeros)

## 12

## 13   # Ordenar una lista

## 14   numeros.sort()

## 15   print(numeros)

## 16

## 17   # Genera una lista en una linea (lista por compresión)

## 18   pares = [x for x in range(2, 21, 2)]

## 19

## 20   # Lista de letras de la palabra "hola"

## 21   letras = list("hola")

## 22

## 23   # Lista con 5 veces el número 0

## 24   ceros = [0] * 5




## 2 - Algoritmos

## 2.1 Algortimos: ¿Qué es un algoritmo?

## Informalmente, podemos hablar de un algoritmo como una secuencia de procedimientos

computacionales que, dado una entrada, producen una salida. Se lo puede ver, como

herramienta que resuelven un problema. La definicion del problema es la que establece la

estricta relacion entre la entrada y salida.




## Algoritmos: Pseudocódigo

## El pseudocodigo es una descripcion informal de nuestro algoritmo. Su intencion es ser

legible por un humano facilmente, a la vez que describe como resuelve el problema paso a

paso.

## En la practica, podemos ver distintos niveles de pseudocodigo dependiendo del nivel de

especificacion y cercanía al español.




## Problema: Numero mayor

## Este problema lo resolvimos en la primer clase del año entre todos

## Problema: Encontrar el numero mayor entre una lista de numeros positivos desordenada

## Entrada: Una lista de numeros sin orden especifico

## Salida: Retorna el valor mayor entre todos los numeros de la lista

Solucion:

## Recorrer la lista numero por numero manteniendo un registro del numero mas grande hasta

el momento. Al finalizar el recorrido, el numero mas grande estara guardado en ese registro.


Pseudocódigo muy españolesco y descriptivo:


## 1      sea A una lista de numeros positivos

## 2      num_mayor inicia en 0

## 3      para cada num en la lista A:      # num representa el numero actual

durante el recorrido

4              si num > num_mayor:
## 5                      num_mayor = num           # num_mayor pasa a guardar num


Pseudocódigo muy pythonesco:


## 1      A = una lista de numeros positivos

## 2      num_mayor = 0

3      for num in A: # Usamos el for elemento in conjunto:
4              if num > num_mayor:
## 5                      num_mayor = num


ver video https://youtu.be/mHUklNJDjes


## Un algoritmo es correcto si, para cada entrada posible produce una salida correcta. Por

ejemplo: el anterior pseudocodigo no es correcto si el problema cambia tal que la lista A

admita numeros negativos. Ejercicio para entender el tema: ¿Por qué no sería correcto?

## Rta: Porque la variabe num_mayor inicia en 0. Si justo se ingresa al programa una lista A

que contenga solo numeros negativos (totalmente posible dada la modificación propuesta)

el programa nunca actualizará num_mayor y entregará como salida el valor 0. Lo cual no es

correcto en ese caso.




## 2.2 Algortimos: Búsqueda Lineal

ver video https://youtu.be/dTrJAxOLEHI


## Problema: Encontrar un elemento especifico en una lista de elementos

## Entrada: Una lista de elementos de cualquier tipo

## Salida: Imprime la posicion donde lo encuentra


Solución: La búsqueda lineal es como hacer esto:


1. Empiezas por el principio: Abres la caja y sacas el primer objeto.

## 2. ¿Es lo que buscas? Si es el objeto que quieres, ¡genial! Lo encontraste y puedes

dejar de buscar.

## 3. Si no, sigues adelante: Si no es el objeto correcto, lo vuelves a poner en la caja y

sacas el siguiente.

## 4. Repites los pasos 2 y 3: Continúas sacando objetos uno por uno y comparándolos

con lo que buscas.

5. Dos posibles finales:

## Lo encuentras: Si en algún momento encuentras el objeto, ¡misión cumplida!

## No lo encuentras: Si llegas al final de la caja y no lo encontraste, significa que no

estaba ahí.


## En resumen: La búsqueda lineal consiste en revisar cada elemento de una colección

(como una caja, una lista, etc.) uno por uno, desde el principio, hasta encontrar lo que

buscas o hasta revisar todos los elementos.




Pseducódigo:


## 1    sea A una lista de elementos

## 2    x el elemento a buscar en la lista

## 3

4    para cada indice de 0 a len(A)-1:
5            si A[indice] == x:
## 6                    print(indice)



1    def buscarElemento():
2            for i in range(0, len(A)):
3                    if A[i] == x:
## 4                            print(i)

## 5

6    A = [321, 324, 3, -314, 0, 32] # pueden ser numeros, letras, palabras,
listas!

7    x = int(input("Ingrese el elemento a buscar")) # ya que elegimos numeros,
debo usar int()

## 8    buscarElemento(A, x)

