const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/ping', (_req, res) => {res.json( { message: 'pong' } )})

app.post('/hello', (req, res) => {
  const { name="Bruno" } = req.body
  return res.status(201).json( { message: `Hello, ${name}`} )
})

app.post('/greetings', (req, res) => {
  const { name="Bruno", age=29 } = req.body
  if (age > 17) {
    return res.status(200).json( {message: `Hello ${name}`} )
  } return res.status(401).json({ message: `Unauthorized` })
})



app.listen('3002', () => {
  console.log('Aplicação ouvindo na porta 3002')
})
