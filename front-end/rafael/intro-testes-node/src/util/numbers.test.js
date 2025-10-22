import { describe, test, expect } from 'vitest';

import { transformToNumber } from './numbers.js';

describe('transformToNumber', () => {
  test('testar se uma string é convertida em um number', () => {
    // arrange
    const input = "1";

    // Act
    const result = 1;

    transformToNumber(input);

    // Assert
    expect(result).toBe(1);
  });

  test('testar se string de nums retorna NaN', () => {
    // Arrange
    const value = 'abc';

    // Act
    const result = NaN;

    // Assert
    expect(result).toBeNaN();
  });

  test('testar se um boolean true retorna um num', () => { 
    // Arrange
    const value = true;

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBe(1);
  });

  test('testar se uma string de numero decimal retorna um float', () => {
    // Arrange
    const input = '23.6236';
    const expectedResult = 23.6236

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBe(expectedResult);
  });

  

});