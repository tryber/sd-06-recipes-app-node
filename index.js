const bodyParser = require('body-parser');
const express = require('express');
const recipesController = require('./controller/recipesController');
const app = express();

app.use(bodyParser.json())

app.use('/recipes', recipesController);

app.listen(3000, () => console.log('Grupo 14 é o maior!'))
