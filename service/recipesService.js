const recipe = require('../models/recipesModel');

const getAllRecipes = async () => {
  return await recipe.getAllRecipes();
}

const createRecipes = async (idMeal, strArea, strCategory, strInstructions) => {
   const recipe = await recipe.createRecipes(idMeal, strArea, strCategory, strInstructions);

   return recipe;
 };

const findById = async (id) => {
  return await recipe.findById(id);
}

module.exports = {
  getAllRecipes,
  findById,
  createRecipes,
};