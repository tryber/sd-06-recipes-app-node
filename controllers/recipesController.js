const { Router } = require('express');
const Recipe = require('../models/Recipe');

const router = new Router();

const validateFields = require('../middlewares/validateFields');

router.get('/', async (_req, res) => {
  const recipes = await Recipe.getAll();

  res.status(200).send(recipes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id);
    res.status(200).send(recipe);
  } catch(e) {
    res.status(404).send({ message: 'Receita não encontrada' });
  }
});

router.post('/', validateFields, async (req, res) => {
  const { body } = req;
  try {
    const newId = await Recipe.create(body);
    return res.status(200).send({ id: newId, ...body });
  } catch(e) {
    res.status(404).send(e);
  }
});

router.put('/:id', validateFields, async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await Recipe.update(id, body);
    return res.status(200).send({ message: 'Receita atualizada!' });
  } catch(e) {
    return res.status(404).send({ message: 'Receita não encontrada' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Recipe.remove(id);
    return res.status(200).send({ message: 'Receita deletada com sucesso' });
  } catch(e) {
    return res.status(404).send({ message: 'Receita não encontrada' });
  }
});


module.exports = router;