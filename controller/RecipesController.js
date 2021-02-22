const { Router } = require('express');
const RecipesService = require('../service/RecipesService');
const rescue = require('express-rescue');

const router = Router();

router.get('/recipes/search', rescue (async(req, res) => {
  const { cat, area, q } = req.query;
  const data = await RecipesService.getAll();
  const recipeByCat = data.filter((recipe) => recipe.strCategory.includes(cat));
  const recipeByArea = data.filter((recipe) => recipe.strArea.includes(area));
  const recipeByQ = data.filter((recipe) => recipe.strMeal.includes(q));

  if (recipeByCat) return res.status(200).json(recipeByCat);
  if (recipeByArea) return res.status(200).json(recipeByArea);
  if (recipeByQ) return res.status(200).json(recipeByQ);
}));

router.get('/recipes', rescue (async(req, res) => {
  const recipes = await RecipesService.getAll();
  res.status(200).json(recipes);
}));

router.get('/recipes/:id', rescue (async(req, res) => {
  const { id } = req.params;
  const recipe = await RecipesService.findById(id);
  
  if(!recipe) {
    return res.status(404).json({ message: 'Receita não encontrada' });
  }
  return res.status(200).json(recipe);
}));

router.post('/recipes', rescue (async(req, res) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

  if(!strMeal) {
    return res.status(400).json({ message: 'O campo "strMeal" é obrigatório' });
  }

  if(strMeal.length < 3) {
    return res.status(400).json({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });
  }

  if(!strCategory) {
    return res.status(400).json({ message: 'O campo "strCategory" é obrigatório' });
  }

  if(strCategory.length < 3) {
    return res.status(400).json({ message: 'O campo "strCategory" deve ter pelo menos 3 caracteres' });
  }

  if(!strArea) {
    return res.status(400).json({ message: 'O campo "strArea" é obrigatório' });
  }

  if(strArea.length < 3) {
    return res.status(400).json({ message: 'O campo "strArea" deve ter pelo menos 3 caracteres' });
  }

  if(!strInstructions) {
    return res.status(400).json({ message: 'O campo "strInstructions" é obrigatório' });
  }

  const wordsInstructions = strInstructions.split(' ');

  if(wordsInstructions.length < 10) {
    return res.status(400).json({ message: 'O campo "strInstructions" deve ter pelo menos 10 palavras' });
  }

  if(!strTags) {
    return res.status(400).json({ message: 'O campo "strTags" é obrigatório' });
  }

  const tagsArray = strTags.split(',');

  if(tagsArray.length < 1) {
    return res.status(400).json({ message: 'O campo "strTags" deve ter pelo menos 1 valor' })
  }

  
  const savedRecipe = await RecipesService.createRecipe(strMeal, strCategory, strArea, strInstructions, strTags);

  return res.status(200).json({ strMeal, strCategory, strArea, strInstructions, strTags })
}))

router.put('/recipes/:id', rescue (async(req, res) => {
  const { id } = req.params;
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

  if(!strMeal) {
    return res.status(400).json({ message: 'O campo "strMeal" é obrigatório' });
  }

  if(strMeal.length < 3) {
    return res.status(400).json({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });
  }

  if(!strCategory) {
    return res.status(400).json({ message: 'O campo "strCategory" é obrigatório' });
  }

  if(strCategory.length < 3) {
    return res.status(400).json({ message: 'O campo "strCategory" deve ter pelo menos 3 caracteres' });
  }

  if(!strArea) {
    return res.status(400).json({ message: 'O campo "strArea" é obrigatório' });
  }

  if(strArea.length < 3) {
    return res.status(400).json({ message: 'O campo "strArea" deve ter pelo menos 3 caracteres' });
  }

  if(!strInstructions) {
    return res.status(400).json({ message: 'O campo "strInstructions" é obrigatório' });
  }

  const wordsInstructions = strInstructions.split(' ');

  if(wordsInstructions.length < 10) {
    return res.status(400).json({ message: 'O campo "strInstructions" deve ter pelo menos 10 palavras' });
  }

  if(!strTags) {
    return res.status(400).json({ message: 'O campo "strTags" é obrigatório' });
  }

  const tagsArray = strTags.split(',');

  if(tagsArray.length < 1) {
    return res.status(400).json({ message: 'O campo "strTags" deve ter pelo menos 1 valor' })
  }

  
  await RecipesService.updateRecipe(id, { strMeal, strCategory, strArea, strInstructions, strTags });

  return res.status(200).json({ strMeal, strCategory, strArea, strInstructions, strTags })
}));

router.delete('/recipes/:id', rescue (async(req, res) => {
  const { id } = req.params;
  await RecipesService.remove(id);
  return res.status(200).json({ message: 'Receita deletada com sucesso' });
}));

module.exports = router;
