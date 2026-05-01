const repository = require('../repositories/pratos.repositories')

function listarPratos() {
    return repository.listarPratos();
}

function buscarPratoPorId(id) {
  return repository.buscarPratoPorId(id);

}

function criarNovoPrato(novoPrato) {
  return repository.novoPratoAdicionado(novoPrato);
}  


function atualizarPrato(id, pratoAtualizado) {
  return repository.atualizarPrato(id, pratoAtualizado);

}

function deletarPrato(id) {
  return repository.deletarPrato(id)
}


module.exports = {listarPratos, buscarPratoPorId, criarNovoPrato, atualizarPrato, deletarPrato}