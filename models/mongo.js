const { ObjectId } = require('mongodb');

const connection = require('./connection');

const getAll = async () => {
  try {
    return await connection()
      .then((db) => db.collection('recipes').find().toArray());
  } catch(e) {
    throw new Error(e);
  }
};

const findById = async (id) => {
  try {
    return await connection()
      .then((db) => db.collection('recipes').findOne(ObjectId(id)));
  } catch(e) {
    throw new Error(e);
  }
};

const create = async (recipe) => {
  try {
    const { insertedId } = await connection()
      .then((db) => db.collection('recipes').insertOne(recipe));

    return { id: insertedId };
  } catch(e) {
    throw new Error(e);
  }
};

const update = async (id, recipe) => {
  try {
    return await connection()
      .then((db) => db.collection('recipes').updateOne({ "_id": ObjectId(id) }, { $set: recipe }));
  } catch(e) {
    throw new Error(e);
  }
};

module.exports = {
  getAll,
  findById,
  create,
  update
};