const recipes = require('../models/recipes');

const getAll = async () => {
  return await recipes.getAll();
}

const getById = async (id) => {
  return await recipes.getById(id);
}

const validate = (strMeal) => {
  if (!strMeal) return {
    error: {
      message: 'O campo "strMeal" é obrigatório',
      code: 400
    }
  }

  if (strMeal.length < 3) return {
    error: {
      message: 'O campo "strMeal" deve ter pelo menos 3 caracteres',
      code: 400
    }
  }

  return false;
};

const create = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  const errorMessage = validate(strMeal);

  if (errorMessage) return errorMessage;
  await recipes.create(strMeal, strCategory, strArea, strInstructions, strTags);

  return false;
}

module.exports = {
  getAll,
  getById,
  create
};