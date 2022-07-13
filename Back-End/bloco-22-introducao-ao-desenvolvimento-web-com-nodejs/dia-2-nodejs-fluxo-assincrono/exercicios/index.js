const testeAssincrono = (p1, p2, p3) => {
  return new Promise((resolve, reject) => {
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
      return reject(new Error("Informe apenas números"));
    }
    const resultado = (p1 + p2) * p3;
    if (resultado < 50) {
      return reject(new Error("Valor muito baixo"));
    }
    if (resultado > 50) {
      resolve(resultado)
    };
  });
}

const randomNum = Math.floor(Math.random() * 100 + 1);

testeAssincrono(randomNum, randomNum, randomNum)
  .then((resolve) => console.log(`Sucesso: ${resolve}`))
  .catch((error) => console.log(`Erro: ${error.message}`));