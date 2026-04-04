const { calcularVelocidadeMedia } = require("./exercicio-10");

describe("Cálculo de velocidade média", () => {
    test("deve calcular corretamente a velocidade média com tempo em horas", () => {
        const resultado = calcularVelocidadeMedia(120, 2);
        expect(resultado.distanciaKm).toBe(120);
        expect(resultado.tempoHoras).toBe(2);
        expect(resultado.velocidadeMedia).toBe(60);
    });

    // desafio adicional comentado abaixo

    // test("deve calcular corretamente quando o tempo é informado em minutos", () => {
    //     const resultado = calcularVelocidadeMedia(120, 120, "min");
    //     expect(resultado.tempoHoras).toBe(2);
    //     expect(resultado.velocidadeMedia).toBe(60);
    // });

    test("deve calcular outro exemplo corretamente", () => {
        const resultado = calcularVelocidadeMedia(90, 1.5);
        expect(resultado.velocidadeMedia).toBe(60);
    });
});