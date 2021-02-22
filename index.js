const express = require('express');
const bodyParser = require('body-parser');
const {recipesController} = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use('/recipes', recipesController);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));