//Procurando Palíndromos
/*
Programa para idenficar se uma palavra é um palíndromo. Um palíndrom é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa vai iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo.

Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esqueda para direita e da direita para esquerda.
*/

//DICAS:
//1) Use o split para dividir a palavra em um array de caracteres.
//2) Use o reverse para inverter a ordem da palavra.
//3) Use o join para unir os caracteres do array de volta em uma única string.


while(true){ //Usei o while só para o programa ficar rodando!
  let palavra = prompt("Insira uma palavra para verificar se é um palíndromo: ")

  let palavraInvertida = palavra.split("").reverse().join("")

  if (palavra === palavraInvertida){
    alert("Essa palavra é um palíndromo!")
  } else{
    alert("Não é um palíndromo!")
  }
}
