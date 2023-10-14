/*
Calculo de dano.

Programa para permitir inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então a quantidade de dano causado baseado nas seguintes regras:

-Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

-Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

-Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

let nomePersonagem1 = prompt("Insira o nome do primeiro personagem: ")
let poderAtaque = parseFloat(prompt("Insira a quantidade de poder do primeiro personagem: "))


let nomePersonagem2 = prompt("Insira o nome do segundo personagem: ")

let poderDefesa = parseFloat(prompt("Insira a quantidade de poder de defesa do segundo personagem: "))

let pontosVida = (prompt("Insira a quantidade de vida do segundo personagem: "))

let escudo = confirm("Possui escudo?")

let danoCausado = 0

if (poderAtaque > poderDefesa && escudo === false){
  danoCausado = poderDefesa - poderAtaque
}
else if (poderAtaque > poderDefesa && escudo === true){
  danoCausado = (poderDefesa - poderAtaque) / 2
}

pontosVida -= danoCausado