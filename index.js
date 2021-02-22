const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const RecipesRouter = require('./controller/Recipes');

app.use(bodyParser.json());
app.use('/recipes', RecipesRouter);

app.listen(port, () => console.log(`Listening to port ${port}`));
