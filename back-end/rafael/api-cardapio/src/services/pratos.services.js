const {criarPrato} = require("../models/pratos.models");

let pratos = [
    criarPrato({id: 1, nome: 'Frango Grelhado', descricao: 'Com legume salteados', preco: 35.90, categoria: "fit"}),
    criarPrato({id: 2, nome: 'Salada Caesar', descricao: 'Com Molho Chipotle', preco: 15.50, categoria: "vegan"}),
    criarPrato({id: 3, nome: 'Churrasco', descricao: 'Com Molho Barbecue', preco: 78.90, categoria: "carnes"}),
]

let proximoId = 4;

function listarPratos() {
    return pratos;
}

function buscarPratoPorId(id) {
  return pratos.find(prato => prato.id === Number(id));
}

function criarNovoPrato(novoPrato) {
  const novoPratoAdicionado = criarPrato({id: proximoId++, ...novoPrato})
  pratos.push(novoPratoAdicionado);
  return novoPratoAdicionado;
}  

function atualizarPrato(id, pratoAtualizado) {
  const indicePrato = pratos.findIndex((prato) => prato.id === Number(id));

  if (indicePrato === -1) return null;

  pratos[indicePrato] = {...pratos[indicePrato], ...pratoAtualizado};

  console.log(pratos[indicePrato]);
  return pratos[indicePrato];
}

function deletarPrato(id) {
  const indicePrato = pratos.findIndex((prato) => prato.id === Number(id));
  const pratoDeletado = pratos[indicePrato];

  pratos.splice(indicePrato, 1);

  return pratoDeletado;
}

module.exports = {listarPratos, buscarPratoPorId, criarNovoPrato, atualizarPrato, deletarPrato}