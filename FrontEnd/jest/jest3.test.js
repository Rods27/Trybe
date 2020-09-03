function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('myRemoveWithoutCopy', () => {
  test('verifica se retorna o mesmo array sem o 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('verifica se nao retorna o array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
  test('verifica se o array passado foi alterado', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 1);
    expect(array).toEqual([2, 3, 4]);
  });
  test('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});