const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // Você pode usar qualquer mecanismo de modelo que preferir

// Rota para a página do formulário
app.get('/formulario', (req, res) => {
    res.render('formulario'); // Certifique-se de criar um arquivo "formulario.ejs" para a página do formulário
});

// Rota para lidar com o envio do formulário
app.post('/marcacao-consulta', (req, res) => {
    const dadosFormulario = req.body;
    
    // Validação dos campos
    const camposVazios = Object.keys(dadosFormulario).filter(key => !dadosFormulario[key]);
    if (camposVazios.length > 0) {
        return res.status(400).send(`Campos vazios: ${camposVazios.join(', ')}`);
    }
    
    // Processamento dos dados do formulário
    // Aqui você pode salvar os dados em um banco de dados, enviar por e-mail, etc.
    
    res.send('Consulta agendada com sucesso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
