// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach')); // Primeiro
afterEach(() => console.log('1 - afterEach')); // Quarto

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // Segundo
  afterEach(() => console.log('2 - afterEach')); // Quinto

  test('', () => console.log('2 - test')); // Terceiro
});

// Acertei 4 de 5