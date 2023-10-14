/*
Programa para pedir o nome de um turista e então perguntar se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma varíavel, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

*Para armazenar varios itens em uma variável e depois motra-los: 
1)Crie uma variável vazia, ex let cidades = ""
2)Dentro do "while" crie outra variável, porém diferente da primeira criada, ex let cidade.
3)Depois pegue a variável cidades e faça a concatenação, ex cidades += " - " + cidade + "\n"
*/

let nomeTurista = prompt("Olá turista, insira o seu nome: ")

let visitarCidade = prompt("Você já visito alguma cidade?\nDigite:\n[s] para sim\n[n] para não")

let quantasCidades = 0

let cidades = ""

while (visitarCidade === "s"){
  let cidade = prompt("Insira o nome da cidade que visitou: ")

  visitarCidade = prompt("Você já visito outra cidade?\nDigite:\n[s] para sim\n[n] para não")

  cidades += "\n" + " - " + cidade + "\n"

  quantasCidades++
  if (visitarCidade === "n"){
    break
  }
}

alert("Nome: " + nomeTurista + "\nCidades visitadas: " + cidades + "\nQuantidade de cidades visitadas: " + quantasCidades )