/*
Programa para simular um baralho de cartas.

O programa deve iniciar mostrando na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de:

-Adicionar uma carta
-Puxar uma carta
-Sair

Ao escolher "Adicionar uma carta", o programa deve perguntar o nome da carta e adiciona-la no topo do baralho. 
Ao escolher "Puxar uma carta", o programa deve retirar a carta do  topo do baralho e mostrar na tela o nome da carta puxada.

O programa só deve ser encerrado ao escolher a opção de "Sair", caso contrário deve voltar ao menu.
*/

let cartas = []
let menu = 3

do {
  menu = parseFloat(prompt("--- Pilha de cartas ---\n\nCartas do baralho: " + cartas.length + "\n\nOpções:\n[1] - Adicionar uma carta\n[2] - Puxar uma carta\n[3] - Sair"))

  switch (menu) {
    case 1:
      let adicionarCarta = prompt("Insira o nome da carta para adiciona-la!")
      cartas.unshift(" " + adicionarCarta)
      break
    case 2:
      let puxarCarta = cartas.shift()
      alert("Carta puxada: " + puxarCarta)
      break
    case 3:
      alert("Saindo...")
      break
    default:
      alert("Código inválido!")
  }

}while (menu != 3)