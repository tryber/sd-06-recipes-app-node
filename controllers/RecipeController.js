const express = require('express');
const MealModel = require('../models/MealModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await MealModel.getAll();

  res.status(200).json(recipes);
});

module.exports = router;
