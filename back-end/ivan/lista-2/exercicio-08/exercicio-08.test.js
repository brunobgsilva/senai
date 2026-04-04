const { calcularAreaTerreno } = require("./exercicio-08");

describe("Cálculo da área de terreno", () => {
    test("deve calcular corretamente a área do terreno", () => {
        const resultado = calcularAreaTerreno(10, 20);
        expect(resultado.largura).toBe(10);
        expect(resultado.comprimento).toBe(20);
        expect(resultado.area).toBe(200);
    });

    // desafio adicional comentado abaixo

    // test("deve calcular corretamente o valor estimado do terreno", () => {
    //     const resultado = calcularAreaTerreno(10, 20, 500);
    //     expect(resultado.area).toBe(200);
    //     expect(resultado.valorMetroQuadrado).toBe(500);
    //     expect(resultado.valorTerreno).toBe(100000);
    // });

    test("deve calcular outra área corretamente", () => {
        const resultado = calcularAreaTerreno(15, 30);
        expect(resultado.area).toBe(450);
    });
});