const { Router } = require('express');
const { ObjectId } = require('mongodb');

// const bodyParser = require('body-parser');

const routes = new Router();
const connection = require('./connection');

routes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const openRecipes = await connection().then((db) => db.collection('recipes').findOne(ObjectId(id)));
  if (!openRecipes) return response.status(404).json({ message: 'Receita não encontrada' });
  response.status(200).json(openRecipes);
});
routes.get('/', async (request, response) => {
  const openRecipes = await connection().then((db) => db.collection('recipes').find().toArray());
  response.status(200).json(openRecipes);
});

routes.post('/', async (request, response) => {
  const recipes = request.body;

  const { insertedId } = await connection().then((db) => db.collection('recipes').insertOne(recipes));
  const newRecipes = {
    id: insertedId,
    recipes,
  };
  response.status(200).json(newRecipes);
});

routes.put('/:id', async (request, response) => {
  const recipes = request.body;
  const { id } = request.params;
  await connection().then((db) => db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: recipes }));
  response.status(200).end();
});

module.exports = routes;
