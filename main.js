const pantallaDeCarga = document.getElementById('pantalla-de-carga')
const body = document.getElementById('body')

///////////////////////////////////////////////////
window.addEventListener('load', () => {
  pantallaDeCarga.style.display = 'none'
  body.classList.remove('over-hidden')
})
