const connection  = require('./connection');

const getAll = async () => {
  return connection()
  .then((db) => db.collection('recipes').find().toArray())
} 

module.exports = {
  getAll,
};
