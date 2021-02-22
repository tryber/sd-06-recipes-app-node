const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllRecipes = async () => {
  return await connection().then((db) => db.collection('recipes').find().toArray());
};

const createRecipes = async (name) => {
    const { insertedId } = await connection().then((db) => db.collection('recipes').insertOne({ idMeal, strArea, strCategory, strInstructions }));
    return {
      id: insertedId,
      idMeal, strArea, strCategory, strInstructions
    };
  };

const findById = async (id) => {
  return await connection().then((db) => db.collection('recipes').findOne(ObjectId(id)))
}

module.exports = {
  getAllRecipes,
  findById,
  createRecipes,
};