const frete = 20;

function calcularVendaComFrete(valorProdutos) {
    valorProduto = Number(valorProdutos);

    const valorTotal = valorProdutos + frete;

    valorTotal.toFixed(2);
    
    return {valorProdutos, valorTotal, frete};
};

if (typeof module !== "undefined") {
    module.exports = { calcularVendaComFrete };
};
