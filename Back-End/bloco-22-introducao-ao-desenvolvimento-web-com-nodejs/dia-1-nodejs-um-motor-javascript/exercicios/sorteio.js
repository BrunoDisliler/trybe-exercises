const readLine = require('readline-sync');

function numeroAleatorio() {
  const num = parseInt(Math.random() * 10, 10);
  const numPick = readLine.question('Tente adivinhar um número entre 0 e 10: ');

  if (numPick == num) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${num}`);
  }

  const jogarDeNovo = readLine.question('Deseja jogar outra vez? Digite "S" ou "N": ');
  if (jogarDeNovo == 'S') {
    numeroAleatorio();
  } else {
    console.log('Tranquilo cara. Te vejo outro dia!');
  }
}

numeroAleatorio();

