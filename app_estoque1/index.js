const express = require('express');
const estoque = require('./estoque');
const app = express();

app.get("/", function (req, res) {
    res.send("API Estoque");
});

app.get("/api/adicionar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let p = estoque.criar_produto(id, nome, qtd);
    estoque.adicionar_produto(p);
    res.json(p);
});

app.get("/api/listar", function (req, res) {
    res.json(estoque.listar_produtos());
});

app.get("/api/editar/:id/:qtdAtual", function (req, res) {
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;
    res.json(estoque.editar_produto(id, qtdAtual));
});

app.get("/api/estoque/remover/:id", function(req, res) {
    let id = req.params.id;
  
    const produtoRemovido = estoque.remover_produto(id);
  
    if (produtoRemovido) {
      res.json({ message: `Produto com ID ${id} removido com sucesso` });
    } else {
      res.status(404).json({ message: `Produto com ID ${id} não encontrado no estoque` });
    }
  });


const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});

