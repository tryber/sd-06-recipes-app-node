const { Router } = require('express');
const recipesModules = require('../modules/recipesModules');
const validateRecipe = require('./validateRecipe');

const RecipesRouter = new Router();

RecipesRouter.get('/search', async (req, res) => {
  res.status(200).send('/search');
});

RecipesRouter.get('/', async (req, res) => {
  const recipes = await recipesModules.getAllRecipes();

  res.status(200).json(recipes);
});

RecipesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const recipe = await recipesModules.getRecipeById(id);

  recipe === null
    ? res.status(404).json({ message: 'Receita não encontrada' })
    : res.status(200).json(recipe);
});

RecipesRouter.post('/', validateRecipe, async (req, res) => {
  const insertedId = await recipesModules.createRecipe(req.body);

  res.status(201).json({ message: `Receita cadastrada, id: ${insertedId}` });
});

RecipesRouter.put('/:id', validateRecipe, async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  await recipesModules.updateRecipe(body, id);

  res.status(201).json({ message: `Receita atualizada, id: ${id}` });
});

RecipesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedCount = await recipesModules.removeRecipe(id);

  if (deletedCount === 0) {
    return res.status(404).json({ message: 'Receita não existe' });
  }

  res.status(200).json({ message: 'Receita deletada com sucesso' });
});

module.exports = RecipesRouter;
