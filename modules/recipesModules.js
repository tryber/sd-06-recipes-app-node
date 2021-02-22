const connection = require('./connection');

const { ObjectId } = require('mongodb');

const getAllRecipes = async () =>
  connection().then((db) =>
    db
      .collection('recipes')
      // .find({}, { projection: { _id: 0 } })
      .find({}, {})

      .toArray()
  );

const getRecipeById = async (id) => {
  const recipe = await connection().then((db) =>
    db
      .collection('recipes')
      .findOne({ idMeal: id }, { projection: { idMeal: 0 } })
  );
  return recipe;
};

const createRecipe = async ({
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strTags,
}) => {
  const { insertedId } = await connection().then((db) =>
    db
      .collection('recipes')
      .insertOne({ strMeal, strCategory, strArea, strInstructions, strTags })
  );

  return insertedId;
};

const updateRecipe = async (body, id) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = body;
  const { insertedId } = await connection().then((db) =>
    db
      .collection('recipes')
      .updateOne(
        { idMeal: id },
        { $set: { strMeal, strCategory, strArea, strInstructions, strTags } }
      )
  );

  return insertedId;
};

const removeRecipe = async (id) => {
  const { deletedCount } = await connection().then((db) =>
    db.collection('recipes').deleteOne({ idMeal: id })
  );

  return deletedCount;
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  removeRecipe,
};
