const express = require('express');
const router = express.Router();

router.post('/calcular', (req, res) => {
  const numeroA = parseFloat(req.body.numero_a);
  const numeroB = parseFloat(req.body.numero_b);
  const operacao = req.body.operacao;

  let resultado;
  switch (operacao) {
    case '+':
      resultado = numeroA + numeroB;
      break;
    case '-':
      resultado = numeroA - numeroB;
      break;
    case '*':
      resultado = numeroA * numeroB;
      break;
    case '/':
      resultado = numeroA / numeroB;
      break;
    default:
      resultado = 'Operação inválida';
  }

  res.render('index.html', { resultado });

});

module.exports = router;
