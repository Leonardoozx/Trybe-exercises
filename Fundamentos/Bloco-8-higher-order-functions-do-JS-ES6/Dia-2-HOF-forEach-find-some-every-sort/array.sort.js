const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui

// Ordem crescente:
people.sort((x, y) => x.age - y.age);

//Ordem decrescente:
// people.sort((x, y) => y.age - x.age);

console.log(people);