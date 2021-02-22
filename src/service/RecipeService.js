const Recipe = require('../model/Recipe');

const getAll = () => Recipe.getAll();
const findById = (id) => Recipe.findById(id);
const createRecipe = (recipe) => Recipe.createRecipe(recipe);
const updateRecipe = (id, recipe) => Recipe.updateRecipe(id, recipe);
const deleteRecipe = (id) => Recipe.deleteRecipe(id);

module.exports = { getAll, findById, createRecipe, updateRecipe, deleteRecipe };