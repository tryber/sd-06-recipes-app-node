const { Router } = require('express');
const RecipeService = require('../service/RecipeService');

const RecipeController = new Router();

RecipeController.get('/', async (req, res) => {
  res.status(200).json(await RecipeService.getAll());
});

RecipeController.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await RecipeService.findById(id)

  if (!recipe) res.status(404).json({ message: 'Receita não encontrada' });

  res.status(200).json(recipe);
});

RecipeController.post('/', async (req, res) => {
  const recipe = req.body;
  await RecipeService.createRecipe(recipe);

  res.status(201).end();
});

RecipeController.put('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = req.body;

  await RecipeService.updateRecipe(id, recipe);

  res.status(204).end();
});

RecipeController.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await RecipeService.deleteRecipe(id);

  res.status(200).json({ message: 'Receita deletada com sucesso' });
});

module.exports = RecipeController;