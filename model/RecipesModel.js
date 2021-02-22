const connection = require('./connection');
const { ObjectId, ObjectID } = require('mongodb');

const getAll = async () => {
  return connection().then((db) => db.collection('recipes').find().toArray())
}

const findById = async (id) => {
  return connection().then((db) => db.collection('recipes').findOne(ObjectId(id)))
}

const findByString = async (cat, area, q) => {
  return connection().then((db) => db.collection('recipes').find({ cat, area, q }).toArray())
}

const createRecipe = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  return connection().then((db) => db.collection('recipes').insertOne({ strMeal, strCategory, strArea, strInstructions, strTags }))
}

const updateRecipe = async (id, { strMeal, strCategory, strArea, strInstructions, strTags }) => {
  return connection().then((db) => db.collection('recipes').updateOne({ _id: ObjectId(id) } , {$set: { strMeal, strCategory, strArea, strInstructions, strTags }} ))
}

const remove = async (id) => {
  return connection().then((db) => db.collection('recipes').deleteOne({ _id: ObjectId(id) }));
}
module.exports = {
  getAll,
  findById,
  findByString,
  createRecipe,
  updateRecipe,
  remove
}
