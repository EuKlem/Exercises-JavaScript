//Controle financeiro

//Programa deve começar perguntado pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair.

//Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções.

//A opção de remover dinheiro deve fazer o meso, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let saldo = parseFloat(prompt("Dinheiro incial: "))
let menu = 3

do {
  menu = parseFloat(prompt("----Controle financeiro----\nQuantidade de dinheiro disponível: " + saldo + "\n[1] Adicionar Dinheiro\n[2] Remover Dinheiro\n[3] Sair"))

  switch (menu){
    case 1:
      let quantidadeAdicionar = parseFloat(prompt("Quantidade a ser adicionada: "))
      saldo += quantidadeAdicionar
      break
    case 2:
      let quantidadeRemover = parseFloat(prompt("Quantidade para remover: "))
      saldo -= quantidadeRemover
      break
    case 3:
      alert("Programa encerrando!")
      break
    default:
      alert("Opção inválida!")
  }
} while (menu != 3)
