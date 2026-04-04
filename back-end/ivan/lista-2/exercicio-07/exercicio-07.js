function calcularConsumo(distanciaKm, combustivelLitros ) {
    const consumoMedio = distanciaKm / combustivelLitros;

    return {consumoMedio, distanciaKm, combustivelLitros};
};

if (typeof module !== "undefined") {
    module.exports = { calcularConsumo };
};