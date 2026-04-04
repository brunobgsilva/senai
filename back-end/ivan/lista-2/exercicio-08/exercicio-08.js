function calcularAreaTerreno(largura, comprimento) {
    const area = largura * comprimento;

    return {area, largura, comprimento}
};

if (typeof module !== "undefined") {
    module.exports = { calcularAreaTerreno };
};