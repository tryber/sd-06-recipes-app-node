const express = require('express');
const app = express();
const port = 3000

app.use(express.json())

const recipes = require('./database/recipes.json')

const getAll = async (req, res) => {
  return res.status(200).json(recipes);
}

app.get('/', )

app.get('/recipes', getAll);

app.listen(port, () => console.log(`Example app listening on port port!`))