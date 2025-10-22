import { describe, test, expect } from 'vitest';
import { subtrair, multiplicar, somar, dividir } from './calculadora';

describe('soma', () => {
    test('testa soma de dois numeros inteiros', () => {
        const input1 = 2;
        const input2 = 4;
        const expectedResult = 6;

        const result = somar(input1, input2);
        
        expect(result).toBe(expectedResult);
    });

    test('testa se somar com string retorna NaN', () => {
        const input1 = 2;
        const input2 = '4';
        const expectedResult = NaN;

        const result = somar(input1, input2);

        expect(result).toBe(NaN);
    });

    test('testa se é possivel somar com float', () => {
        const input1 = 25.25;
        const input2 = 2;
        const expectedResult = 27.25;

        const result = somar(input1 + input2);

        expect(result).toBe(expectedResult);
    });

});

describe('subtracao', () => {
    test('testa subtracao de dois numeros inteiros', () => {
        const input1 = 2;
        const input2 = 4;
        const expectedResult = -2;

        const result = subtrair(input1, input2);
        
        expect(result).toBe(expectedResult);
    });

    test('testa se subtracao com string retorna NaN', () => {
        const input1 = 2;
        const input2 = '4';
        const expectedResult = NaN;

        const result = subtrair(input1, input2);

        expect(result).toBe(expectedResult);
    });

    test('testa se é possivel subtrair booleans', () => {
        const input1 = false;
        const input2 = true;
        const expectedResult = -1;

        const result = subtrair(input1 + input2);

        expect(result).toBe(expectedResult);
    });

});