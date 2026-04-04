function calcularVelocidadeMedia(distanciaKm, tempoHoras) {
    const velocidadeMedia = distanciaKm / tempoHoras;

    return {velocidadeMedia, distanciaKm, tempoHoras};
};

if (typeof module !== "undefined") {
    module.exports = { calcularVelocidadeMedia };
};