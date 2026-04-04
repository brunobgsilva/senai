const d = document;
const producaoPorHora = 15;

const qtdMaquinasInputElem = d.querySelector('#qtd-maquinas-input');
const qtdPecasInputElem = d.querySelector('#qtd-pecas-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const qtdMaquinas = Number(qtdMaquinasInputElem.value);
    const qtdPecas = Number(qtdPecasInputElem.value);

    const calcTempoResult = calcularTempoProducao(qtdPecas, qtdMaquinas);
    const mostrarHorasElement = d.querySelector('#mostrar-horas');

    mostrarHorasElement.innerText = `
        Peças: ${calcTempoResult.quantidadePecas}
        Maquinas: ${calcTempoResult.maquinas}
        Horas Necessarias: ${calcTempoResult.horasNecessarias} horas
    `;
});

function calcularTempoProducao(quantidadePecas, maquinas) {
    const producaoPorHoraTotal = producaoPorHora * maquinas;

    let horasNecessarias = quantidadePecas / producaoPorHoraTotal;

    horasNecessarias = Number(horasNecessarias.toFixed(2));

    return { quantidadePecas, maquinas, horasNecessarias, producaoPorHoraTotal }
};