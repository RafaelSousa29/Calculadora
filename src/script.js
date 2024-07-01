function Calculadora (num1, num2, operacao){
  let num1 = parseint(num1)
  let num2 = parseint(num2)
  let resultado

  switch (operador){
    case '+':
      resultado = num1 + num2
      break;
      case '-':
        resultado = num1 - num2
        break;
        case '/':
          resultado = num1 / num2
          break; 
          case '*': 
          resultado = num1 * num2
          case 'e':
            let contador = 0
            resultado = num1 * num1
            while (contador < num2){
              resultado = resultado * num1
              contador++
            }
            break;
  }

  if ( resultado == undefined || resultado > 1000000){
    resultado = "ERRO"
  }
}

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}