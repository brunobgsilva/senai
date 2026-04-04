const { calcularVendaComFrete } = require("./exercicio-04");

describe("Cálculo de venda com frete", () => {
    test("Deve calcular corretamente o valor total da compra", () => {
        const resultado = calcularVendaComFrete(150);
        expect(resultado.valorProdutos).toBe(150);
        expect(resultado.frete).toBe(20);
        expect(resultado.valorTotal).toBe(170);
    });

    test("Deve calcular corretamente para produtos de R$ 80", () => {
        const resultado = calcularVendaComFrete(80);
        expect(resultado.valorTotal).toBe(100);
    });
});