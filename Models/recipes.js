const connection = require('../Models/mongoConnection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection().then((db) => db.collection('recipes').find().toArray());
}

const getById = async (id) => {
  const getId = await connection().then((db) => db.collection('recipes').findOne((ObjectId(id))));
  return getId;
}

const create = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  const create = await connection().then((db) => db.collection('recipes').insertOne({
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strTags,
  }))

  return create;
};

module.exports = {
  getAll,
  getById,
  create,
}