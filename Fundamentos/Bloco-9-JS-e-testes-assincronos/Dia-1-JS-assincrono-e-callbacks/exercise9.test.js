// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

// console.log(getPokemonDetails);

describe("A função getPokemonDetails", () => {
    let shouldFail = false;
    function hackTheDb() {
        shouldFail = true;
    }
    function restartDb() {
        shouldFail = false;
    }
    beforeEach(restartDb);

    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
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

    it("retorna um pokemon que existe no banco de dados", (done) => {
        const success = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
        function callback(err, result) {
            try {
                expect(result).toBe(success);
                // done();
            } catch (erro) {
                // done(erro);
                console.log(erro);
            }
        }; 
        getPokemonDetails((x) => x.nome === 'Charmander', callback);
    });
});
