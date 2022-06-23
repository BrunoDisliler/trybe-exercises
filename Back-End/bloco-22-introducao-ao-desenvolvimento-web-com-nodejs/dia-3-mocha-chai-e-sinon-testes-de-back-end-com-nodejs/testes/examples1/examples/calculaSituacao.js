function calculaSituacao(media) {
  if (media > 7 || media === 7) {
    return 'aprovacao';
  }

  return 'reprovacao';
}

module.exports = calculaSituacao;

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovacao') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}