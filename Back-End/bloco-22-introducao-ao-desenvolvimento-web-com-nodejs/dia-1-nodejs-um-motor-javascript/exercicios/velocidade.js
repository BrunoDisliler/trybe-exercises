const readLine = require('readline-sync');

const tempo = readLine.questionInt('Qual o tempo em segundos: ');
const distancia = readLine.questionInt('Qual a distância em metros: ')
const vel_media = distancia / tempo;

console.log(`A Velocidade média é de ${vel_media.toFixed(2)}/H`);