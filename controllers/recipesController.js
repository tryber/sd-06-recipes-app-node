const { Router } = require('express');

const router = Router();

const recipesServices = require('../services/recipesServices'); 

router.get('/', async (req, res) => {
  const result = await recipesServices.getAll();

  if (!result) return res.status(200).json([]);

  return res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
  const result = await recipesServices.getById(req.params.id);

  if (!result) return res.status(404).json({ message: "Receita não encontrada" });

  return res.status(200).json(result);
});

router.post('/', async (req,res) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

  const result = await recipesServices.create(strMeal, strCategory, strArea, strInstructions, strTags);

  if (result) return res.status(result.error.code).json({ message: result.error.message });

  return res.status(201).json({ message: "deu bom" });
});

module.exports = router;
