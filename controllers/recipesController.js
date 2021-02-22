const { Router } = require('express');
const mongo = require('../models/mongo');

const router = new Router();

router.get('/', async (_req, res) => {
  const recipes = await mongo.getAll();

  res.status(200).send(recipes);
});

module.exports = router;