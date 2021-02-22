const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const connection = require('./models/connection');

app.use(bodyParser.json());

app.get('/recipes', async (req, res) => {
    const resposta = await connection()
      .then((mealDB) => mealDB.collection('recipes').find().toArray())
    res.status(200).json(resposta)   
})

app.get('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const resposta = await connection()
    .then((mealDB) => mealDB.collection('recipes').findOne(ObjectId(id)));
  if (!resposta) res.status(404).json({ message: 'Receita não encontrada' })
  res.status(200).json(resposta);
})

app.listen(port, () => console.log(`aplicação rodando na porta ${port}!`))

