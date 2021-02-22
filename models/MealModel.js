const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const recipes = await connection().then((db) => db.collection('recipes').find({}).toArray());

  return recipes;
};

const findById = async (id) => {
  const recipe = await connection().then((db) => db.collection('recipes').findOne(ObjectId(id)));

  return recipe;
};

const insertRecipe = async (recipe) => {
  const { insertedId } = await connection().then((db) => db.collection('recipes').insertOne(recipe));

  return insertedId;
};

module.exports = {
  getAll,
  findById,
  insertRecipe,
};
