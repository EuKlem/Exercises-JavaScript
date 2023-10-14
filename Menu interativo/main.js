//Menu interativo.

//Programa para simular um menu interativo com 5 opções diferentes.

//o programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a ultíma opção deve ser a opção de "Encerrar".

//Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções.

//Isso deve continuar acontecendo até que o usuário escolha a opção "Encerrar". Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.


let menu = 5 // <-- Correção de erro, antes de criar o menu com o do while, crie a variável e o valor que ela vai receber para depois você usar o: while (menu != 5)

do {
  menu = parseFloat(prompt("----Menu interativo----\n\n[1] opção\n[2] opção\n[3] opção\n[4] opção\n[5] Encerrar"))
  switch (menu){
    case 1:
      alert("Opção escolhida: [1]")
      break
    case 2:
      alert("Opção escolhida: [2]")
      break
    case 3:
      alert("Opção escolhida: [3]")
      break
    case 4:
      alert("Opção escolhida: [4]")
      break
    case 5:
      alert("Opção escolhida: [5] - Sistema desligando")
      break
  }
} while (menu != 5)