const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection().then((db) => db.collection('recipes').find({}).toArray());
};

const getById = async (id) => {
  return await connection().then((db) => db.collection('recipes').findOne(ObjectId(id)));
};

const postMeal = async (meal) => {
  return await connection().then((db) => db.collection('recipes').insertOne({...meal}))
};

module.exports = {
  getAll,
  getById,
  postMeal,
};
