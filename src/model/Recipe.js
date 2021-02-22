const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection().then((db) => db.collection('recipes').find().toArray());
};

const findById = async (id) => {
  return await connection().then((db) => db.collection('recipes').findOne(
    {
      _id: ObjectId(id)
    },
    {
      fields: {
        _id: 1,
        strMeal: 1,
        strCategory: 1,
        strInstructions: 1,
        strTags: 1,
      }
    }
  ));
};

const createRecipe = async (recipe) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = recipe;

  return await connection().then((db) => db.collection('recipes').insertOne({ strMeal, strCategory, strArea, strInstructions, strTags }));
};

const updateRecipe = async (id, recipe) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = recipe;

  return await connection().then((db) => db.collection('recipes').updateOne({ '_id': ObjectId(id) }, { $set: { strMeal, strCategory, strArea, strInstructions, strTags } }));
};

const deleteRecipe = async (id) => {
  return await connection().then((db) => db.collection('recipes').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  getAll,
  findById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
