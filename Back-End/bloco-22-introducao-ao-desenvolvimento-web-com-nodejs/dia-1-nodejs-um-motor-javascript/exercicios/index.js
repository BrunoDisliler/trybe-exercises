const readLine = require('readline-sync');

const scriptChosen = readLine.question('Qual dos scripts você quer executar: ');

switch (scriptChosen) {
  case '1':
    require('./imc');
    break;
  case '2':
    require('./sorteio');
    break;
  case '3':
    require('./velocidade');
    break;
  default:
    console.log('Opção Inválida!');
} 