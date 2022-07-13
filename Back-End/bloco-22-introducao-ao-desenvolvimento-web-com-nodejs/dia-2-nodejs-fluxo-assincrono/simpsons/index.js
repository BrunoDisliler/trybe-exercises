const fs = require('fs').promises;
const simpsons = 'simpsons.json';

const readSimpsons = async () => {
  try {
     const simpsonsData = await fs.readFile(simpsons, 'utf-8')
     const newSimpsonsData = JSON.parse(simpsonsData)
     console.log(newSimpsonsData.map((e) => `${e.id} - ${e.name} `))

  } catch (error) {
    console.error(`Erro ao ler arquivo: ${error.message}`);
  }
}

const findSimpsonId = async (id) => {
  try {
    const simpsonsData = await fs.readFile(simpsons, 'utf-8')
    const newSimpsonsData = JSON.parse(simpsonsData)
    console.log(newSimpsonsData.find((simpson) => Number(simpson.id) === id));
  } catch (error) {
    console.error(`id não encontrado ${error.message}`);
  }
}

const removeSimpson = async () => {
  try {
    const simpsonsData = await fs.readFile(simpsons, 'utf-8')
    const newSimpsonsData = JSON.parse(simpsonsData)
    const removedSimpsons = newSimpsonsData.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    console.log(removedSimpsons);
  } catch (error) {
    console.error(error);
  }
}

const createSimpsons = async () => {
  try {
    const simpsonsData = await fs.readFile(simpsons, 'utf-8')
    const newSimpsonsData = JSON.parse(simpsonsData)
    const ids = [1, 2, 3, 4]
    const simpsonsFamily = newSimpsonsData.filter((simpson) => ids.includes(Number(simpson.id)))
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
  } catch (error) {
    console.error(error);
  }
}

readSimpsons();
findSimpsonId(1);
removeSimpson();
createSimpsons();