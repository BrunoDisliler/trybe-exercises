const readLine = require('readline-sync')

const fibonacci = (quantity) => {
  let ultimo = 1
  let penultimo = 1

  for (let n = quantity; n >= 0; n -= 1) {
    if (penultimo) console.log(penultimo)
    const temp = ultimo
    ultimo += penultimo
    penultimo = temp
  }
  console.log(penultimo)
  return penultimo
}

const main = () => {
  const n = readLine.questionInt('Digite o valor de n: ')
  if (n <= 0) {
  console.log('Digite um número maior que 0!')
  return
  }
  console.log(`n: ${n}`)
  fibonacci(n - 2)
}

main()