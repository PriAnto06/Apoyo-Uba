# PDF Content

## Clase 1: Introducción a JavaScript

## 1. Historia y Conceptos Básicos

¿Qué es JavaScript?


## JavaScript (JS) es un lenguaje de programación de alto nivel, interpretado y basado en

eventos. Es ampliamente utilizado para agregar interactividad a las páginas web, como

responder a eventos del usuario (clics, movimientos del mouse, entrada de teclado),

actualizar el contenido dinámicamente y comunicarse con servidores.


Características clave de JavaScript:


●​   Lenguaje de scripting del lado del cliente y del servidor.

●​   Dinámico y débilmente tipado.

●​   Basado en prototipos en lugar de clases tradicionales.

●​   Multiplataforma y compatible con todos los navegadores modernos.





## Diferencias entre JavaScript, HTML y CSS

## Tecnología                                     Función


## HTML (HyperText Markup       Estructura de la página web (define elementos como

Language)                    encabezados, párrafos, botones, etc.).


CSS (Cascading Style         Estiliza la página web (colores, fuentes, diseño responsivo).

## Sheets)


## JavaScript                   Agrega interactividad y lógica de programación a la página

web.

Ejemplo:




<!DOCTYPE html>​

<html lang="es">​

<head>​

<meta charset="UTF-8">​

<meta name="viewport" content="width=device-width,

initial-scale=1.0">​

<title>Ejemplo HTML, CSS y JS</title>​

<style>​

body { font-family: Arial, sans-serif; }​

button { background-color: blue; color: white; padding: 10px; }​

</style>​

</head>​

<body>​

<h1>Hola, mundo</h1>​

<button onclick="alert('¡Hola desde JavaScript!')">Haz clic

aquí</button>​

</body>​

</html>





## Uso en frontend y backend (introducción a Node.js)


## Inicialmente, JavaScript solo se usaba en el frontend (navegador), pero con la llegada de

Node.js, ahora también puede ejecutarse en el backend (servidores).


●​ Frontend: Interacción con el usuario, manipulación del DOM, validaciones.

●​ Backend: Manejo de bases de datos, APIs, autenticación de usuarios.


Ejemplo de código en Node.js:


console.log("Hola desde Node.js");




Para ejecutarlo en la terminal, guardamos el archivo como app.js y usamos:


node app.js

## Instalación y herramientas



✅

## Para trabajar con JavaScript, recomendamos usar:​


✅

## Navegador: Google Chrome, Firefox, Edge​


✅

## Editor de código: Visual Studio Code (VS Code)​

## Herramientas para depuración: Consola de desarrollador (F12 o Ctrl + Shift +

## I)





## 2. Sintaxis Básica


## Variables (var, let, const)


Las variables almacenan valores.


var nombre = "Juan";       // Variable global​

let edad = 25;             // Variable local​

const PI = 3.1416;         // Constante (no cambia)




✅ var ya no se recomienda por problemas de alcance.​

✅ let se usa para variables que pueden cambiar.​

✅ const se usa para valores que no cambian.


## Tipos de datos primitivos

## Tipo de Dato                         Ejemplo


## String (texto)                            "Hola mundo"


## Number (números)                          10, 3.14


## Boolean (lógico)                          true, false


Undefined (sin valor)                     let x;


Null (vacío)                              let y = null;


## Symbol (único e inmutable)                Symbol("id")


## BigInt (números grandes)                  9007199254740991n

## Operadores


✅ Aritméticos: + - * / % **​

✅ Comparación: == === != !== > < >= <=​

✅ Lógicos: && (AND), || (OR), ! (NOT)

Ejemplo:




let a = 10, b   = 5;​

console.log(a   + b); // 15​

console.log(a   > b); // true​

console.log(a   == "10"); // true (comparación no estricta)​

console.log(a   === "10"); // false (comparación estricta)





## 3. Estructuras de Control


## Condicionales (if, else, switch)



let edad = 18;​

​

if (edad >= 18) {​

console.log("Eres mayor de edad");​

} else {​

console.log("Eres menor de edad");​

}




Ejemplo de switch:


let dia = 3;​

​

switch (dia) {​

case 1: console.log("Lunes"); break;​

case 2: console.log("Martes"); break;​

default: console.log("Día no registrado");​

}

## Bucles (for, while, do while)

for (let i = 1; i <= 5; i++) {​

console.log("Número: " + i);​

}​

​

let j = 1;​

while (j <= 5) {​

console.log("Número: " + j);​

j++;​

}





## 4. Funciones

## Declaración y ejecución de funciones

function saludar(nombre) {​

return "Hola, " + nombre;​

}​

​

console.log(saludar("Juan"));




## Funciones anónimas y arrow functions

const sumar = function(a, b) {​

return a + b;​

};​

​

const multiplicar = (a, b) => a * b;​

​

console.log(sumar(3, 4));       // 7​

console.log(multiplicar(3, 4)); // 12

## 5. Ejercicios Prácticos

## 1. Crear una calculadora básica


Solicitar dos números y una operación (+, -, *, /) al usuario y mostrar el resultado.


let num1 = parseFloat(prompt("Ingresa el primer número:"));​

let num2 = parseFloat(prompt("Ingresa el segundo número:"));​

let operacion = prompt("Ingresa una operación (+, -, *, /):");​

​

let resultado;​

if (operacion === "+") resultado = num1 + num2;​

else if (operacion === "-") resultado = num1 - num2;​

else if (operacion === "*") resultado = num1 * num2;​

else if (operacion === "/") resultado = num1 / num2;​

else resultado = "Operación no válida";​

​

console.log("Resultado:", resultado);





## 2. Determinar si un número es par o impar

let numero = parseInt(prompt("Ingresa un número:"));​

​

if (numero % 2 === 0) {​

console.log("El número es par.");​

} else {​

console.log("El número es impar.");​

}

