const connection = require('./connection');

const getAllRecipes = async () => {
  await connection().then((db) => db.collection('recipes').find().toArray());
};

// const createRecipes = async (name) => {
//   const { insertedId } = await connection().then((db) => db.collection('recipes').insertOne({ name }));
//   return {
//     id: insertedId,
//     name,
//   };
// };

module.exports = {
  getAllRecipes,
  // createRecipes,
};