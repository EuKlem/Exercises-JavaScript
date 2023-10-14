//Programa para funcionar como um cadastro de imóveis.
/*
1)Deve ter um menu que sempre é exibido até que o usuário escolha sair.

2)O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.

3)O menu deve ter a opção de salvar um imóvel.

4)Para salvar um novo imóvel o programa deve pedir as seguintes informações:

-Nome do proprietário.
-Quantidade de quartos.
-Quantidade de banheiros.
-Se possui garagem.

5) O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let menu = 3
let imovelExibir = []

do {
  menu = parseFloat(prompt("--- Cadastro de Imóveis ---\n\nQuantidade de imóveis cadastrados: " + imovelExibir.length + "\n\nOpções: \n[1] - Salvar imóvel\n[2] - Mostrar imóvel\n[3] - Sair"))

  switch (menu){
    case 1:
      let pessoa = {}
      pessoa.nome = prompt("Insira seu nome: ")
      pessoa.quantidadeQuartos = parseFloat(prompt("Quatidade de quartos: "))
      pessoa.quantidadeBanheiros = parseFloat(prompt("Quantidade de banheiros: "))
      pessoa.garagem = prompt("Digite [sim/não] se possui garagem!")

      const confirmacao = confirm("Salvar este imóvel?\n" + "\nProprietário: " + pessoa.nome + "\nQuantidade de quartos: " + pessoa.quantidadeQuartos + "\nQuantidade de banheiros: " + pessoa.quantidadeBanheiros  + "\nPossui garagem: " +pessoa.garagem)

      if (confirmacao){
        imovelExibir.push(pessoa)
      }
      break
    case 2:
      for(let i = 0; i < imovelExibir.length; i++){
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imovelExibir[i].nome +
          "\nQuartos " + imovelExibir[i].quantidadeQuartos + "\nBanheiros: " + imovelExibir[i].quantidadeBanheiros + "\nGaragem: " + imovelExibir[i].garagem
          )
      }
      break
    case 3:
      alert("Saindo...")
      break
    default:
      alert("Inválido!")
      break
  }

} while (menu !== 3)