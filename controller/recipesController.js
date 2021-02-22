const { Router } = require('express');
const { getAll } = require('../models/meal');

const router = Router();

router.get('/', async (req, res) => {
  res.status(200).json(await getAll())
});

module.exports = router;
