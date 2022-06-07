const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('ExerciciosDoDia/simpson.json', 'utf8')
    const simpsons = JSON.parse(data)
    const array = simpsons.map(({ id, name }) => `${id} - ${name}`)
    array.forEach((array) => console.log(array))
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
}

main()
