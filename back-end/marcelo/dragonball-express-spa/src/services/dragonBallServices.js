const axios = require('axios');

const API_BASE_URL = process.env.DRAGONBALL_API_URL || 'https://dragonball-api.com/api';

async function listarPersonagens(page = 1, limite = 10) {
    const resposta = await axios.get(`${API_BASE_URL}/characters`, {
        params: {page, limit}
    });

    return resposta.data;
};

async function buscarPersonagemPorId(id) {
  const resposta = await axios.get(`${API_BASE_URL}/characters/${id}`);
  return resposta.data;
}

async function listarPlanetas(page = 1, limit = 10) {
  const resposta = await axios.get(`${API_BASE_URL}/planets`, {
    params: { page, limit }
  });

  return resposta.data;
}

module.exports = {
  listarPersonagens,
  buscarPersonagemPorId,
  listarPlanetas
};
