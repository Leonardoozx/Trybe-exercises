// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

// uppercase('leonardo', console.log);

describe('Testa se a função retorna letras em maiúsculo', () => {
    test('A função uppercase retorna letras em maiúsculo', (done) => {
        uppercase('leonardo', (result) => {
            try {
                expect(result).toBe('LEONARDO');
                done();
            } catch (err) {
                done(err);
            }
        });
    });
});