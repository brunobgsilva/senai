const service = require("../services/pratos.services");
const { logger } = require("../middlewares/logger.middleware.js");
const { errorHandler } = require("../middlewares/errorHandler.middleware.js"); 

function listar (req, res) {
  const pratos = service.listarPratos();
  logger(req, res);
  return res.status(200).json(pratos)
}

function buscarPorId (req, res) {
  const prato = service.buscarPratoPorId(req.params.id);

  if (!prato) return res.status(404).json({error: 'Prato não encontrado'});

  return res.status(200).json(prato);
}

function criar (req, res) {
    const {nome, descricao, preco, categoria} = req.body;

    if (!preco || !nome || !descricao || !categoria) {
      return res.status(400).json({error: 'Campos obrigatorios'})
    };

    logger(req, res);

    errorHandler(err, req, res, next);

    const novoPrato = service.criarNovoPrato({nome, descricao, preco, categoria})
    return res.status(201).json(novoPrato);
}

function atualizar (req, res) {
  const pratoAtualizado = service.atualizarPrato(req.params.id, req.body);

  if (!pratoAtualizado) return res.status(404).json({error: 'Prato não encontrado.'});

  return res.json(pratoAtualizado);
};

function deletar (req, res) {
  const pratoDeletado = service.deletarPrato(req.params.id);

  if (!pratoDeletado) return res.status(404).json({error: 'Prato não encontrado.'});

  return res.json({pratoDeletado});
}

module.exports = {listar, buscarPorId, criar, atualizar, deletar}