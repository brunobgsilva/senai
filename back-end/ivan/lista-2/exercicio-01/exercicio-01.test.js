const calcularJurosCompostos = require("./exercicio-01");

describe("Cálculo de Juros Compostos", () => {
    test("deve calcular corretamente o valor final após 12 meses", () => {
        const resultado = calcularJurosCompostos(1000, 12);
        expect(resultado.valorInicial).toBe(1000);
        expect(resultado.meses).toBe(12);
        expect(resultado.valorFinal).toBe(1195.62);
        expect(resultado.juros).toBe(195.62);
    });
});