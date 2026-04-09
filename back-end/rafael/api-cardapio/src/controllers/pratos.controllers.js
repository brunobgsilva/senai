const service = require("../services/pratos.services")

function listar (req, res) {
  const pratos = service.listarPratos();
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