const Recipes = require('../model/RecipesModel');

const getAll = async () => {
  return Recipes.getAll();
}

const findById = async (id) => {
  return Recipes.findById(id);
}

const createRecipe = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  return Recipes.createRecipe(strMeal, strCategory, strArea, strInstructions, strTags);
}

const updateRecipe = async (id, data) => {
  return Recipes.updateRecipe(id, data);
}

const remove = async (id) => {
  return Recipes.remove(id);
}

module.exports = {
  getAll,
  findById,
  updateRecipe,
  createRecipe,
  remove
}
