let numeroSecreto = Math.floor(Math.random() * 1001);
let totalTentativas = 0;

const chute = document.getElementById("inputValor");
const btn1 = document.getElementById("btn1");
const display = document.getElementById("display1");

function displayJogada() {
  let chuteValor = parseInt(chute.value);

  if (isNaN(chuteValor) || chuteValor <= 0 || chuteValor > 1000) {
    alert("Insira um número válido entre 1 e 1000");
    return;
  }

  totalTentativas++;

  if (chuteValor === numeroSecreto) {
    display.innerHTML = `Você escolheu o número ${chuteValor} <br> Você acertou! <br> 
    E só precisou de ${totalTentativas} tentativas!`;
  } else {
    let mensagem = `Você escolheu o número ${chuteValor}. <br> Você errou! 
    <br>Essa foi sua tentativa de número ${totalTentativas}!`;

    if (chuteValor > numeroSecreto) {
      mensagem += "<br> Insira um número menor";
    } else {
      mensagem += "<br> Insira um número maior";
    }

    display.innerHTML = mensagem;
  }
}

btn1.addEventListener("click", displayJogada);
