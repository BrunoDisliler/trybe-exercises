const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs/promises')

const app = express()
app.use(bodyParser.json())

const getSimpsons = async () => {
  return fs.readFile('simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));
}

const setSimpsons = (newSimpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons()
    return res.status(200).json(simpsons)
  } catch (error) {
    return res.status(500).end()
  }
})

app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params
    const simpsons = await getSimpsons()
    const simpson = simpsons.find(({ id }) => id === req.params.id)
    if (!simpson) return res.status(404).json({ message: "Simpson not found" })

    return res.status(202).json(simpson)
  } catch(error) {
    res.status(500).end()
  }
}) 

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body
    const simpsons = getSimpsons()
    if (simpsons.some((character) => character.id === id)) {
      return res.status(409).json({ message: 'id already exists' })
    }
    simpsons.push({ id, name })

    await setSimpsons(simpsons)

    return res.status(204).end()
  } catch (error) {
    res.status(500).end()
  }
  
})

app.listen('3003', () => { console.log('Ouvindo na porta 3003') })