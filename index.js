const express = require('express');

const mealControllers = require('./controllers/mealControllers');

const app = express();

app.use('/recipes', mealControllers);

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000...');
});
