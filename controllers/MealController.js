const { Router } = require('express');
const { MealService } = require('../services');

const MealController = new Router();

MealController.get('/', async (_req, res) => {
  res.status(200).json(await MealService.getAll());
});

MealController.get('/:id', async (req, res) => {
  const { id } = req.params;
  await MealService.getById(id)
    .then((item) => res.status(200).json(item))
    .catch((_err) => {
      return res.status(404).json({"message": "Receita não encontrada"})
    });
});

MealController.post('/', async (req, res) => {
  const meal = req.body;
  await MealService.postMeal(meal)
  res.status(201).end();
})

module.exports = MealController;
