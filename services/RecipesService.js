const RecipesModel = require('../models/RecipesModel');

const isValid = (strMeal, strCategory, strArea, strInstructions, strTags) => {
  if(!strMeal) return { message: 'O campo \"strMeal\" é obrigatório' };
  if(strMeal.length < 3) return { message: 'O campo \"strMeal\" deve ter pelo menos 3 caracteres' };
  if (!strCategory) return { message: "O campo \"strCategory\" é obrigatório"};
  if (strCategory.length < 3) return { message: "O campo  \"strCategory\" deve ter pelo menos 3 caracteres" };
  if (!strArea) return { message: "O campo \"strArea\" é obrigatório" };
  if (strAre.length < 3) return { message: "O campo \"strArea\" deve ter pelo menos 3 caracteres" };
  if (!strInstructions) return { message: "O campo \"strInstruction\" é obrigatório" };
  if (strInstructions.length < 10) return { message: "O \"strInstruction\" deve ter pelo menos 10 palavras" } ;
  if (!strTags) return { message: "O campo \"strTags\" é obrigatório" };
  if (strTags.length > 1) return { message: "O campo \"strTags\" deve ter pelo menos 1 valor" };

  return true;
};

const getAll = async () => await RecipesModel.getAll();

const findById = async (id) => await RecipesModel.findById(id);

const createRecipe = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  await RecipesModel.createRecipe(strMeal, strCategory, strArea, strInstructions, strTags);
};

const deleteById = async (id) =>  {
  const message = {message: 'Receita deletada com sucesso' } 
  const objId = await RecipesModel.findById(id);
  return [objId, message];
}

module.exports = {
  getAll,
  findById,
  deleteById,
};
