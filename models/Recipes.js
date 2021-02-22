const connection = require('./connections');
const { ObjectID } = require('mongodb');

const getAll = async () => await connection().then((db) => db.collection('recipes').find().toArray());

const findById = async (id) => {
  return await connection()
    .then((db) => db.collection('recipes').findOne(ObjectID(id)))
    .catch(err => console.error(err));
}

const create = async (strMeal, strCategory, strArea, strInstructions, strTags) => {
  const { insertedId } = await connection().then((db) => db.collection('recipes').insertOne({strMeal, strCategory, strArea, strInstructions, strTags}));
  return {
    id: insertedId,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strTags
  };
};

const update = async (id, name) => {
  return await connection().then((db) => db.collection('recipes').updateOne(
    { _id: ObjectID(id) },
    { $set: { name } }
    ));
}

const remove = async (id) => {
  return await connection().then((db) => db.collection('recipes').deleteOne( { _id: ObjectID(id) } ));
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  remove
};