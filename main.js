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
  if (valor == 'alternar') {
    main.classList.toggle('blur')
    footer.classList.toggle('blur')
  } else {
    if (valor) {
      main.classList.add('blur')
      footer.classList.add('blur')
    } else {
      main.classList.remove('blur')
      footer.classList.remove('blur')
    }
  }
}

iconoNav.addEventListener('click', () => {
  contenedorNav.classList.toggle('nav__caja--visible')
  alternarBlur('alternar')
})

/* para que al sellecionar una seccion del nav, se quite el blur y se esconda la caja de items */

const itemNavTotal = document.querySelectorAll('.item-nav')

itemNavTotal.forEach((item) => {
  item.addEventListener('click', () => {
    alternarBlur(false)

    contenedorNav.classList.toggle('nav__caja--visible')
  })
})

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//ANIMACION DE LA SECCION1 - PRESENTACION ///////////////////////////////////////////

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

//INTERCALAR BOTON DE DESCARGAR CV Y CONTACT
const botonDescargarCV = document.getElementById('boton-descargar-cv')
const botonContact = document.getElementById('boton-contact')

botonContact.addEventListener('mouseenter', () => {
  botonDescargarCV.classList.add('boton2')
})

botonContact.addEventListener('mouseleave', () => {
  botonDescargarCV.classList.remove('boton2')
})
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//PRIMERA CARGA DE LA PAGINA////////////////////////////////////////////////////////

window.addEventListener('load', () => {
  pantallaDeCarga.style.display = 'none'
  body.classList.remove('over-hidden')
})

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//SECCION ACTIVO NAV PINTADO////////////////////////////////////////////////////////
const menuLinks = document.querySelectorAll('.nav__caja a[href^="#"]')

////////////////////////////////////////////////////
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      const menuLink = document.querySelector(`.nav__caja a[href="#${id}"]`)

      if (entry.isIntersecting) {
        document.querySelector('.nav__caja a.selected').classList.remove('selected')
        menuLink.classList.add('selected')
      }
    })
  },
  {rootMargin: '-60% 0px -40% 0px'}
)

////////////////////////////////////////////////////
menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute('href')
  const target = document.querySelector(hash)

  if (target) {
    observer.observe(target)
  }
})

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
ScrollReveal().reveal('.caja2', {
  distance: '300px',
  duration: 1000,
  opacity: 0,
  origin: 'bottom'
})

ScrollReveal().reveal('.caja-skills', {
  distance: '200px',
  duration: 1000,
  origin: 'right',
  // opacity: 0,
  delay: 100
})

ScrollReveal().reveal('.proyecto', {
  distance: '200px',
  duration: 1000,
  opacity: 0,
  origin: 'bottom'
})

ScrollReveal().reveal('.caja-contact', {
  distance: '300px',
  duration: 1000,
  origin: 'left',
  delay: 100
})
