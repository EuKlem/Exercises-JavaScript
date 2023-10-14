/*
Programa para calcular uma área de diferentes fomars geométricas.

O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

-área do triângulo: base * altura / 2
-área do retângulo: base * altura
-área do quadrado: lado²
-área do trapézio: (base maior + base menor) * altura / 2
-área do círculo; pi * raio² (considere pi = 3,14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de "Sair" e enquanto eela não for escolhida deverá voltar ao menu.
*/

function triangulo(base, altura){
  return base * altura / 2
}

function retangulo(base, altura){
  return base * altura
}

function quadrado(lado){
  return retangulo(lado, lado)
}

function trapezio(baseMaior, baseMenor, altura){
  return (baseMaior + baseMenor) * altura / 2
}

function circulo( raio){
  return 3.14 * raio * raio
}

function exibirMenu(){
  return parseFloat(prompt("--- Calculadora Geométrica ---\n\nOpções:\n[1] - Triângulo\n[2] - Retângulo\n[3] - Quadrado\n[4] - Trapézio\n[5] - Círculo\n[6] - Sair"))
}

function excutar(){
  let menu = 6

do {
  menu = exibirMenu()

  switch (menu){
    case 1:
      let valorTriangulo1 = parseFloat(prompt("Insira o primeiro valor: "))
      let valorTriangulo2 = parseFloat(prompt("Insira o segundo valor: "))
      alert(triangulo(valorTriangulo1,valorTriangulo2))
      break
    case 2:
      let valorRetangulo1 = parseFloat(prompt("Insira o primeiro valor: "))
      let valorRetangulo2 = parseFloat(prompt("Insira o segundo valor: "))
      alert(retangulo(valorRetangulo1,valorRetangulo2))
      break
    case 3:
      let valorQuadrado = parseFloat(prompt("Insira o primeiro valor: "))
      alert(quadrado(valorQuadrado))
      break
    case 4:
      let valorTrapezio1 = parseFloat(prompt("Insira o primeiro valor para base maior: "))
      let valorTrapezio2 = parseFloat(prompt("Insira o segundo valor para base menor: "))
      let valorTrapezio3 = parseFloat(prompt("Insira o terceiro valor para a altura: "))
      alert(trapezio(valorTrapezio1,valorTrapezio2,valorTrapezio3))
      break
    case 5:
      let valorCirculo = parseFloat(prompt("Insira o valor do raio: "))
      alert(circulo(valorCirculo))
      break
    case 6:
      alert("Saindo...")
      break
    default:
      alert("Inválido!")
  }
} while(menu != 6)
}

excutar()