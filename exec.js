var p_name = document.querySelector('#p_name')
var video = document.querySelector('#mp4')
video.volume = 0.3

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ddmm = `${dia}/${mes + 1}`

const blast = new Audio('sounds/blast.mp3')
const cannon = new Audio('sounds/cannon.mp3')
const target = new Audio('sounds/38.mp3')
const vader = new Audio('sounds/vader.mp3')
const destroyed = new Audio('sounds/40.mp3')

var winner_user = {
  p_name,
  ddmm
}

var lives = 3
var action = 0

function reprodução() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function iniciar() {
  if (lives == 0) {
    lives = 3
    vidas.innerHTML = `${lives}`
  }
  console.log(p_name.value)
  action = Math.floor(4 * Math.random())
  switch (action) {
    case 0:
      blast.volume = 0.3
      blast.play()
      window.imagem.style.backgroundColor = 'white'
      ação.innerHTML = 'tie-fighter atacando.'
      window.imagem.style.backgroundImage = 'url(imagens/tie-fighter.png)'
      break

    case 1:
      cannon.volume = 0.3
      cannon.play()
      window.imagem.style.backgroundColor = 'white'
      ação.innerHTML = 'canhão de plasma atacando.'
      window.imagem.style.backgroundImage = 'url(imagens/plasma_cannon.jpg)'
      break

    case 2:
      window.imagem.style.backgroundColor = 'white'
      ação.innerHTML = 'corredor livre.'
      window.imagem.style.backgroundImage = 'url(imagens/hall.jpg)'
      break

    default:
      target.volume = 0.3
      target.play()
      window.imagem.style.backgroundColor = 'white'
      ação.innerHTML = 'ponto fraco à frente.'
      window.imagem.style.backgroundImage = 'url(imagens/weak_spot.jpg)'
      break
  }
}

function errou() {
  lives--
  vidas.innerHTML = `${lives}`
  if (lives == 0) {
    vader.play()
    ação.innerHTML = 'game over.<br><br> insira seu nome para jogar novamente.'
    window.imagem.style.backgroundImage = 'url(imagens/vader.jpg)'
    return
  } else {
    iniciar()
  }
}

function ganhou() {
  destroyed.play()
  ação.innerHTML =
    'parabéns, você venceu!<br><br> insira seu nome para jogar novamente.'
  window.imagem.style.backgroundImage = 'url(imagens/won.jpg)'
  document.querySelector(
    '#vencedores>p'
  ).innerHTML += `${ddmm} ... ${p_name.value}<br>`
}

function atirar() {
  switch (action) {
    case 1:
      iniciar()
      break

    case 3:
      ganhou()
      break

    default:
      errou()
      break
  }
}
function desviar() {
  if (action == 0) {
    iniciar()
  } else {
    errou()
  }
}
function acelerar() {
  if (action == 2) {
    iniciar()
  } else {
    errou()
  }
}
