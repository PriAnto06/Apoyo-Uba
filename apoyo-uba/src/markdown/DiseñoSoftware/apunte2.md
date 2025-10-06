# PDF Content


¿Qué es un Sistema de Control de Versiones?


## Un sistema de control de versiones registra los cambios realizados en

un conjunto de archivos a lo largo del tiempo, de modo que puedas

recuperar versiones específicas más adelante. Aunque nosotros

principalmente lo vamos a utilizar para archivos de código, en realidad

puedes hacer lo mismo con casi cualquier tipo de archivo que

encuentres en una computadora.


¿Qué es Git?


## Git es un sistema de control de versiones distribuído. Nosotros lo

vamos a usar principalmente desde la línea de comandos para reforzar

los conceptos principales, pero también se puede integrar directamente

sobre el entorno de desarrollo (por ejemplo el Visual Studio Code)



¿Qué es github?


GitHub es una plataforma creada para poder alojar/subir tus proyectos.

## De esta manera podemos contar con una copia remota de backup y

además permite colaborar en el desarrollo de proyectos.


## Bibliografía


## Libro sobre Git

Cómo crear una cuenta en GitHub y el Token.


## Para utilizarlo vamos a proceder a crear una cuenta en donde dice Sign

Up, completamos los datos que nos piden con nuestra información.





Luego procederemos a la imagen de perfil.





Daremos un click en Settings.





Luego daremos un click en Developer Settings.





## Clickear en Personal access tokens, clickear en Tokens (classic)





## Seleccionar Generate new token, cuando se despliega seleccionamos la

opción de Tokens (classic)

En este recuadro poner un nombre válido para el Token. (Ej. Token ).





## Seleccionamos que no expire así no generamos todos los días o cada

30 días una nueva clave.





## Seleccionar repo para que cuando pusheemos nos los suba a nuestro

repositorio.

Luego clickeamos Generate Token.





Guardar el token en un archivo de texto en su drive.





## Como crear un Repositorio en GitHub


## Del lado izquierdo de la pantalla vamos a seleccionar el botón de NEW

para poder crear un repositorio nuevo.

## Dentro del recuadro Repository Name colocamos un nombre para el

repositorio.





Vamos a seleccionar la opción de Public la mayoría de las veces.





## Tildamos el cuadrado de Add a README file, para que nos agregue un

archivo de lectura en nuestro repositorio para que no esté vacío.

## Para finalizar y poder crear el repositorio vamos a tocar el botón de

CREATE REPOSITORY.





## Desde la Terminal/Consola, vamos a proceder a clonar nuestro

repositorio de la siguiente manera:

## 1.​ Crearemos una carpeta en el escritorio, con el comando mkdir

…….. (y agregamos el nombre de nuestra carpeta).

## 2.​ Luego ingresamos a la carpeta con el comando cd y el nombre de

la carpeta que creamos.

## 3.​ Dentro de esa carpeta vamo a clonar nuestro código de la

siguiente forma:

## 4.​ Iremos a nuestro repositorio creado en la página de GitHub y

daremos un click sobre el botón <>CODE





## Se va a desplegar un                          cuadro donde aparece la

## URL de nuestro repositorio que creamos

## Luego daremos un click en el botón que aparece a la derecha de la URL

que nos muestra.





## Luego en la Terminal/Consola usaremos git con el siguiente comando

para clonar nuestro repositorio dentro de la carpeta que hayamos

creado en los pasos anteriores:


git clone https://github.com/tomiMayorga/ejemplo.git

## Link a tutorial para crear una página con

## GitHub


https://pages.github.com/




## Referencia Markdown

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-form

atting-on-github/basic-writing-and-formatting-syntax



## Comandos de git que vamos a utilizar seguido


git config --global -l (muestra el usuario global)

git config --local -l (muestra el usuario local que está configurado)


git config --global user.name "Nombre Apellido" (configura el usuario

de forma global)

git config --global user.email "email@gmail.com" (configura el email del

usuario de forma global)


git clone (permite clonar repositorios en la terminal)

git remote get-url origin (permite ver que repositorio estamos

usando)

git pull (trae la última versión del repositorio)

git log (muestra el historial de los cambios realizados / con espacio

avanzó con que finalizó)



code . (abre la carpeta donde estas parado en visual studio code)

ls (lista todas las carpetas que hay en la computadora)

cd (permite acceder a la carpeta que querramos)

cd .. (permite salir de la carpeta de donde estamos parados)

pwd (muestra donde estamos parados)

clear (limpia la pantalla)

ctrl+shift+v (permite pegar algo que hayamos copiado)

ctrl+shift+c (permite copiar)

rm -rf (permite eliminar la carpeta completa si fue mal cargada)


git status (nos permite ver los documentos que tenemos en nuestro

stage y agregar o sacarlos de ahí)

git add (nos permite agregar al stage para commitear un archivo)

git commit -m "mensaje" (permite confirmar cambios de la forma mas

sencilla con un mensaje)

git push (permite subir los cambios o carpetas a nuestro repositorio

en gitHub)

git rm <nombre_del_archivo> (permite eliminar carpetas o archivos)

git log (imprime historial de commits y modificaciones)



## Gráfico de los distintos estados por los que va

pasando un archivo dentro del directorio de trabajo

## Gráfico de como se van propagando los cambios

entre las distintas áreas

