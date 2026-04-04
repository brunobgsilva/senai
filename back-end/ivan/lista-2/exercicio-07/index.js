const d = document;

const distanciaInputElem = d.querySelector('#distancia-input');
const combustivelInputElem = d.querySelector('#combustivel-litros-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const distancia = Number(distanciaInputElem.value);
    const combustivelLitros = Number(combustivelInputElem.value);

    const calcularConsumoResult = calcularConsumo(combustivelLitros, distancia);
    const mostrarConsumoElem = d.querySelector('#mostrar-consumo');

    mostrarConsumoElem.innerText = `
        Distancia: ${calcularConsumoResult.distanciaKm}km
        Combustivel: ${calcularConsumoResult.combustivelLitros}L
        Consumo Médio por KM: ${calcularConsumoResult.consumoMedio.toFixed(2)}L
    `;
});

function calcularConsumo(distanciaKm, combustivelLitros ) {
    const consumoMedio = distanciaKm / combustivelLitros;

    return {consumoMedio, distanciaKm, combustivelLitros};
};