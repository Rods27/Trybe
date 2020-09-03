function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('myFizzBuzz', () => {
	test('verifica se o num divisivel por 3 e 5 retorna fizzbuzz', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});
	test('verifica se o num divisivel por 3 e 5 retorna fizzbuzz', () => {
		expect(myFizzBuzz(3)).toBe('fizz');
	});
	test('verifica se o num divisivel por 3 e 5 retorna fizzbuzz', () => {
		expect(myFizzBuzz(5)).toBe('buzz');
	});
	test('verifica se retorna o mesmo numero caso nao seja divisivel por ninguem', () => {
		expect(myFizzBuzz(11)).toBe(11)
	});
  test('verifica se o erro retornado e o esperado', () => {
    expect(myFizzBuzz('4')).toBeFalsy
  });
});