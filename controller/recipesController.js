const { Router } = require('express');
const { recipesService } = require('../service');

const recipesController = new Router();

recipesController.get('/', async (req, res) => {
  res.status(200).json(await recipesService.getAllRecipes());
});

recipesController.post('/', async (req, res) => {
   const { idMeal, strArea, strCategory, strInstructions } = req.body;

   const recipe = await recipesService.createRecipes(idMeal, strArea, strCategory, strInstructions);

   res.status(200).json(recipe);
 });

recipesController.get('/:id', async (req, res) => {
  const recipe  = await recipesService.findById(req.params.id);

  if (!recipe) return res.status(404).json({ message: 'receita não encontrada'});

  res.status(200).json(recipe);
});

module.exports = recipesController;