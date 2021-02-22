const { Router } = require('express');
const { recipesService } = require('../service');

const recipesController = new Router();

recipesController.get('/', async (req, res) => {
  res.status(200).json(await recipesService.getAllRecipes());
});

// recipesController.post('/', async (req, res) => {
//   const { name } = req.body;

//   const task = await createRecipes(name);

//   res.status(200).json(task);
// });

module.exports = recipesController;