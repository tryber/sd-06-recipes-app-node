const { Router } = require('express');
const { getAll, getById, deleteById } = require('../model/mealModel');
const bodyParser = require('body-parser');

const router = new Router();

router.use(bodyParser.json());

// const routes = require('express').Router(); outra forma
router.get('/', async (request, response) => {
  response.status(200).json(await getAll());
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const foundId = await getById(id);
    return response.status(200).json(foundId);
  } catch (error) {
    return response.status(404).json({ message: 'Receita não encontrada' });
  }
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  await deleteById(id);
  response.status(200).json({ message: 'Receita deletada com sucesso' });
});


module.exports = router;
