/*
*Cadastro de recrutas*

Programa para permitir salvar informações de um recruta. As informações  a serem salvas são:

-Primeiro nome
-Sobrenome
-Campo de estudo
-Ano de nascimento

Depois o programa vai exibir  o nome completo do recruta, seu campo estudo e sua idade(apenas baseada no ano de nascimento).
*/

let primeiroNome;
let sobrenome;
let campoDeEstudo;
let anoNascimento;
let calcular;

primeiroNome = prompt("Insira seu nome: ");

sobrenome = prompt("Insira seu sobrenome: ");

campoDeEstudo = prompt("Qual seu campo de estudo: ");

anoNascimento = prompt("Insira seu ano de nascimento: ");

calcular = 2023 - anoNascimento;

alert(
  "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    calcular
);
