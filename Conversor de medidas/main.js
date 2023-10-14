/*
Programa para converter medidas.

O programa deve pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

-Milímetros(mm)
-Centímetros(cm)
-Decímetros(dm)
-Decâmetros(dam)
-Hectômetro(hm)
-Quilômetro(km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis(Usar break e o default para isso)
*/

let valorMetros = parseFloat(prompt("Insira um valor em metros: "))

let menu = prompt("Opções:\n[mm] para Milímetros\n[cm] para Centímetros\n[dm] para Decímetros\n[dam] para Decâmetros\n[hm] para Hectômetros\n[km] para Quilômetros")

switch (menu){
  case "mm":
    let converter1 = valorMetros * 1000
    alert("Valor digitado convertido para milímetros: " + converter1)
    break
  case "cm":
    let converter2 = valorMetros * 100
    alert("Valor digitado convertido para centímetros: " + converter2)
    break
  case "dm":
    let converter3 = valorMetros * 10
    alert("Valor digitado convertido para decímetros: " + converter3)
    break
  case "dam":
    let converter4 = valorMetros / 10
    alert("Valor digitado convertido para decâmetros: " + converter4)
    break
  case "hm":
    let converter5 = valorMetros / 100
    alert("Valor digitado convertido para hectômetros: " + converter5)
    break
  case "km":
    let converter6 = valorMetros / 1000
    alert("Valor digitado convertido para quilômetros: " + converter6)
    break
  default:
    alert("Opção inválida!")
}