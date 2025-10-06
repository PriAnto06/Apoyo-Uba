# PDF Content

## Introducción a HTML

📌 ¿Qué es HTML y para qué sirve?

## HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para estructurar el

contenido de las páginas web. No es un lenguaje de programación, sino un lenguaje de

marcado que define la jerarquía y organización del contenido.


Ejemplo de una estructura básica en HTML:


html

<!DOCTYPE html>​

<html>​

<head>​

<title>Mi Primera Página Web</title>​

</head>​

<body>​

<h1>Hola, Mundo!</h1>​

<p>Bienvenido a mi primera página web.</p>​

</body>​

</html>





📌 Diferencia entre HTML, CSS y JavaScript

## Lenguaje                                    Propósito


HTML         Define la estructura y el contenido de la página.


CSS          Se encarga del diseño y la presentación (colores, fuentes,

disposición).


JavaScript     Añade interactividad y dinamismo a la web.

Ejemplo simple:


html

<!DOCTYPE html>​

<html>​

<head>​

<style>​

body { background-color: lightblue; }​

</style>​

<script>​

function mostrarMensaje() {​

alert("¡Hola desde JavaScript!");​

}​

</script>​

</head>​

<body>​

<h1>HTML + CSS + JavaScript</h1>​

<button onclick="mostrarMensaje()">Haz clic</button>​

</body>​

</html>




## Instalación de herramientas: VS Code, extensiones útiles


1.​ Descargar VS Code.

2.​ Instalar extensiones útiles:

○​ Live Server: Para ver los cambios en tiempo real.

○​ HTML CSS Support: Para autocompletar etiquetas y atributos.

○​ Prettier: Para formatear el código automáticamente.

## 2. Estructura de un Documento HTML


Un documento HTML tiene una estructura básica:


html

<!DOCTYPE html>​

<html>​

<head>​

<meta charset="UTF-8">​

<title>Mi Página Web</title>​

</head>​

<body>​

<h1>Bienvenidos</h1>​

<p>Este es un párrafo de ejemplo.</p>​

</body>​

</html>




## Explicación de etiquetas básicas


●​ <!DOCTYPE html> → Define el tipo de documento y la versión de HTML.

●​ <html> → Contenedor principal de la página.

●​ <head> → Contiene metadatos (información sobre el documento).

●​ <body> → Contiene el contenido visible de la página.


## Encabezados, párrafos, saltos de línea y líneas horizontales

html

<h1>Título principal</h1>​

<h2>Subtítulo</h2>​

<h3>Encabezado nivel 3</h3>​

<p>Este es un párrafo de texto.</p>​

<p>Otro párrafo con un <br> salto de línea.</p>​

<hr> <!-- Línea horizontal -->




## Comentarios en HTML


Los comentarios sirven para agregar notas en el código y no son visibles en la página.


html

<!-- Esto es un comentario -->​

<p>Texto visible</p>

## 3. Elementos y Atributos


## Listas ordenadas y no ordenadas

html

<h3>Lista ordenada</h3>​

<ol>​

<li>Elemento 1</li>​

<li>Elemento 2</li>​

<li>Elemento 3</li>​

</ol>​

​

<h3>Lista no ordenada</h3>​

<ul>​

<li>Elemento A</li>​

<li>Elemento B</li>​

<li>Elemento C</li>​

</ul>




## Enlaces

html

<a href="https://www.google.com" target="_blank">Ir a Google</a>




●​ href: URL de destino.

●​ target="_blank": Abre el enlace en una nueva pestaña.


## Imágenes con atributos

html

<img src="imagen.jpg" alt="Descripción de la imagen" width="300"

height="200">




●​ src: Ruta de la imagen.

●​ alt: Texto alternativo en caso de que la imagen no se cargue.

●​ width y height: Tamaño de la imagen.

## 4. Tablas y Formularios


## Tablas en HTML

html

<table border="1">​

<thead>​

<tr>​

<th>Nombre</th>​

<th>Edad</th>​

</tr>​

</thead>​

<tbody>​

<tr>​

<td>Ana</td>​

<td>25</td>​

</tr>​

<tr>​

<td>Carlos</td>​

<td>30</td>​

</tr>​

</tbody>​

</table>




●​ <table> → Crea la tabla.

●​ <tr> → Define una fila.

●​ <th> → Encabezados de la tabla.

●​ <td> → Celdas de datos.

●​ <thead>, <tbody>, <tfoot> → Agrupan las secciones de la tabla.


## Formularios básicos

html

<form action="procesar.php" method="POST">​

<label for="nombre">Nombre:</label>​

<input type="text" id="nombre" name="nombre" required>​

​

<label for="email">Correo:</label>​

<input type="email" id="email" name="email" required>​

​

<label for="mensaje">Mensaje:</label>​

<textarea id="mensaje" name="mensaje"></textarea>​

​

<button type="submit">Enviar</button>​

</form>

●​ action: URL donde se enviarán los datos.

●​ method: GET o POST.

●​ input: Campos de entrada (text, email, etc.).

●​ textarea: Área de texto más grande.

●​ button: Botón de envío.





## 5. Práctica: Creación de una Página Web Simple


## Ejercicio práctico para aplicar lo aprendido. Crear un archivo index.html y escribir el

siguiente código:


html

<!DOCTYPE html>​

<html>​

<head>​

<meta charset="UTF-8">​

<title>Mi Página Web</title>​

</head>​

<body>​

<h1>Bienvenidos a Mi Página</h1>​

<p>Esta es una página web simple creada con HTML.</p>​

​

<h2>Mis Hobbies</h2>​

<ul>​

<li>Leer</li>​

<li>Programar</li>​

<li>Ver series</li>​

</ul>​

​

<h2>Contacto</h2>​

<form>​

<label for="nombre">Nombre:</label>​

<input type="text" id="nombre" name="nombre">​

<br>​

<label for="email">Correo:</label>​

<input type="email" id="email" name="email">​

<br>​

<button type="submit">Enviar</button>​

</form>​

</body>​

</html>

🔹 Objetivo de la práctica:

●​ Aplicar estructura HTML.

●​ Usar listas, enlaces, imágenes, tablas y formularios.

