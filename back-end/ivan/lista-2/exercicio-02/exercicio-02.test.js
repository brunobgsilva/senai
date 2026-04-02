const converterMoeda = require("./exercicio-02");

describe("Conversão de moeda USD para BRL", () => {
    test("Deve conter corretamente 50 USD para reais com cotação 5.20", () => {
        const resultado = converterMoeda(50,5.20);
        expect(resultado.valorUSD).toBe(50);
        expect(resultado.cotacao).toBe(5.20);
        expect(resultado.valorBRL).toBe(260);
    });
});