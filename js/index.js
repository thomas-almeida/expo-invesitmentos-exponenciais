
var planosDiv = document.getElementById('planosDiv')
var homeDiv = document.getElementById('homeDiv')
var checkoutDiv = document.getElementById('checkoutDiv')
var pixDiv = document.getElementById('pixDiv')
var faqDiv = document.getElementById('faq-container')

var plan = {
  name: ['Crono Conservador - R$ 30,00/Mês', 'Crono Moderado - R$ 50,00/Mês', 'Crono Investidor - R$ 90,00/Mês', 'Crono Veterano - R$ 120,00/Mês'],
  month: ['Comece com R$ 30,00', 'Comece com R$ 50,00', 'Comece com R$ 90,00', 'Comece com R$ 120,00'],
  retake: ['Retire até R$ 700,00 todo o mês', 'Retire até R$ 1.100,00 todo o mês', 'Retire até R$ 2.000,00 todo o mes', 'Retire até R$ 2.500,00 todo o mês'],
  bonus: ['Saque no fim do mês', 'Saque fim do mês', 'Saque quando quiser', 'Saque quando quiser']
}

var nomePlano = document.getElementById('nomePlano')

var livalor = document.getElementById('start')
var lisaque = document.getElementById('retake')
var bonus = document.getElementById('bonus')

var valordoplano = document.createElement('b')
var saquedoplano = document.createElement('b')


function openPlanos() {

  if (planosDiv.style.display == 'flex' || planosDiv.style.display == 'block') {
    planosDiv.style.display = 'none'
    homeDiv.style.display = 'block'
  } else {
    planosDiv.style.display = 'block'
    homeDiv.style.display = 'none'
  }

}

function closePlanos() {
  planosDiv.style.display = 'none'
  homeDiv.style.display = 'block'
}

function openCheckout0() {

  planosDiv.style.display = 'none'
  checkoutDiv.style.display = 'block'

  var valordoplano = document.createElement('b')
  var saquedoplano = document.createElement('b')


  valordoplano.innerText = ' ' + plan.month[0]
  saquedoplano.innerText = ' ' + plan.retake[0]
  bonus.innerText = plan.bonus[0]

  nomePlano.innerText = plan.name[0]
  livalor.appendChild(valordoplano)
  lisaque.appendChild(saquedoplano)

}

function openCheckout1() {

  planosDiv.style.display = 'none'
  checkoutDiv.style.display = 'block'

  var valordoplano = document.createElement('b')
  var saquedoplano = document.createElement('b')

  valordoplano.innerText = ' ' + plan.month[1]
  saquedoplano.innerText = ' ' + plan.retake[1]
  bonus.innerText = plan.bonus[1]

  nomePlano.innerText = plan.name[1]
  livalor.appendChild(valordoplano)
  lisaque.appendChild(saquedoplano)

}

function openCheckout2() {

  planosDiv.style.display = 'none'
  checkoutDiv.style.display = 'block'

  var valordoplano = document.createElement('b')
  var saquedoplano = document.createElement('b')

  valordoplano.innerText = ' ' + plan.month[2]
  saquedoplano.innerText = ' ' + plan.retake[2]
  bonus.innerText = plan.bonus[2]

  nomePlano.innerText = plan.name[2]
  livalor.appendChild(valordoplano)
  lisaque.appendChild(saquedoplano)

}

function openCheckout3() {

  planosDiv.style.display = 'none'
  checkoutDiv.style.display = 'block'

  valordoplano.innerText = ' ' + plan.month[3]
  saquedoplano.innerText = ' ' + plan.retake[3]
  bonus.innerText = plan.bonus[3]

  nomePlano.innerText = plan.name[3]
  livalor.appendChild(valordoplano)
  lisaque.appendChild(saquedoplano)

}

function closeCheckout() {
  checkoutDiv.style.display = 'none'
  planosDiv.style.display = 'block'

  lisaque.replaceChildren()
  livalor.replaceChildren()
  bonus.replaceChildren()

}

function openPix() {
  pixDiv.style.display = 'block'
  checkoutDiv.style.display = 'none'

}

function closePix() {
  pixDiv.style.display = 'none'
  checkoutDiv.style.display = 'block'
}

function faq(){
  faqDiv.style.display = 'flex'
}

function closeFaq(){
  faqDiv.style.display = 'none'
}