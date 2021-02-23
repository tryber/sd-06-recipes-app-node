const express = require('express');
const bodyParser = require('body-parser');
const recipesRoute = require('./controllers/RecipesControllers');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/recipes', recipesRoute)

app.use((req, _res, next) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
});

app.use((err, _req, res, _next) => res.send(`erro: ${err.message}`));

app.listen(PORT, () => console.log('running port', PORT));
