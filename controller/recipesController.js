const { Router } = require('express');
const { getAll, getById, postRecipe } = require('../models/mealModel');
const { validationExist, validationLength, validationWords, validationTags } = require('../services/mealServices');

const router = Router();

router.get('/', async (req, res) => {
  res.status(200).json(await getAll())
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const response = await getById(id)
  if (response === 'NotFound') {
    res.status(404).json({ message: 'Receita não encontrada'})
  } else {
    res.status(200).json(await getById(id))
  }
});

router.post('/', async (req, res) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strTags
  } = req.body;

  if (!validationExist(strMeal)) {
    res.status(400).json({ message: "O campo \"strMeal\" é obrigatório" });
  } else if (!validationLength(strMeal)) {
    res.status(400).json({ message: "O campo \"strMeal\" deve ter pelo menos 3 caracteres" });
  } else if (!validationExist(strCategory)) {
    res.status(400).json({ message: "O campo \"strCategory\" é obrigatório" })
  } else if (!validationLength(strCategory)) {
    res.status(400).json({ message: "O campo \"strCategory\" deve ter pelo menos 3 caracteres" });
  } else if (!validationExist(strArea)) {
    res.status(400).json({ message: "O campo \"strArea\" é obrigatório" })
  } else if (!validationLength(strArea)) {
    res.status(400).json({ message: "O campo \"strArea\" deve ter pelo menos 3 caracteres" });
  } else if (!validationExist(strInstructions)) {
    res.status(400).json({ message: "O campo \"strInstructions\" é obrigatório" })
  } else if (!validationWords(strInstructions)) {
    res.status(400).json({ message: "O campo \"strInstructions\" deve ter pelo menos 10 palavras" });
  } else if (!validationExist(strTags)) {
    res.status(400).json({ message: "O campo \"strTags\" é obrigatório" })
  } else if (!validationTags(strTags)) {
    res.status(400).json({ message: "O campo \"strTags\" deve ter pelo menos 1 valor"
      }) 
  } else {
    const response = await postRecipe({
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strTags
    })
    res.status(200).json(response) 
  }

});

module.exports = router;
