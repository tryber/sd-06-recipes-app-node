const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello node')
});

app.listen(3000, () => console.log('Grupo 14 é o maior!'))
