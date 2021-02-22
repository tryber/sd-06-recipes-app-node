const express = require('express');
const { getAll } = require('./models/meal');

const app = express();

app.get('/', async (_req, res) => {
  const recipes = await getAll();
  res.status(200).json(recipes)
});

app.listen(3000, () => console.log('Grupo 14 é o maior!'))
