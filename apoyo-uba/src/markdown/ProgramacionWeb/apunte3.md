# PDF Content

¿Qué es React?

## En esta sección, explicaremos qué es React, sus ventajas, cómo funciona y cómo se

diferencia de otras herramientas de desarrollo web. También realizaremos un ejercicio

comparando la creación de una UI dinámica con JavaScript puro y React.





🔹 Historia y propósito de React

## React fue desarrollado por Facebook (Meta) en 2013 para mejorar el rendimiento y la

escalabilidad de sus aplicaciones, en particular la interfaz de usuario de Facebook.


📌 ¿Por qué se creó React?

## Antes de React, los desarrolladores trabajaban con tecnologías como jQuery y

## Backbone.js, que manipulaban directamente el DOM, generando problemas de rendimiento

en interfaces complejas.



✅

## React se creó con el objetivo de:​


✅

## Mejorar el rendimiento con el uso del Virtual DOM.​


✅

## Facilitar el desarrollo modular con componentes reutilizables.​

Simplificar el manejo del estado de las aplicaciones interactivas.


## Ejemplo real: Facebook y WhatsApp Web usan React para gestionar la

actualización eficiente de la UI con miles de interacciones por segundo.





🔹 Diferencias entre biblioteca y framework

## Un framework es una estructura completa que dicta cómo construir una aplicación. Un

ejemplo de framework es Angular, que tiene reglas estrictas y muchas herramientas

integradas.



✅

## React, en cambio, es una biblioteca, lo que significa que:​


✅

## Se enfoca solo en la interfaz de usuario.​


✅

## Es más flexible y permite integrar otras herramientas.​

Requiere configuraciones externas para manejar rutas o estado global (ej. React Router,

Redux).


Ejemplo:


●​ Framework: Angular (te obliga a seguir una estructura fija).

●​ Biblioteca: React (tú decides cómo organizar tu proyecto).

🔹 Virtual DOM vs. DOM tradicional

## El DOM (Document Object Model) es una representación estructurada de la página web

en la memoria del navegador.


## Problema con el DOM tradicional:​

## Cuando un elemento cambia en la interfaz, el navegador re-renderiza toda la página, lo

que ralentiza el rendimiento.



✅

## Solución de React: Virtual DOM​

## React usa una copia virtual del DOM, llamada Virtual DOM, donde primero actualiza


✅

los cambios en memoria.​

## Luego, compara los cambios con el DOM real y modifica solo lo necesario, sin afectar


✅

otros elementos.​

## Esto hace que React sea mucho más rápido que manipular el DOM directamente con

JavaScript.


Ejemplo:


●​ DOM tradicional: Cambiar un botón puede hacer que toda la página se

re-renderice.

●​ Virtual DOM: Solo actualiza el botón sin afectar el resto de la UI.


📌 Ejemplo visual en código:

// DOM tradicional (JavaScript puro)​

document.getElementById("contador").innerText = nuevoValor;​

​

// React con Virtual DOM​

setContador(nuevoValor); // React compara con el Virtual DOM y actualiza

solo el cambio.





🔹 Declarativo vs. Imperativo

## La programación imperativa obliga a escribir cada paso específico para modificar la UI. En

cambio, la programación declarativa describe el resultado deseado y deja que React lo

maneje internamente.


## Imperativo (JavaScript puro)                       Declarativo (React)


## Especificamos cada cambio paso a       Solo declaramos cómo queremos que sea el

paso.                                  estado final.

Requiere manipulación directa del     React maneja los cambios automáticamente.

DOM.


Código más largo y difícil de         Código más corto y limpio.

mantener.


📌 Ejemplo:

// Imperativo (JavaScript puro)​

const boton = document.getElementById("miBoton");​

boton.addEventListener("click", function() {​

boton.innerText = "¡Clickeado!";​

});​

​

​

// Declarativo (React)​

function Boton() {​

const [texto, setTexto] = React.useState("Clickeame");​

​

return <button onClick={() =>

setTexto("¡Clickeado!")}>{texto}</button>;​

}




