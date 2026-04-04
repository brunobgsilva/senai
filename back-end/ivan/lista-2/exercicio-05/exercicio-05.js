function dividirLucro(lucroTotal, quantidadeSocios = 3) {
    const valorPorSocio = lucroTotal / quantidadeSocios;

    return { lucroTotal, valorPorSocio, quantidadeSocios }
};

if (typeof module !== "undefined") {
    module.exports = { dividirLucro };
};