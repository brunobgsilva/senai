const btnPersonagens = document.getElementById('btnPersonagens');
const btnPlanetas = document.getElementById('btnPlanetas');
const inputPagina = document.getElementById('pagina');
const inputLimite = document.getElementById('limite');
const lista = document.getElementById('lista');
const mensagem = document.getElementById('mensagem');
const tituloResultado = document.getElementById('tituloResultado');
const detalhes = document.getElementById('detalhes');

btnPersonagens.addEventListener('click', carregarPersonagens);
btnPlanetas.addEventListener('click', carregarPlanetas);

async function carregarPersonagens() {
  limparTela('Carregando personagens...');

  const page = inputPagina.value;
  const limit = inputLimite.value;

  try {
    const resposta = await fetch(`/api/personagens?page=${page}&limit=${limit}`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(dados.erro || 'Erro ao carregar personagens.');
    }

    tituloResultado.textContent = 'Personagens';
    mensagem.textContent = `Página ${dados.meta?.currentPage || page} carregada com sucesso.`;

    const personagens = dados.items || [];
    lista.innerHTML = personagens.map(criarCardPersonagem).join('');
  } catch (error) {
    mensagem.textContent = error.message;
  }
}

async function carregarPlanetas() {
  limparTela('Carregando planetas...');

  const page = inputPagina.value;
  const limit = inputLimite.value;

  try {
    const resposta = await fetch(`/api/planetas?page=${page}&limit=${limit}`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(dados.erro || 'Erro ao carregar planetas.');
    }

    tituloResultado.textContent = 'Planetas';
    mensagem.textContent = `Página ${dados.meta?.currentPage || page} carregada com sucesso.`;

    const planetas = dados.items || [];
    lista.innerHTML = planetas.map(criarCardPlaneta).join('');
  } catch (error) {
    mensagem.textContent = error.message;
  }
}

function criarCardPersonagem(personagem) {
  return `
    <article class="card">
      <img src="${personagem.image}" alt="${personagem.name}" />
      <h3>${personagem.name}</h3>
      <p><strong>Raça:</strong> ${personagem.race || 'Não informado'}</p>
      <p><strong>Gênero:</strong> ${personagem.gender || 'Não informado'}</p>
      <p><strong>KI:</strong> ${personagem.ki || 'Não informado'}</p>
      <button onclick="verDetalhesPersonagem(${personagem.id})">Ver detalhes</button>
    </article>
  `;
}

function criarCardPlaneta(planeta) {
  return `
    <article class="card">
      <img src="${planeta.image}" alt="${planeta.name}" />
      <h3>${planeta.name}</h3>
      <p><strong>Destruído:</strong> ${planeta.isDestroyed ? 'Sim' : 'Não'}</p>      
      <p>${planeta.description ? planeta.description.substring(0, 120) + '...' : 'Sem descrição.'}</p>
    </article>
  `;
}

async function verDetalhesPersonagem(id) {
  detalhes.classList.remove('escondido');
  detalhes.innerHTML = '<p>Carregando detalhes...</p>';

  try {
    const resposta = await fetch(`/api/personagens/${id}`);
    const personagem = await resposta.json();

    if (!resposta.ok) {
      throw new Error(personagem.erro || 'Erro ao buscar detalhes.');
    }

    detalhes.innerHTML = `
      <h2>${personagem.name}</h2>
      <img src="${personagem.image}" alt="${personagem.name}" />
      <p><strong>Raça:</strong> ${personagem.race || 'Não informado'}</p>
      <p><strong>Gênero:</strong> ${personagem.gender || 'Não informado'}</p>
      <p><strong>Afiliação:</strong> ${personagem.affiliation || 'Não informado'}</p>
      <p><strong>KI:</strong> ${personagem.ki || 'Não informado'}</p>
      <p><strong>Máximo KI:</strong> ${personagem.maxKi || 'Não informado'}</p>
      <p><strong>Descrição:</strong> ${personagem.description || 'Sem descrição.'}</p>
    `;
  } catch (error) {
    detalhes.innerHTML = `<p>${error.message}</p>`;
  }
}

function limparTela(textoMensagem) {
  mensagem.textContent = textoMensagem;
  lista.innerHTML = '';
  detalhes.innerHTML = '';
  detalhes.classList.add('escondido');
}

carregarPersonagens();