const d = document;

const valorInputElement = d.querySelector('#valor-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const valorCalculado = calcularImposto(Number(valorInputElement.value));
    const mostrarValorElement = d.querySelector('#mostrar-valor');

    mostrarValorElement.innerText = `Valor Calculado: ${valorCalculado.precoFinal}`;
});

function calcularImposto(precoOriginal) {
    let precoFinal = precoOriginal + (precoOriginal * percentualImposto);
    let valorImposto = precoFinal - precoOriginal;

    precoFinal = Number(precoFinal.toFixed(2));
    valorImposto = Number(valorImposto.toFixed(2));

    return {precoFinal, precoOriginal, valorImposto, percentualImposto};
};