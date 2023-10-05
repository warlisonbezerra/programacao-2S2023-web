const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para lidar com o envio do formulário (POST) e renderizar a página de dados
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, dataAgendamento } = req.body;
    res.render('dados', { nome, endereco, telefone, dataAgendamento });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
