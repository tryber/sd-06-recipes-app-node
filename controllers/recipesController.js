const { Router } = require('express');
const mongo = require('../models/mongo');

const router = new Router();

router.get('/', async (_req, res) => {
  const recipes = await mongo.getAll();

  res.status(200).send(recipes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await mongo.findById(id);
    res.status(200).send(recipe);
  } catch(e) {
    res.status(404).send({ message: 'Receita não encontrada' });
  }
});



module.exports = router;