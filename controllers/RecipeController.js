const express = require('express');
const MealModel = require('../models/MealModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await MealModel.getAll();

  return res.status(200).json(recipes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await MealModel.findById(id);

  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada' });

  return res.status(200).json(recipe);
});

router.post('/', async (req, res) => {
  const newRecipe = req.body;

  if (!newRecipe.strMeal) return res.status(400).json({ message: 'O campo "strMeal" é obrigatório' });
  if (newRecipe.strMeal && newRecipe.strMeal.length <= 3) return res.status(400).json({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });

  if (!newRecipe.strCategory) return res.status(400).json({ message: 'O campo "strCategory" é obrigatório' });
  if (newRecipe.strCategory && newRecipe.strCategory.length <= 3) return res.status(400).json({ message: 'O campo "strCategory" deve ter pelo menos 3 caracteres' });

  if (!newRecipe.strArea) return res.status(400).json({ message: 'O campo "strArea" é obrigatório' });
  if (newRecipe.strArea && newRecipe.strArea.length <= 3) return res.status(400).json({ message: 'O campo "strArea" deve ter pelo menos 3 caracteres' });

  if (!newRecipe.strInstructions) return res.status(400).json({ message: 'O campo "strInstructions" é obrigatório' });
  if (newRecipe.strInstructions && newRecipe.strInstructions.length <= 10) return res.status(400).json({ message: 'O campo "strInstructions" deve ter pelo menos 10 palavras' });

  if (!newRecipe.strTags) return res.status(400).json({ message: 'O campo "strTags" é obrigatório' });
  if (newRecipe.strTags && newRecipe.strTags.split(',').length < 1) return res.status(400).json({ message: 'O campo "strTags" deve ter pelo menos 1 valor' });

  const newId = await MealModel.insertRecipe(newRecipe);

  return res.status(201).json({ newId });
});

module.exports = router;
