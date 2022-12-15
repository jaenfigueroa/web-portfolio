const body = document.getElementById('body')
const footer = document.getElementById('footer')

const contenedorNav = document.getElementById('contenedor-nav')
const iconoNav = document.getElementById('icono-nav')
const main = document.getElementById('main')
const titulo = document.getElementById('titulo')
const cargo = document.getElementById('cargo')

const pantallaDeCarga = document.getElementById('pantalla-de-carga')

//HEADER/////////////////////////////////////////////////
function alternarBlur(valor) {
  if (valor) {
    main.classList.add('blur')
    footer.classList.add('blur')
  } else {
    main.classList.remove('blur')
    footer.classList.remove('blur')
  }
}

iconoNav.addEventListener('click', () => {
  contenedorNav.classList.toggle('nav__caja--visible')
  alternarBlur(true)
})

/* para que al sellecionar una seccion del nav, se quite el blur y se esconda la caja de items */

const itemNavTotal = document.querySelectorAll('.item-nav')
console.log(itemNavTotal)

itemNavTotal.forEach((item) => {
  console.log(item)
  item.addEventListener('click', () => {
    alternarBlur(false)

    contenedorNav.classList.toggle('nav__caja--visible')
  })
})

//ANIMACION DE LA SECCION1 - PRESENTACION ///////////////

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
//PRIMERA CARGA DE LA PAGINA///////////////////////

///////////////////////////////////////////////////
window.addEventListener('load', () => {
  pantallaDeCarga.style.display = 'none'
  body.classList.remove('over-hidden')
})
