const { calcularImposto } = require('./exercicio-03'); 

describe("Cálculo de imposto sobre o produto", () => {
    test("Deve aplicar 12% para produto de R$ 200", () => {
        const resultado = calcularImposto(200);
        expect(resultado.precoOriginal).toBe(200);
        expect(resultado.percentualImposto).toBe(0.12);
        expect(resultado.valorImposto).toBe(24);
        expect(resultado.precoFinal).toBe(224);
    });

    // Desafio adicional abaixo

    // test("Deve aplicar 5% para produto de R$ 40", () => {
    //     const resultado = calcularImposto(40);
    //     expect(resultado.percentualImposto).toBe(0.05);
    //     expect(resultado.precoFinal).toBe(42);
    // });
});