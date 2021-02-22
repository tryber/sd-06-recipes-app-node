const { Router } = require('express');
const mongo = require('../models/mongo');

const router = new Router();

const validateFields = require('../middlewares/validateFields');

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

router.post('/', validateFields, async (_req, res) => {

  try {
    // const recipe = await mongo.findById(id);
    return res.status(200).send('validou!');
  } catch(e) {
    res.status(404).send({ message: 'Receita não encontrada' });
  }
});

module.exports = router;