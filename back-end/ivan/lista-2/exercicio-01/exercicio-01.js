const _taxaJuros = 1.5;

function calcularJurosComposto(valorInicial, meses) {
    let valorFinal = valorInicial * Math.pow(1 + (_taxaJuros/100), meses);    
    valorFinal = Number(valorFinal.toFixed(2));

    let juros = valorFinal - valorInicial;
    juros = Number(juros.toFixed(2));

    return {valorInicial, meses, valorFinal, juros};
};

module.exports = calcularJurosComposto;

