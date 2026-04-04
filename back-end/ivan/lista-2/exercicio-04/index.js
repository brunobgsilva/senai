const d = document;
const frete = 20;

const valorInputElement = d.querySelector('#valor-input');
const enviarButton = d.querySelector('#enviar-button');

enviarButton.addEventListener('click', () => {
    const valorCalculado = calcularVendaComFrete(Number(valorInputElement.value));
    const mostrarValorElement = d.querySelector('#mostrar-valor');

    mostrarValorElement.innerText = `
        Valor do Frete: R$${valorCalculado.frete.toFixed(2)}
        Valor dos Produtos: R$${valorCalculado.valorProdutos.toFixed(2)}
        Valor Calculado: R$${valorCalculado.valorTotal.toFixed(2)}
    `;
});

function calcularVendaComFrete(valorProdutos) {
    valorProduto = Number(valorProdutos);

    const valorTotal = valorProdutos + frete;

    valorTotal.toFixed(2);
    
    return {valorProdutos, valorTotal, frete};
};