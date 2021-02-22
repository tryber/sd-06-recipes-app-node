const connection  = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
  .then((db) => db.collection('recipes').find().toArray())
} 

const getById = async (id) => {
  return connection()
  .then((db) => db.collection('recipes').findOne(ObjectId(id)))
  .catch(() => 'NotFound')
}

const postRecipe = async ({
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strTags
}) => {
  return connection()
  .then((db) => db.collection('recipes').insertOne(({
    "strMeal": strMeal,
    "strCategory": strCategory,
    "strArea": strArea,
    "strInstructions": strInstructions,
    "strTags": strTags
  })))
  .catch(() => 'Not Created')
} 

module.exports = {
  getAll,
  getById,
  postRecipe
};
