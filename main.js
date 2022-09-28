// fazendo a lógica com a criação do número aleatório

const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1 // número de tentativas

// adicionando funções ao botão
function handleClick(event) {
  event.preventDefault() //para que apareça permanentemente quando eu clicar e não fique as configurações automáticas do meu form

  const inputNumber = document.querySelector("#inputNumber")

  //add caminhos 
  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h2 span").innerText = xAttemps
  }
  xAttemps++
}


