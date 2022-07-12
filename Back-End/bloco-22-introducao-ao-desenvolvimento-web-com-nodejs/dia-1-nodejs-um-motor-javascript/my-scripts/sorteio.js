const readLine = require('readline-sync')

const sorteio = () => {
  const numAleatorio = Math.floor(Math.random() * 10 + 1)
  const numEscolhido = readLine.questionInt(`${numAleatorio}Digite um número entre 0 e 10: `)
  if (numEscolhido === numAleatorio) {
    console.log('Parabéns, número correto')
    return
  } console.log(`Opa, não foi dessa vez. O número era o ${numAleatorio}`)
  const jogarNovamente = readLine.question('Você deseja jogar novamente? ')
  if (jogarNovamente === 's' || jogarNovamente === 'sim') {
    sorteio()
  } console.log('Obrigado')
    return
}

sorteio();
