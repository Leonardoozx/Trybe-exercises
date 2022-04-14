// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

const filterPeople = (x) => x.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);
console.log(filterPeople(people));

// Tive muita dificuldade de conseguir entender o porque que o obj desestruturado ficou como parametro alí no filter, tive que olhar o gabarito, para os próximos, vou fazer mais testes antes de me render ao gabarito;
