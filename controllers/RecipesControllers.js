const { Router } = require('express');

const RecipesService = require('../services/RecipesService');

const recipesRoute = Router();

recipesRoute.get('/', async (_req, res) => {
  const recipes = await RecipesService.getAll();
  res.status(200).json(recipes);
});
recipesRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await RecipesService.findById(id);
  
  res.status(200).json(recipe);
});
recipesRoute.post('/', async (req, res) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;
  const recipe = await RecipesService.createRecipe(strMeal, strCategory, strArea, strInstructions, strTags);
  if(!recipe) return res.status(400).json();
  res.status(200).json(recipe);
});
// recipesRoute.put('/:id', async (req, res) => {});
recipesRoute.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await RecipesService.deleteById(id);
  res.status(200).json(recipe);
});

module.exports = recipesRoute;
