// variáveis 
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
// fazendo a lógica com a criação do número aleatório
var randomNumber = Math.round(Math.random() * 10)
xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleKeypress)



//funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão do formulário ou não envie o formulário  - configurações automáticas do button dentro do meu form (que recarrega a página para enviar algum formulário)
  
  const inputNumber = document.querySelector('#inputNumber')

  //add caminhos
  if (Number(inputNumber.value) == randomNumber) {
   toggleScreen()
    screen2.querySelector('span').innerText = xAttemps
  }

  inputNumber.value = "" // limpa o valor que estiver no input (caso eu erre)
  xAttemps++
}

function handleKeypress(e){
  if ( e.key == "Enter" && screen1.classList.contains("hide")
  //se na minha screen1 conter (contains) na lista de classes dele o hide
  ) {
     handleResetClick()
  }
 }

function handleResetClick() {
  toggleScreen()
  xAttemps = 1
  randomNumber = Math.round(Math.random() * 10)
  // toda vez que eu resetar a minha aplicação vai ser gerado um novo número aleatório 
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
