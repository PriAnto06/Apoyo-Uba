# PDF Content

## Ver video https://youtu.be/HqIVsn9sgM0


1. Abrir un archivo:

## Para comenzar a manipular archivos en nuestra computadora, debemos abrirlos. Lo

haces así:


## 1      archivo = open("mi_archivo.txt", "r")

## 2

## 3      # donde "mi_archivo.txt" es la ruta y "r" es el modo "reading" o lectura


## El "r" significa que lo estás abriendo para leer (de "read" en inglés). También puedes usar

"w" para escribir en el archivo o "a" para escribir al final del archivo.


2. Leer un archivo:

Una vez abierto, puedes leer lo que contiene:


## 1      contenido = archivo.read()

## 2      print(contenido)


Esto lee todo el archivo. También puedes leer línea por línea:


1      linea = archivo.readline():
## 2      print(linea)



## 1      # Algo mas complejo, podemos usar un ciclo for para leer cada linea

## 2

3      for linea in archivo:
## 4         print(linea)


3. Escribir en un archivo:

Para escribir, abre el archivo en modo escritura:


## 1      archivo = open("nuevo_archivo.txt", "w")

## 2      archivo.write("Hola, mundo!")


4. Cerrar un archivo:

Es importante cerrar los archivos cuando termines:



## 1      archivo.close()


5. Usar 'with':

## Una forma más segura de trabajar con archivos es usando 'with'. Se encarga de cerrar

el archivo por ti al terminar el bloque de codigo:

## 1    with open("mi_archivo.txt", "r") as archivo: # abre en modo escritura

## 2       contenido = archivo.read()

## 3       print(contenido)

## 4    # En esta linea, el archivo ya se encuentra cerrado


6. Rutas de archivos:

## Cuando abres un archivo, necesitas decirle a Python dónde está. Si está en la misma

carpeta que tu programa, solo usa el nombre. Si no, necesitas dar la ruta completa.


## PELIGRO!


Leer un archivo que no existe causará un error.

Escribir en un archivo que no existe lo creará.

## Escribir en un archivo existente borrará su contenido anterior, a menos que uses el

modo "a" para añadir al final.

