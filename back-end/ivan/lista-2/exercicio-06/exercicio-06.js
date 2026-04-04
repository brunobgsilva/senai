const producaoPorHora = 15;

function calcularTempoProducao(quantidadePecas, maquinas) {
    const producaoPorHoraTotal = producaoPorHora * maquinas;

    let horasNecessarias = quantidadePecas / producaoPorHoraTotal;

    horasNecessarias = Number(horasNecessarias.toFixed(2));

    return { quantidadePecas, maquinas, horasNecessarias, producaoPorHoraTotal }
};

if (typeof module !== "undefined") {
    module.exports = { calcularTempoProducao };
};