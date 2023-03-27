var express = require('express');
var router = express.Router();
var Exame = require('../controlers/emd')

/* GET home page. */
router.get('/', function(req, res, next) {
  Exame.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista"}))
});

router.get('/emds/:id', function(req, res) {
  Exame.getExame(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter o exame"}))

})

router.post('/emds', function(req, res) {
  Exame.addExame(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Não consegui adicionar o exame"}))

})


router.put('/emds/:id', (req, res) => {
  Exame.updateExame(req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Não consegui alterar o exame"}))

})


router.delete('/emds/:id', (req, res) => {
  Exame.deleteExame(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(524).json({erro: erro, mensagem: "Não consegui eliminar o exame"}))

})

module.exports = router;