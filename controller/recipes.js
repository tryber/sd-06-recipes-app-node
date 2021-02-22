const Services = require('../Models/recipes');

const getAll = async (req, res) => {

  const getRecipes = await Services.getAll();

  if(!getRecipes) return res.status(200).json([]);

  return res.status(200).json(getRecipes);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const findId = await Services.getById(id);

  if(!findId) return res.status(404).json({ message: "Receita não encontrada" });

  return res.status(200).json(findId);
}

const create = async (req, res) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

  const newCreation = await Services.create(strMeal, strCategory, strArea, strInstructions, strTags)
}

module.exports = {
  getAll,
  getById,
}