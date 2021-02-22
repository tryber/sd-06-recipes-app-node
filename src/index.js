const express = require('express');
const bodyParser = require('body-parser');
const RecipeController = require('./controller/RecipeController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/recipes', RecipeController);

app.listen(PORT, () => console.log('App listening on PORT %s', PORT));