Conclusión: React permite escribir código más intuitivo y mantenible.





🔹 Casos de uso de React en proyectos reales

React es usado por grandes empresas debido a su rendimiento y facilidad de desarrollo.


✅ Facebook e Instagram: Manejan cientos de actualizaciones en tiempo real.​

✅ Netflix: Usa React para mejorar la experiencia del usuario.​

✅ Airbnb y Uber: Utilizan React para interfaces interactivas.​

✅ WhatsApp Web: Basado en React para una mejor optimización.

## Ejemplo: La barra de notificaciones en Facebook se actualiza sin recargar la

página, gracias al Virtual DOM.

📝 Actividad práctica: Comparación JavaScript puro

vs. React

## Objetivo: Construir un contador interactivo en JavaScript puro y luego en React para

comparar la facilidad de desarrollo.


🔹 Paso 1: Contador con JavaScript puro

<!DOCTYPE html>​

<html lang="es">​

<head>​

<meta charset="UTF-8">​

<meta name="viewport" content="width=device-width,

initial-scale=1.0">​

<title>Contador JS</title>​

</head>​

<body>​

<h1>Contador</h1>​

<p id="contador">0</p>​

<button id="incrementar">Incrementar</button>​

​

<script>​

let contador = 0;​

document.getElementById("incrementar").addEventListener("click",

function() {​

contador++;​

document.getElementById("contador").innerText = contador;​

});​

</script>​

</body>​

</html>




🔹 Paso 2: Contador con React

import { useState } from "react";​

​

