const express = require('express');

const recipesController = require('./controllers/recipesController');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/recipes', recipesController);

app.listen(3000, () => console.log('rodando na porta 3k'));