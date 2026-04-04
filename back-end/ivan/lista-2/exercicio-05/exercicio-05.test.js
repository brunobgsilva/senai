const  { dividirLucro } = require("./exercicio-05");

describe("Divisão de lucros entre sócios", () => {
    test("Deve dividir corretamente R$9000 entre 3 sócios", () => {
        const resultado = dividirLucro(9000);
        expect(resultado.lucroTotal).toBe(9000);
        expect(resultado.quantidadeSocios).toBe(3);
        expect(resultado.valorPorSocio).toBe(3000);
    });
    
    test("Deve dividir corretamente R$1500 entre 3 sócios", () => {
        const resultado = dividirLucro(1500);
        expect(resultado.valorPorSocio).toBe(500);
    });
});