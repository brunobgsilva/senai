const percentualImposto = 0.12;

function calcularImposto(precoOriginal) {
    let precoFinal = precoOriginal + (precoOriginal * percentualImposto);
    let valorImposto = precoFinal - precoOriginal;

    precoFinal = Number(precoFinal.toFixed(2));
    valorImposto = Number(valorImposto.toFixed(2));

    return {precoFinal, precoOriginal, valorImposto, percentualImposto};
};

if (typeof module !== "undefined") {
    module.exports = { calcularImposto };
};