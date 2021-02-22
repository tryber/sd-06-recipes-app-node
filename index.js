const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const recipesController = require('./controllers/recipesController');

app.use('/recipes', recipesController);

app.listen(3000, () => console.log("porta sendo escutada"));
