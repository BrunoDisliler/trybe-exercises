const readLine = require('readline-sync')

const calcImc = () => {
  const peso = readLine.questionFloat('Digite seu peso: ') 
  const altura = readLine.question('Digite sua altura: ')
  const alturaMetros = altura / 100
  const alturaQuadrado = alturaMetros ** 2
  const imc = peso / (alturaQuadrado)

  console.log(`IMC: ${imc.toFixed(2)}kg/m2`) 

  if (imc < 18.5) {console.log('Situação: Abaixo do peso (magreza)')}
  if (imc > 18.5 && imc < 24.9) {console.log('Situação: Peso normal')}
  if (imc > 25 && imc < 29.9) {console.log('Situação: Acima do peso (sobrepeso)')}
  if (imc > 30 && imc < 34.9) {console.log('Situação: Obesidade grau I')}
  if (imc > 35 && imc < 39.9) {console.log('Situação: Obesidade grau II')}
  if (imc > 40) {console.log('Situação: Obesidade grau III e IV')}
}
calcImc()
