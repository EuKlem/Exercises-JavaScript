/*
Programa para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1 Matheus, 2 Marcos, etc).

O menu também deve permitir escolher entre as opções de "Novo paciente" para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente).

"Consultar paciente", que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado e sai.

O programa só deve ser encerrado ao escsolher a opção de "Sair", caso contrário deve voltar ao menu.
*/

let fila = []
let menu = 3

do {
  let pacientes = ""
  for (let indice = 0; indice < fila.length; indice++){
    pacientes += (indice + 1) + "° -" + fila[indice] + "\n"
  }

  menu = parseFloat(prompt("--- Fila de espera ---\nPacientes esperendo:\n" + pacientes + "\nOpções:\n[1] - Novo paciente\n[2] - Consultar paciente\n[3] - Sair"))

  switch (menu){
    case 1:
      let pacientesAdicionar = prompt("Insira seu nome para ser adicionado: ")
      fila.push(" " + pacientesAdicionar)
      break
    case 2:
      let pacientesRemover = fila
      let mostrar = pacientesRemover.shift()
      alert("Paciente removido: " + mostrar)
      break
    case 3:
      alert("Saindo...")
      break
    default:
      alert("Inválido!")
  }
} while (menu != 3)
