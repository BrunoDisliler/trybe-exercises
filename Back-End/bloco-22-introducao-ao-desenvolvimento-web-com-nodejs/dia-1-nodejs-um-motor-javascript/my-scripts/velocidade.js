const readLine = require('readline-sync')

const calcVelocidade = () => {
  const distancia = readLine.questionInt('Digite a distância em metros: ')
  const tempo = readLine.questionInt('Digite o tempo em segundos: ')
  const media = distancia / tempo
  console.log(`A velocidade média do veículo é de ${media.toFixed(0)}Km/h`);
}

calcVelocidade()
