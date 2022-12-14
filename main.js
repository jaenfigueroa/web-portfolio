//PRIMERA CARGA DE LA PAGINA///////////////////////
const pantallaDeCarga = document.getElementById('pantalla-de-carga')
const body = document.getElementById('body')
const main = document.getElementById('main')

///////////////////////////////////////////////////
window.addEventListener('load', () => {
  pantallaDeCarga.style.display = 'none'
  body.classList.remove('over-hidden')
})

//HEADER/////////////////////////////////////////////////
const iconoNav = document.getElementById('icono-nav')
const contenedorNav = document.getElementById('contenedor-nav')

iconoNav.addEventListener('click', () => {
  contenedorNav.classList.toggle('nav__caja--visible')
  // main.classList.toggle('blur')
})

//SECCION 1///////////////////////////////////////////
const titulo = document.getElementById('titulo')
const cargo = document.getElementById('cargo')

function animar() {
  titulo.classList.add('titulo--animada')

  setTimeout(() => {
    cargo.classList.add('cargo--animada')
  }, 2500)

  setTimeout(() => {
    titulo.classList.remove('titulo--animada')
    cargo.classList.remove('cargo--animada')
  }, 7000)
}

animar()

setInterval(() => {
  animar()
}, 8000)

/////////////////////////////////////////////////////
/*
 *! hola
 */

//? hola
