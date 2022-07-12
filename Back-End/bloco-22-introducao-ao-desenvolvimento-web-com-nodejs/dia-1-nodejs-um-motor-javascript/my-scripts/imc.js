const readLine = require('readline-sync')

const calcImc = () => {
  const peso = readLine.questionFloat('Digite seu peso: ') 
  const altura = readLine.question('Digite sua altura: ')
  const alturaMetros = altura / 100
  const alturaQuadrado = alturaMetros ** 2
  const imc = peso / (alturaQuadrado)

  console.log(`IMC: ${imc.toFixed(2)}kg/m2`) 
}

calcImc();