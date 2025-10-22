import { expect, describe, test } from 'vitest';

import { add } from './math.js';

describe('add', () => {

  test('testa soma de ints', () => {
    const input = [2, 3];
    const expectedResult = 5;

    const result = add(input);

    expect(result).toBe(expectedResult);
  });

  test('testa se soma com strings retorna stringq', () => {
    const input = ['2', '3'];

    const result = add(input);

    expect(result).toBeTypeOf('string');
  });

});