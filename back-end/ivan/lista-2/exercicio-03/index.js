const d = document;
const percentualImposto = 0.12;

const valorInputElement = d.querySelector('#valor-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const valorCalculado = calcularImposto(Number(valorInputElement.value));
    const mostrarValorElement = d.querySelector('#mostrar-valor');

    mostrarValorElement.innerText = `
        Preço Original: R$${valorCalculado.precoOriginal.toFixed(2)}
        Percentual de Imposto: ${valorCalculado.percentualImposto * 100}%
        Valor dos Impostos: R$${valorCalculado.valorImposto.toFixed(2)}
        Preço Final: R$${valorCalculado.precoFinal.toFixed(2)}
    `;
});

function calcularImposto(precoOriginal) {
    let precoFinal = precoOriginal + (precoOriginal * percentualImposto);
    let valorImposto = precoFinal - precoOriginal;

    precoFinal = Number(precoFinal.toFixed(2));
    valorImposto = Number(valorImposto.toFixed(2));

    return {precoFinal, precoOriginal, valorImposto, percentualImposto};
};