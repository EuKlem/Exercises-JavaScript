/*
*Calculadora de 4 operações*

Programa para permitir inserir dois valores numéricos e então calcular o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela

Função para converter uma string para um número: parseFloat()
*/

let valor1;
let valor2;
let soma;
let divisao;
let subtracao;
let multiplicacao;

valor1 = prompt("Insira um valor!");
valor2 = prompt("Insira outro valor!");
valorFloat1 = parseFloat(valor1);
valorFloat2 = parseFloat(valor2);

soma = valorFloat1 + valorFloat2;

subtracao = valorFloat1 - valorFloat2;

multiplicacao = valorFloat1 * valorFloat2;

divisao = valorFloat1 / valorFloat2;

alert(
  "Calculadora" +
    "\n\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
