const express = require('express');
const bodyParser = require('body-parser');
const RecipeController = require('./controllers/RecipeController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/recipes', RecipeController);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port);
