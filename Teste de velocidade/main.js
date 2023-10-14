/*
Teste de velocidade.

Programa para permitir inserir o nome e a velocidade de dois veículos e exibir na tela uma mensagem dizendo qual dos dois é mais rápido.
 
Ou que as velocidades são iguais.
*/

let primeiroNome = prompt("Nome do primeiro veículo: ")
let segundoNome = prompt("Nome do segundo veículo: ")

let primeiraVelocidade = parseFloat(prompt("Primeira velocidade do veículo: "))

let segundaVelocidade = parseFloat(prompt("Segunda velocidade do veículo: "))


if (primeiraVelocidade > segundaVelocidade){
  alert("Carro mais rápido: " + primeiroNome)
}
else if (primeiraVelocidade < segundaVelocidade){
  alert("Carro mais rápido: " + segundoNome)
}
else{
  alert("Velocidades iguais!")
}