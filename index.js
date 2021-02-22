const express = require('express');
const bodyParser = require('body-parser');
const { MealController } = require('./controllers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/recipes', MealController);

app.listen(PORT, () => console.log(`O PAI TÁ ON ${PORT} VEZES!`));