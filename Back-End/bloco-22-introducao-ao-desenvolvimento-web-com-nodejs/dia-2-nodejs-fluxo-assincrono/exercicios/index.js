const testeAssincrono = async (p1, p2, p3) => {
  const resultado = await (p1 + p2) * p3;
  try {
    if (resultado > 50) {
      console.log(`Resultado: ${resultado}`);
    }
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
      console.error("Informe apenas números");
    }
    if (resultado < 50) {
      console.error("Erro: Valor muito baixo");
    }
  } catch (err) {
    console.error(err.message);
  }
}

const randomNum = Math.floor(Math.random() * 100 + 1);

testeAssincrono(10, 20, 30)



