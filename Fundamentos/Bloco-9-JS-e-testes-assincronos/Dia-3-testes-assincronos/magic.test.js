const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

// console.log(favoriteCards)

const retrievesFavoriteCards = () => {
  const favoriteCardsLenght = favoriteCards.length;
  for (let i = favoriteCardsLenght; i > 4; i -= 1) {
    favoriteCards.pop();
  }
};
// retrievesFavoriteCards();

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => {
    return retrievesFavoriteCards();
  });
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length === 5).toBe(true);
    function getLastMagicCard(x) {
      return favoriteCards[ x - 1 ];
    }
    const lastMagicCard = getLastMagicCard(favoriteCards.length);
    expect(lastMagicCard).toHaveProperty('name', 'Beacon of Immortality');
    await saveFavoriteMagicCard(130554);
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect.assertion(2);
    expect(favoriteCards).toHaveLength(4);
    const favoriteCardsNames = favoriteCards.map((x) => x.name);
    const expectedResult = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(favoriteCardsNames).toEqual(expectedResult);

require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    // console.log(response);
    expect(response.name).toBe("Ancestor's Chosen");
  });
  it('Implemente um teste que verifique se getMagicCard é uma função.', () => {
    expect(typeof getMagicCard).toBe("function");
  });
  it('Implemente um teste que verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada.', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });
  it('Implemente um teste que verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550"', async () => {
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Implemente um teste que verifique se o retorno da função getMagicCard é igual ao objeto card.', async () => {
    const response = await getMagicCard('130550');
    const { name, manaCost, types, subtypes, rarity} = response;
    expect(name).toEqual(card.name);
    expect(manaCost).toEqual(card.manaCost);
    expect(types).toEqual(card.types);
    expect(subtypes).toEqual(card.subtypes);
    expect(rarity).toEqual(card.rarity);
  });
  it('Implemente um teste que verifica se, ao chamar a função getMagicCard com o argumento "idDesconhecido", retorna um erro com a mensagem: "Id is not found!"', async () => {
    await expect(getMagicCard('idDesconhecido')).resolves.toThrowError('Id is not found!');
  });
});
