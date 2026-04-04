const { calcularConsumo } = require("./exercicio-07");

describe("Cálculo de consumo médio de combustível", () => {
    test("Deve calcular corretamente o consumo médio", () => {
        const resultado = calcularConsumo(300,25);
        expect(resultado.distanciaKm).toBe(300);
        expect(resultado.combustivelLitros).toBe(25);
        expect(resultado.consumoMedio).toBe(12);
    });

    // desafio adicional comentado abaixo
    
    // test("deve calcular corretamente a autonomia estimada", () => {
    //     const resultado = calcularConsumo(300, 25, 10);
    //     expect(resultado.consumoMedio).toBe(12);
    //     expect(resultado.autonomiaEstimada).toBe(120);
    // });

    test("deve calcular corretamente outro exemplo", () => {
        const resultado = calcularConsumo(200, 20);
        expect(resultado.consumoMedio).toBe(10);
    });
});
