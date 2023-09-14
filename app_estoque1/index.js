const express = require('express');
const app = express();



app.get("/ola", function (req, res) {
    res.send ("Olá, mundo!");
});




const PORT = 8080;
app.listen(PORT, function () {
    console.log("o aplicativo esta rodando na porta:" + PORT);
});