function Contador() {​

const [contador, setContador] = useState(0);​

​

return (​

<div>​

<h1>Contador</h1>​

<p>{contador}</p>​

<button onClick={() => setContador(contador +

## 1)}>Incrementar</button>​

</div>​

);​

}​

​

export default Contador;


📌 Análisis:

●​ En JavaScript puro, se necesita manipular manualmente el DOM.

●​ En React, solo cambiamos el estado y React actualiza automáticamente la UI.

●​ El código en React es más limpio, fácil de escalar y reutilizable.





✅ Conclusión de la sesión

✔   React nació para solucionar problemas de rendimiento en interfaces dinámicas.​

✔   Es una biblioteca, no un framework, lo que le da flexibilidad.​

✔   Usa el Virtual DOM para hacer cambios eficientes en la UI.​

✔   La programación declarativa en React simplifica el desarrollo.​

✔   Empresas como Facebook, Netflix y Uber usan React por su escalabilidad.


📢 Próximo tema: Instalación y configuración de React con Vite 🚀.


## JSX y su importancia


## En esta sección, explicaremos qué es JSX, por qué es importante en React, sus diferencias

con HTML y las reglas básicas que debemos seguir al usarlo.





🔹 ¿Qué es JSX y por qué se usa?

## JSX (JavaScript XML) es una extensión de JavaScript que nos permite escribir código

similar a HTML dentro de un archivo de JavaScript.


✅ Permite estructurar la interfaz de usuario de manera clara y fácil de leer.​

✅ Se compila a JavaScript puro con React.createElement(), lo que mejora la

✅ Evita manipular el DOM manualmente, ya que React actualiza los cambios

optimización.​


automáticamente.


📌 Ejemplo:

// JSX​

const titulo = <h1>¡Hola, mundo!</h1>;​

​

// Cómo se transforma internamente en JavaScript puro​

const titulo = React.createElement("h1", null, "¡Hola, mundo!");





## Conclusión: JSX simplifica la creación de interfaces sin escribir estructuras

complejas en JavaScript.





🔹 Diferencias entre JSX y HTML

A primera vista, JSX y HTML parecen iguales, pero tienen algunas diferencias clave.




## Característica                   HTML                           JSX (React)



className="boton"                  className="botón"

## Atributos de clase



onclick="miFuncion()"              onClick={miFuncion}

## Eventos



<img src="foto.jpg">               <img src="foto.jpg" />

## Cierre de

etiquetas



<p>{variable}</p> no               <p>{variable}</p> sí

## Uso de JavaScript     funciona                           funciona





📌 Ejemplo de diferencias:

<!-- HTML -->​

<button class="boton" onclick="alert('¡Hola!')">Click aquí</button>​

​

// JSX​

<button className="boton" onClick={() => alert("¡Hola!")}>Click

aquí</button>

🔹 Reglas de JSX

JSX tiene algunas reglas que debemos seguir para que funcione correctamente.


## 1️⃣ Regla: Solo puede haber un elemento padre


JSX no puede devolver múltiples elementos sin un contenedor.


❌ Código incorrecto:

return (​

<h1>Hola</h1>​

<p>Bienvenido a React</p>​

);





✅ Código correcto:

return (​

<div>​

<h1>Hola</h1>​

<p>Bienvenido a React</p>​

</div>​

);





También podemos usar fragmentos (<> </>) para evitar contenedores innecesarios:


return (​

<>​

<h1>Hola</h1>​

<p>Bienvenido a React</p>​

</>​

);

## 2️⃣ Regla: Los atributos deben usar camelCase


En JSX, los atributos deben escribirse en camelCase, no en minúsculas como en HTML.


❌ Código incorrecto:

<input type="text" onclick="alert('Hola')" />





✅ Código correcto:

<input type="text" onClick={() => alert("Hola")} />





## 3️⃣ Regla: className en lugar de class


Como class es una palabra reservada en JavaScript, en JSX se usa className.


❌ Código incorrecto:

<h1 class="titulo">Bienvenido</h1>





✅ Código correcto:

<h1 className="titulo">Bienvenido</h1>





## 4️⃣ Regla: Incrustar expresiones en {}


Podemos usar código JavaScript dentro de JSX con llaves {}.


✅ Ejemplo:

const nombre = "Juan";​

return <h1>Hola, {nombre}!</h1>;

✅ Ejemplo con cálculos:

return <p>El resultado es: {5 + 3}</p>;





❌ Código incorrecto: (No podemos usar estructuras de control como if directamente en

## JSX)





return <p>{if (condicion) "Sí"}</p>;





✅ Solución: Usar operadores ternarios


return <p>{condicion ? "Sí" : "No"}</p>;





📝 Actividad práctica: Creando una tarjeta de usuario

con JSX

Objetivo: Construir una tarjeta de usuario aplicando todas las reglas de JSX.


## Paso 1: Código HTML tradicional




<div class="tarjeta">​

<h2>Juan Pérez</h2>​

<p>Edad: 30 años</p>​

<button onclick="alert('Hola, Juan!')">Saludar</button>​

</div>

## Paso 2: Convertirlo a JSX

function TarjetaUsuario() {​

const nombre = "Juan Pérez";​

const edad = 30;​

​

return (​

<div className="tarjeta">​

<h2>{nombre}</h2>​

<p>Edad: {edad} años</p>​

<button onClick={() => alert(`Hola, ${nombre}!`)}>Saludar</button>​

</div>​

);​

}





📌 Puntos clave del ejercicio:​

✅ Se usó className en lugar de class.​

✅ Se usaron expresiones {} para insertar variables.​

✅ Se utilizó un evento onClick en formato JSX.


✅ Conclusión de la sesión

✔ JSX permite escribir código más intuitivo y fácil de mantener.​

✔ Es similar a HTML pero con reglas propias (atributos en camelCase, className, {}

para JavaScript).​

✔ Facilita la creación de interfaces dinámicas con React.


📢 Próximo tema: Creación de componentes en React 🚀.

## Componentes en React


## En esta sección, explicaremos qué es un componente, cómo se dividen en componentes

funcionales y de clase, cómo funcionan las props para pasar datos y cómo reutilizar

componentes. Al final, realizaremos un ejercicio práctico para reforzar estos conceptos.

🔹 ¿Qué es un componente?

## Un componente es una unidad reutilizable de código que representa una parte de la

interfaz de usuario.


✅ Permite dividir la UI en partes más pequeñas y fáciles de mantener.​

✅ Cada componente es independiente y puede recibir datos.​

✅ React usa componentes reutilizables para construir interfaces dinámicas.

📌 Ejemplo: En un e-commerce, la página de productos puede tener componentes como:

●​ Navbar (barra de navegación).

●​ ListaProductos (lista de productos).

●​ TarjetaProducto (cada producto individual).





function Navbar() {​

return <nav>Menú de navegación</nav>;​

}​

​

function ListaProductos() {​

return (​

<div>​

<h2>Lista de productos</h2>​

<TarjetaProducto nombre="Laptop" precio="500 USD" />​

</div>​

);​

}





function TarjetaProducto({ nombre, precio }) {​

return (​

<div>​

<h3>{nombre}</h3>​

<p>{precio}</p>​

</div>​

);​

}





## Conclusión: Cada componente maneja una parte específica de la UI, lo que

facilita su mantenimiento.

🔹 Componentes funcionales vs. de clase

## Existen dos tipos de componentes en React:​

## 1️⃣ Componentes funcionales (recomendados)​

## 2️⃣ Componentes de clase (obsoletos en React moderno)


📌 1️⃣ Componentes funcionales

## Son funciones de JavaScript que retornan JSX. Se usan con hooks para manejar estados y

efectos.


✅ Más cortos y fáciles de leer.​

✅ Mejor rendimiento.​

✅ Requieren React Hooks para manejar estado (useState).

📌 Ejemplo de un componente funcional:


function Saludo() {​

return <h1>¡Hola, bienvenido!</h1>;​

}





📌 2️⃣ Componentes de clase (antes de React 16.8)

Antes de los hooks, los componentes de clase eran la única forma de manejar el estado.


⚠ Ya no se recomienda usarlos, pero aún los encontramos en proyectos antiguos.


📌 Ejemplo de un componente de clase:


import React, { Component } from "react";​

​

class Saludo extends Component {​

render() {​

return <h1>¡Hola, bienvenido!</h1>;​

}​

}

## Conclusión: Hoy en día, se prefieren los componentes funcionales con

useState y useEffect en lugar de los de clase.





🔹 Uso de props para pasar datos entre componentes

## Los props (abreviación de "properties") permiten pasar información de un componente

padre a un hijo.


✅ Son inmutables (no pueden cambiarse dentro del componente hijo).​

✅ Se envían como atributos dentro del JSX.​

✅ Se reciben como argumento en los componentes funcionales.

📌 Ejemplo básico:

function    Saludo(props) {​

return   <h1>¡Hola, {props.nombre}!</h1>;​

}​

​

function    App() {​

return   <Saludo nombre="Juan" />;​

}





📌 Otra forma más limpia (destructuring):


function Saludo({ nombre }) {​

return <h1>¡Hola, {nombre}!</h1>;​

}

🔹 Reutilización de componentes

## Una de las ventajas principales de React es que podemos reutilizar componentes para

evitar repetir código.


📌 Ejemplo sin reutilización:

function App() {​

return (​

<div>​

<h2>Lista de productos</h2>​

<div>​

<h3>Smartphone</h3>​

<p>Precio: $300</p>​

</div>​

<div>​

<h3>Laptop</h3>​

<p>Precio: $800</p>​

</div>​

</div>​

);​

}





📌 Ejemplo con reutilización:

function Producto({ nombre, precio }) {​

return (​

<div>​

<h3>{nombre}</h3>​

<p>Precio: {precio}</p>​

</div>​

);​

}​

​

function App() {​

return (​

<div>​

<h2>Lista de productos</h2>​

<Producto nombre="Smartphone" precio="$300" />​

<Producto nombre="Laptop" precio="$800" />​

</div>​

);​

}





## Conclusión: Los componentes permiten reutilizar código y hacer que el

desarrollo sea más eficiente.





📝 Actividad práctica: Creando un componente

## TarjetaProducto con props


📌 Objetivo

## Crear un componente TarjetaProducto que reciba los siguientes props:​

✅ nombre → Nombre del producto​

✅ precio → Precio del producto​

✅ imagen → URL de la imagen

## 1️⃣ Paso 1: Crear el componente TarjetaProducto




function TarjetaProducto({ nombre, precio, imagen }) {​

return (​

<div className="tarjeta-producto">​

<img src={imagen} alt={nombre} />​

<h3>{nombre}</h3>​

<p>Precio: {precio}</p>​

<button>Comprar</button>​

</div>​

);​

}

## 2️⃣ Paso 2: Usarlo dentro de App con diferentes productos




function App() {​

return (​

<div>​

<h1>Tienda Online</h1>​

<TarjetaProducto​

nombre="iPhone 13"​

precio="$1000"​

imagen="https://via.placeholder.com/150"​

/>​

<TarjetaProducto​

nombre="MacBook Pro"​

precio="$2000"​

imagen="https://via.placeholder.com/150"​

/>​

<TarjetaProducto​

nombre="AirPods"​

precio="$199"​

imagen="https://via.placeholder.com/150"​

/>​

</div>​

);​

}





📌 3️⃣ Paso 3: Agregar estilos para mejorar la UI

.tarjeta-producto {​

border: 1px solid #ddd;​

padding: 20px;​

text-align: center;​

width: 200px;​

margin: 10px;​

}​

​

.tarjeta-producto img {​

width: 100px;​

}​

​

.tarjeta-producto button {​

background: blue;​

color: white;​

padding: 5px;​

border: none;​

cursor: pointer;​

}





✅ Conclusión de la sesión

✔ Los componentes son la base de React y permiten organizar la UI en partes

reutilizables.​

✔ Los componentes funcionales son la mejor práctica en React moderno.​

✔ Usamos props para pasar datos dinámicos a los componentes.​

✔ La reutilización de componentes reduce el código repetitivo y facilita el mantenimiento.


📢 Próximo tema: Estado y manejo de eventos con Hooks 🚀.

## Renderizado de listas y condicional (40 min)



✅

## En esta sección, aprenderemos a:​

## Renderizar listas con .map().​

✅ Usar key para mejorar la eficiencia en listas.​

✅ Aplicar renderizado condicional con operadores lógicos (&&, ? :).​

✅ Realizar un ejercicio práctico mostrando una lista de usuarios con mensajes

condicionales.





🔹 Uso de .map() para renderizar listas

## Cuando tenemos una lista de elementos y queremos mostrarlos en React, utilizamos el

método .map(), que recorre la lista y retorna un nuevo array con elementos JSX.


📌 Ejemplo: Renderizar una lista de nombres

const nombres = ["Juan", "María", "Carlos"];​

​

function ListaNombres() {​

return (​

<ul>​

{nombres.map((nombre) => (​

<li>{nombre}</li>​

))}​

</ul>​

);​

}





🔴 Problema: React mostrará una advertencia porque falta un key.


🔹 Claves (key) en listas

## React necesita una clave (key) única para cada elemento de la lista. Esto ayuda a React a

identificar qué elementos han cambiado, mejorando la eficiencia en el renderizado.


📌 Ejemplo correcto con key:

const nombres = ["Juan", "María", "Carlos"];​

​

function ListaNombres() {​

return (​

<ul>​

{nombres.map((nombre, index) => (​

<li key={index}>{nombre}</li>​

))}​

</ul>​

);​

}





📌 Reglas para key:​

✅ Debe ser único para cada elemento.​

✅ No usar index si la lista cambia de orden o se elimina elementos.​

✅ Si los datos vienen de un backend, usar el id del objeto.

📌 Ejemplo con objetos que tienen id:

const usuarios = [​

{ id: 1, nombre: "Juan" },​

{ id: 2, nombre: "María" },​

{ id: 3, nombre: "Carlos" },​

];​

​

function ListaUsuarios() {​

return (​

<ul>​

{usuarios.map((usuario) => (​

<li key={usuario.id}>{usuario.nombre}</li>​

))}​

</ul>​

);​

}





🔹 Renderizado condicional en React

A veces, queremos mostrar elementos solo si se cumple una condición.


## 1️⃣ Usando && (si la condición es verdadera, muestra el contenido)


📌 Ejemplo: Mostrar un mensaje si hay usuarios registrados

const usuarios = ["Juan", "María", "Carlos"];​

​

function Mensaje() {​

return (​


✅</p>}​

<div>​

{usuarios.length > 0 && <p>Hay usuarios registrados

</div>​

);​

}





✅ Si usuarios.length > 0, se muestra el mensaje.​

❌ Si usuarios.length === 0, no se renderiza nada.


## 2️⃣ Usando operador ternario ? : (si no, muestra otra cosa)


📌 Ejemplo: Mostrar mensaje diferente según si hay usuarios o no

const usuarios = [];​

​

function Mensaje() {​

return (​

<div>​


✅

{usuarios.length > 0 ? (​

<p>Hay usuarios registrados    </p>​


❌

) : (​

<p>No hay usuarios registrados    </p>​

)}​

</div>​

);​

}





✅ Si hay usuarios, muestra "✅".​

✅ Si no hay usuarios, muestra "❌".


## 3️⃣ Usando una función externa para condicionar el renderizado


A veces, es mejor extraer la lógica en una función para mejorar la legibilidad.


📌 Ejemplo:


function mostrarMensaje(usuarios) {​


✅

if (usuarios.length > 0) {​

return <p>Hay usuarios registrados    </p>;​


❌

} else {​

return <p>No hay usuarios registrados    </p>;​

}​

}​

​

const usuarios = ["Juan", "María"];​

​

function App() {​

return <div>{mostrarMensaje(usuarios)}</div>;​

}

📝 Ejercicio: Mostrar una lista de usuarios y

condicionar la visualización de un mensaje

Objetivo:


●​ Renderizar una lista de usuarios con .map().

●​ Mostrar un mensaje si un usuario está activo o inactivo usando renderizado

condicional.


## 1️⃣ Paso 1: Crear la lista de usuarios




const usuarios = [​

{ id: 1, nombre: "Juan", activo: true },​

{ id: 2, nombre: "María", activo: false },​

{ id: 3, nombre: "Carlos", activo: true },​

];





## 2️⃣ Paso 2: Renderizar los usuarios con estado condicional




function ListaUsuarios() {​

return (​

<ul>​

{usuarios.map((usuario) => (​

<li key={usuario.id}>​

{usuario.nombre} -{" "}​


✅</span>​

{usuario.activo ? (​

<span style={{ color: "green" }}>Activo

) : (​

<span style={{ color: "red" }}>Inactivo   ❌</span>​

)}​

</li>​

))}​

</ul>​

);​

}





✅ Si activo === true, muestra "Activo ✅".​

✅ Si activo === false, muestra "Inactivo ❌".


## 3️⃣ Paso 3: Mostrar un mensaje general basado en el estado de los

usuarios


📌 Mostrar un mensaje si hay al menos un usuario activo


function MensajeEstado() {​

const hayUsuariosActivos = usuarios.some((usuario) => usuario.activo);​

​

return (​


✅

<p>​


❌

{hayUsuariosActivos ? "Hay usuarios activos   " : "No hay usuarios

activos    "}​

</p>​

);​

}





📌 Incluirlo en la App junto con la lista


function App() {​

return (​

<div>​

<h1>Lista de Usuarios</h1>​

<ListaUsuarios />​

<MensajeEstado />​

</div>​

);​

}





✅ Conclusión de la sesión

✔ Usamos .map() para recorrer listas y renderizar elementos dinámicamente.​

✔ Es importante usar key para optimizar el rendimiento.​

✔ Con && y ? : controlamos qué mostrar según condiciones.​

✔ React permite escribir código limpio y dinámico con el renderizado condicional.


📢 Próximo tema: Manejo de estado con useState 🚀.

