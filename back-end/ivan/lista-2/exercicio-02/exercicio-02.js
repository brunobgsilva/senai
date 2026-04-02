function converterMoeda(valorUSD, cotacao) {
    const valorBRL = valorUSD * cotacao;
    return {valorUSD, valorBRL, cotacao};
};  

module.exports = converterMoeda;