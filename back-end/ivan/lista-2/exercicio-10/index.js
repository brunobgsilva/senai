const d = document;

const distanciaKmInputElem = d.querySelector('#distancia-km-input');
const tempoHorasInputElem = d.querySelector('#tempo-horas-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const distanciaKm = Number(distanciaKmInputElem.value);
    const tempoHoras = Number(tempoHorasInputElem.value);

    const calcularVelMediaResult = calcularVelocidadeMedia(distanciaKm, tempoHoras);
    const mostrarVelMediaElem = d.querySelector('#mostrar-velocidade-media');

    mostrarVelMediaElem.innerText = `
        Distancia: ${calcularVelMediaResult.distanciaKm}km
        Tempo: ${calcularVelMediaResult.tempoHoras} horas
        Velocidade Média: ${calcularVelMediaResult.velocidadeMedia}km/h
    `;
});

function calcularVelocidadeMedia(distanciaKm, tempoHoras) {
    const velocidadeMedia = distanciaKm / tempoHoras;

    return {velocidadeMedia, distanciaKm, tempoHoras};
};