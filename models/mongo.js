const connection = require('./connection');

const getAll = async () => {
  try {
    return await connection()
    .then((db) => db.collection('recipes').find().toArray())
  } catch(e) {
    throw new Error(e);
  }

};

module.exports = {
  getAll,
};