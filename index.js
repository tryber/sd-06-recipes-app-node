const express = require('express')
const app = express()
const port = 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const RecipesController = require('./controller/RecipesController');

app.use('/', RecipesController);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(port, () => console.log(`Example app listening on ${port}!`));
