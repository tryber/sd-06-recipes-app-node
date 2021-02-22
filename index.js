const express = require('express')
const bodyParser = require('body-parser');
const Recipes = require('./models/Recipes')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/recipes', async (req, res) => {
  const recipes = await Recipes.getAll();

  return res.status(200).json(recipes);
})

app.get('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const recipes = await Recipes.findById(id);

  if (!recipes) return res.status(404).json({ message: "Receita não encontrada"});

  return res.status(200).json(recipes);
})

app.post('/recipes', async (req, res) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags} = req.body;

  let message = '';

  if (!strMeal) {
    message = 'O campo "strMeal" é obrigatório';
    return res.status(400).send({ message });
  }
  if (!strCategory) {
  message = 'O campo "strCategory" é obrigatório';
  return res.status(400).send({ message });
  }
  if (!strArea) {
    message = 'O campo "strArea" é obrigatório';
    return res.status(400).send({ message });
  }
  if (!strInstructions) {
    message = 'O campo "strInstructions" é obrigatório';
    return res.status(400).send({ message });
  }
  if (!strTags) {
    message = 'O campo "strTags" é obrigatório';
    return res.status(400).send({ message });
  }
  if (strMeal.length < 3) {
    message = 'O campo "strMeal" deve ter pelo menos 3 caracteres'
    return res.status(400).json({ message })
  }
  if (strCategory.length < 3) {
    message = 'O campo "strCategory" deve ter pelo menos 3 caracteres'
    return res.status(400).json({ message })
  }
  if (strArea.length < 3) {
    message = 'O campo "strArea" deve ter pelo menos 3 caracteres'
    return res.status(400).json({ message })
  }
  if (strInstructions.split(' ').length < 10) {
    message = 'O campo "strInstructions" deve ter pelo menos 10 palavras'
    return res.status(400).json({ message })
  }
  if (strTags.split(',').length < 1) {
    message = 'O campo \"strTags\" deve ter pelo menos 1 valor'
    return res.status(400).json({ message })
  }

  const recipes = await Recipes.create(strMeal, strCategory, strArea, strInstructions, strTags);

  return res.status(200).json(recipes);
})

app.listen(port, () => console.log(`Example app listening on port port!`))