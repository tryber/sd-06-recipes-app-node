const connection = require('./connection');
const { ObjectID } = require('mongodb');

const getAll = async () => await connection()
  .then((db) => db.collection('recipes').find().toArray());

const findById = async (id) => await connection()
  .then((db) => db.collection('recipes').findOne(ObjectID(id)));

const createRecipe  = async (strMeal, strCategory, strArea, strInstructions, strTags) => await connection()
  .then((db) => db
    .collection('recipes')
    .insertOne({ strMeal, strCategory, strArea, strInstructions, strTags }));

module.exports = {
  getAll,
  findById,
  createRecipe,
};
