const express = require('express');
const router = express.Router();

const {
  listarPersonagens,
  buscarPersonagemPorId,
  listarPlanetas
} = require('../services/dragonBallServices');

router.get('/status', (req, res) => {
  res.json({
    status: 'online',
    mensagem: 'Backend Express funcionando corretamente.'
  });
});

router.get('/personagens', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const dados = await listarPersonagens(page, limit);
    res.json(dados);
  } catch (error) {
    res.status(500).json({
 erro: 'Erro ao consultar personagens.',
      detalhe: error.message
    });
  }
});

router.get('/personagens/:id', async (req, res) => {
  try {
    const personagem = await buscarPersonagemPorId(req.params.id);
    res.json(personagem);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao consultar personagem por ID.',
      detalhe: error.message
    });
  }
});

router.get('/planetas', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const dados = await listarPlanetas(page, limit);
    res.json(dados);
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao consultar planetas.',
      detalhe: error.message
    });
  }
});

module.exports = router;