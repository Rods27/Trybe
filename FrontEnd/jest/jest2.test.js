function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

describe('myRemove', () => {
  test('retorna o array sem o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('verifica se nao retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('verifica se o array nao foi alterado', () => {
      const array = [1, 2, 3, 4];
      myRemove(array, 1);
      expect(array).toEqual([1, 2, 3, 4]);
    });
    test('verifica se o array esperado caso o item nao esteja no array', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });