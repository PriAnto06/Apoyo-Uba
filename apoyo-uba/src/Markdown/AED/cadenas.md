# Cadenas en Python

Llamamos **cadena**, `string`, `str` a una cadena de caracteres, coloquialmente conocida como "texto".

Ejemplos de cadenas:

```python
texto = "Podemos utilizar corchetes en cualquier cadena para acceder a una parte de..."
cadena = "Esto es una cadena"
nombre = "Cosme Fulanito"
capítulo_1 = "Capítulo 1\nHabía una vez un loco que hacía apuntes sin tildes"
```

---

## Acceso por índice o posición

Podemos utilizar los corchetes en cualquier cadena para acceder a una parte de ella.  
Python enumera cada caracter desde `0`.  
El primer caracter está en la posición `0`, el segundo en `1`, etc.

```python
texto = "Siempre empieza enumerando desde cero"
print(texto[0])  # Primera letra
print(texto[7])  # Primer espacio
```

También se pueden usar **índices negativos** para acceder de atrás hacia adelante.

```python
texto = "No es una vaca cualquiera"
print(texto[-1])  # 'a' (último caracter)
print(texto[-3])  # 'e'
```

---

## Slices `[:]`

Los *slices* o porciones de cadenas permiten obtener subcadenas:

```python
texto = "Siempre empieza enumerando desde cero"
subcadena = texto[0:7]   # "Siempre"
subcadena2 = texto[8:15] # "empieza"
subcadena3 = texto[16:26]# "enumerando"
```

> 📘 Recordá: el índice final **no se incluye**, por eso se usa `[inicio:fin+1]`.

---

## Operador `in`: búsqueda en una cadena

Sirve para saber si una subcadena está dentro de otra:

```python
frase = "Nos, los representantes del pueblo argentino, reunidos hoy (...)"
búsqueda = "argentino"
if búsqueda in frase:
    print(f"Encontramos {búsqueda} en la frase")
```

También funciona directo:

```python
cadena = "Hoy aprendimos historia"
print("historia" in cadena)  # True
```

---

## Recorrer cadenas con `for`

Podemos recorrer una cadena caracter por caracter:

```python
cadena = "I wanna be a millionaire"
for caracter in cadena:
    print(caracter)
```

En forma de función:

```python
def imprimir_cadena(cadena):
    for letra in cadena:
        print(letra)

mi_cadena = "Hoy ya no hace tanto calor."
imprimir_cadena(mi_cadena)
```

---

## `len()`: longitud de una cadena

Devuelve la cantidad de caracteres que contiene.

```python
cadena = "I wanna be a millionaire"
longitud = len(cadena)
print(f"La longitud es: {longitud}")
```

Para acceder al último caracter:

```python
cadena[-1]
# o
cadena[len(cadena) - 1]
```

---

## Buscar caracteres

### Forma 1: con `for`

```python
def contiene_a(cadena):
    for caracter in cadena:
        if caracter == "a":
            return True
    return False
```

### Forma 2: usando `in`

```python
def contiene_vocal(cadena):
    for caracter in cadena:
        if caracter in "aeiou":
            return True
    return False
```

### Control numérico

```python
def control_numerico(contrasena):
    for caracter in contrasena:
        if caracter in "0123456789":
            return True
    return False
```

---

## Contar caracteres

Ejemplo: contar arrobas o vocales.

```python
def contar_arrobas(cadena):
    contador = 0
    for caracter in cadena:
        if caracter == "@":
            contador += 1
    return contador

def contar_vocales(cadena):
    contador = 0
    for caracter in cadena:
        if caracter in "aeiou":
            contador += 1
    return contador
```

---

## Recorrer por índice con `range()`

```python
cadena = "Hola, mundo"
for i in range(len(cadena)):
    print(f"El caracter en la posición {i} es: {cadena[i]}")
```

---

## Buscar posición de un caracter

```python
def buscar_caracter(cadena, caracter):
    for i in range(len(cadena)):
        if cadena[i] == caracter:
            return i
    return -1  # -1 indica que no se encontró
```

> 💡 En programación, `-1` suele representar "no encontrado".