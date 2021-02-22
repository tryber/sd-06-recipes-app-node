const connection = require('./connection');

const getAll = async () => {
  const recipes = await connection().then((db) => db.collection('recipes').find({}).toArray());

  console.log(recipes);
  return recipes;
};

module.exports = {
  getAll,
};
