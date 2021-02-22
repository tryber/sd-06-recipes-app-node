const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('recipes').find().toArray());
}

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('recipes').findOne(ObjectId(id))
    .catch((err) => { throw err }))
}

const deleteById = async (id) => {
  return connection()
  .then((db) => db.collection('recipes').deleteOne({ _id: ObjectId(id) }))
}

module.exports = {
  getAll,
  getById,
  deleteById,
}