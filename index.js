const express = require('express');
const Controller = require('./controller/recipes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/recipes/:id', Controller.getById);
app.get('/recipes', Controller.getAll);

app.get('/', (req, res) => {
  return res.status(200).end();
});

app.post('/recipes', )


app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
