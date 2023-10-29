const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

const calculadoraController = require('./controllers/calculadoraController');

app.use(express.static('views'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
