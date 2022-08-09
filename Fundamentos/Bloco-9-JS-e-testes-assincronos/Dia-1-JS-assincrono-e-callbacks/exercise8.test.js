const { getPokemonDetails } = require('./exercise8');

describe('Testa a função getPokemonDetails', () => {
    test('verifica se função retorna os valores corretos', (done) => {
        const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'
        function callback(erro, resultado) {
            try {
                expect(resultado).toBe(expectedString);
                done();
            } catch (error) {
                done(error);
            }
        }
        getPokemonDetails((x) => x.name === 'Charmander', callback);
    });
    test('Verifica se a função retorna uma mensagem de erro', (done) => {
        const expectedError = new Error('Não temos esse pokémon para você :(');
        function callback(erro, success) {
            try {
                expect(erro).toEqual(expectedError);
                // console.log(erro);
                done()
            } catch (err) {
                done(err);
            }
        }
        getPokemonDetails((x) => x.name === 'Leonardo', callback);
    });
});