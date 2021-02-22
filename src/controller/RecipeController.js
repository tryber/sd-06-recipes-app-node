const { Router } = require('express');
const RecipeService = require('../service/RecipeService');

const RecipeController = new Router();

RecipeController.get('/', async (req, res) => {
  res.status(200).json(await RecipeService.getAll());
});

RecipeController.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.status(200).json(await RecipeService.findById(id));
});

module.exports = RecipeController;