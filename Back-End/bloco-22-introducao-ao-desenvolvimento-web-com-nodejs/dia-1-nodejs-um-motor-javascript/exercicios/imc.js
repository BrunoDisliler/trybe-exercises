const readLine = require('readline-sync')

console.log('Calculadora de IMC')

function calculaImc(peso, altura) {
  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;
  const imc = (peso / alturaAoQuadrado);
  return imc
}

function main() {
  const w = readLine.questionFloat('Digite seu peso (em Kg): ')
  const h = readLine.questionInt('Digite sua altura (em Cm): ')
  const imc = calculaImc(w, h)
  console.log(`Seu IMC baseado em sua altura de ${h} e seu peso de ${w}, é de: ${imc}`);
}

main();