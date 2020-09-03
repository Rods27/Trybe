function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('sum', () => {
  test('4 + 5 igual 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('0 + 0 igual 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
});

