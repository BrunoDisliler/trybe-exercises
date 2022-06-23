const fs = require('fs').promises;
const simpson = '/home/bdisliler/Projetos/Trybe/trybe-exercicios/Back-End/bloco-22-introducao-ao-desenvolvimento-web-com-nodejs/dia-2-nodejs-fluxo-assincrono/ExerciciosDoDia/simpson.json'

async function readFiles() {
  try {
    const data = await fs.readFile(simpson, 'utf8');
    const dataArray = JSON.parse(data);
    let names = dataArray.map(({id, name}) => `${id} - ${name}`)
    // Usado forEach para retirar do array e mostrar apenas os dados
    names.forEach((names) => console.log(names));
  } catch (err) {
    console.log(err.message);
  }
}

readFiles();