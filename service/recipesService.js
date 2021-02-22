const recipe = require('../models/recipesModel');

const getAllRecipes = () => recipe.getAllRecipes();

// const createRecipes = async (name) => {
//   const task = await recipe.createRecipes(name);

//   return task;
// };

module.exports = {
  getAllRecipes,
  // createRecipes,
};