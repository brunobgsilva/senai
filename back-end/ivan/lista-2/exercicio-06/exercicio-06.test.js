const { calcularTempoProducao } = require("./exercicio-06");

describe("Cálculo de tempo de produção", () => {
    test("Deve calcular corretamente o tempo para 150 pares com 1 máquina", () => {
        const resultado = calcularTempoProducao(150,1);
        expect(resultado.quantidadePecas).toBe(150);
        expect(resultado.maquinas).toBe(1);
        expect(resultado.producaoPorHoraTotal).toBe(15);
        expect(resultado.horasNecessarias).toBe(10);
    });

    test("Deve calcular corretamente o tempo para 150 pares com 1 máquina", () => {
        const resultado = calcularTempoProducao(150,3);
        expect(resultado.producaoPorHoraTotal).toBe(45);
        expect(resultado.horasNecessarias).toBe(3.33);
    });

    test("Deve calcular corretamente o tempo para 150 pares com 1 máquina", () => {
        const resultado = calcularTempoProducao(30,2);
        expect(resultado.horasNecessarias).toBe(1);
    });
});