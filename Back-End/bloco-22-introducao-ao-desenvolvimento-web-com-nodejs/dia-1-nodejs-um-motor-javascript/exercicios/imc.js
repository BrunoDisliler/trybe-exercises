const readLine = require('readline-sync')

console.log('Calculadora de IMC')

const w = readLine.question('Digite seu peso: ')
const h = readLine.question('Digite sua altura: ')

function imc(peso, altura) {
  console.log((peso / altura) * 2);
}
  

console.log(`Seu IMC baseado em sua altura de ${h} e seu peso de ${w}, é de: ${imc()}`);