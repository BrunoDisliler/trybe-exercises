// Exercício com Then e Catch

function Calc(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      reject(new Error('Informe apenas números'));
      return;
    }
    const math = (num1 + num2) * num3;
    if (math < 50) {
      reject(new Error('Valor muito baixo'))
    } resolve(math);

  })
  return promise;
}

const random = Math.floor(Math.random() * 100 + 1);

Calc(random, random, random)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));