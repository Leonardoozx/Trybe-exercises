const { sum, myRemove, myFizzBuzz, encode, decode } = require('./sum');

describe('Testing the sum function', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(/numbers/);
  }); // Não esquecer que para verificar exceções, é necessário 'envelopar' a função

  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(/parameters/);
  });

});

describe('Testing the myRemove function', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([
      1, 2, 3, 4
    ], 3));
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([
      1, 2, 3, 4
    ], 3)).not.toContain(3);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([
      1, 2, 3, 4
    ], 5));
  });
});

describe('Testing myFizzBuzz function', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toEqual(myFizzBuzz(3));
  });

  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(2).toEqual(myFizzBuzz(2));
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toEqual(myFizzBuzz('15'));
  });
});

describe('Testing encode and decode functions from the project Playground Functions', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function') && expect(typeof decode).toBe('function');
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect('12345').toEqual(encode(['a', 'e', 'i', 'o', 'u']));
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect('aeiou').toEqual(decode('12345'));
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('rgb').toEqual(encode('rgb')) && expect('').toBe(decode(6789));
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect().toEqual(encode('rgb')) && expect('').toBe(decode(6789));
  });
  
});
