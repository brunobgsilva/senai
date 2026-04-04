const { converterTemperatura } = require("./exercicio-09");

describe("Conversão de temperatura", () => {
    test("deve converter 25°C para Fahrenheit", () => {
        const resultado = converterTemperatura(25, "CtoF");
        expect(resultado.celsius).toBe(25);
        expect(resultado.fahrenheit).toBe(77);
    });

    test("deve converter 77°F para Celsius", () => {
        const resultado = converterTemperatura(77, "FtoC");
        expect(resultado.fahrenheit).toBe(77);
        expect(resultado.celsius).toBe(25);
    });

    test("deve converter 0°C para 32°F", () => {
        const resultado = converterTemperatura(0, "CtoF");
        expect(resultado.fahrenheit).toBe(32);
    });
});