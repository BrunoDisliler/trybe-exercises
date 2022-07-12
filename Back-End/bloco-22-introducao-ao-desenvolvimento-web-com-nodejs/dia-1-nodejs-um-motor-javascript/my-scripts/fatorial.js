const readLine = require('readline-sync')

const fatorial = () => {
  const n = readLine.questionInt('Digite um número inteiro positivo: ')
  if (n < 0) {
    console.log('Digite um número maior que zero\n')
    fatorial()
  } 
  let calcFatorial = n
  for (let i = 1; i < n; i++) {
    calcFatorial *= i
  }
  console.log(`O fatorial de ${n} é ${calcFatorial}`);
}

fatorial()
