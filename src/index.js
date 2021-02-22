const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const connection = require('./models/connection');

app.use(bodyParser.json());

app.get('/recipes', async (req, res) => {
  const resposta = await connection().then((mealDB) => mealDB.collection('recipes').find().toArray())
  res.status(200).json(resposta)
})

app.listen(port, () => console.log(`aplicação rodando na porta ${port}!`))
