//Robô da Tabuada
/*
Programa para calcular a tabuada de um determinado número (1 a 20).

O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicação de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois deve exibir esses resultados e finalizar.
*/

let numero = parseFloat(prompt("Digite um número: "))
let calcular = ""

for (let contador = 1; contador <= 10; contador ++){
  calcular += " -> " + numero + " * " + contador + " = " + (numero * contador) + "\n"
}

alert(calcular)

