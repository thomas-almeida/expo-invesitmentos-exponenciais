var planosDiv = document.getElementById('planosDiv')
var homeDiv = document.getElementById('homeDiv')
var checkoutDiv = document.getElementById('checkoutDiv')
var pixDiv = document.getElementById('pixDiv')
var faqDiv = document.getElementById('faq-container')
var loginDiv = document.getElementById('loginDiv')
var clientDiv = document.getElementById('clienteDiv')

var navbar = document.getElementById('navbar')
var profile_navbar = document.getElementById('profile-nav')

var input_username = document.getElementById('username_plataforma')
var input_password = document.getElementById('password_plataforma')

var loginMsg = document.getElementById('login-msg')

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

function faq() {
  faqDiv.style.display = 'flex'
}

function closeFaq() {
  faqDiv.style.display = 'none'
}


function openLogin() {
  loginDiv.style.display = 'block'
  homeDiv.style.display = 'none'

}

function closeLogin() {
  loginDiv.style.display = 'none'
  homeDiv.style.display = 'block'

}

function openClient() {

  var usernameTxt = input_username.value
  var passwordTxt = input_password.value

  fetch('./dados/clientes.json')
    .then(response => response.json())
    .then(data => {

      for (var i = 0; i < data.length; i++) {
        if (usernameTxt == data[i].username && passwordTxt == data[i].password) {
          console.log(data[i].username)
          console.log(data[i].password)

          //abrir login após validação
          clientDiv.style.display = 'block'
          loginDiv.style.display = 'none'

          navbar.style.display = 'none'
          profile_navbar.style.display = 'flex'

          //client div open
          var clientNome = document.getElementById('clientNome')
          var clientPlano = document.getElementById('clientPlano')
          var clientMensalidade = document.getElementById('clientMensalidade')
          var clientSince = document.getElementById('clientSince')
          var clientVenc = document.getElementById('clientVenc')
          var clientSaldo = document.getElementById('clientSaldo')
          var clientImg = document.getElementById('clientImg')

          clientNome.innerText = data[i].nome
          clientPlano.innerText = data[i].plano
          clientMensalidade.innerText = data[i].mensalidade
          clientSince.innerText = data[i].since
          clientVenc.innerText = data[i].venc
          clientSaldo.innerText = data[i].saldo
          clientImg.src = data[i].img


        } else {
          loginMsg.innerText = "Usuário Não encontrado!"
          loginMsg.style.color = 'crimson'
        }
      }

    }).catch(erro => {
      console.error(erro);
    })

}

function closeClient() {
  
  loginMsg.innerText = "Entre com nome de usuário e senha"
  loginMsg.style.color = '#6703e9'

  clientDiv.style.display = 'none'
  loginDiv.style.display = 'block'

  navbar.style.display = 'flex'
  profile_navbar.style.display = 'none'
  
}

var pointer0 = 0
var pointer1 = 0
var pointer2 = 0
var pointer3 = 0

var accordion_0 = document.getElementById('acc-info-0')
var accordion_1 = document.getElementById('acc-info-1')
var accordion_2 = document.getElementById('acc-info-2')
var accordion_3 = document.getElementById('acc-info-3')

var accimg_0 = document.getElementById('acc-img-0')
var accimg_1 = document.getElementById('acc-img-1')
var accimg_2 = document.getElementById('acc-img-2')
var accimg_3 = document.getElementById('acc-img-3')


function accordion0() {

  accordion_1.style.display = 'none'
  accordion_2.style.display = 'none'

  if (pointer0 == 0) {
    accordion_0.style.display = 'block'
    pointer0 = 1
    accimg_0.style.transform = 'rotate(180deg)'
  } else {
    accordion_0.style.display = 'none'
    pointer0 = 0
    accimg_0.style.transform = 'rotate(0deg)'
  }


}

function accordion1() {

  accordion_0.style.display = 'none'
  accordion_2.style.display = 'none'

  if (pointer1 == 0) {
    accordion_1.style.display = 'block'
    pointer1 = 1
    accimg_1.style.transform = 'rotate(180deg)'
  } else {
    accordion_1.style.display = 'none'
    pointer1 = 0
    accimg_1.style.transform = 'rotate(0deg)'
  }

}

function accordion2() {

  accordion_1.style.display = 'none'
  accordion_0.style.display = 'none'

  if (pointer2 == 0) {
    accordion_2.style.display = 'block'
    pointer2 = 1
    accimg_2.style.transform = 'rotate(180deg)'
  } else {
    accordion_2.style.display = 'none'
    pointer2 = 0
    accimg_2.style.transform = 'rotate(0deg)'
  }

}

function accordion3() {

  accordion_1.style.display = 'none'
  accordion_0.style.display = 'none'
  accordion_2.style.display = 'none'

  if (pointer3 == 0) {
    accordion_3.style.display = 'block'
    pointer3 = 1
    accimg_3.style.transform = 'rotate(180deg)'
  } else {
    accordion_3.style.display = 'none'
    pointer3 = 0
    accimg_3.style.transform = 'rotate(0deg)'
  }

}