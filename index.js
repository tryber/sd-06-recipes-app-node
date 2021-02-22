const express = require('express');
const router = require('./controller/recipesController');

const app = express();

app.use('/recipes', router);

app.listen(3000, () => console.log('Grupo 14 é o maior!'))
