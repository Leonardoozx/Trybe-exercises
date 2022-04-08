console.log('---------------------------- some ----------------------------');

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nome) => arr.some((n) => n === nome);
console.log(hasName(names, 'Ana'));

// Duas formas de fazer o exercício.

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//  return arr.some((n) => n === name);
// }

// console.log(hasName(names, 'Cláudia'));

console.log('---------------------------- every --------------------------');

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

// const verifyAges = (arr, minimumAge) => arr.some((n) => n.age === minimumAge);
// console.log(verifyAges(people, 16))

  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
     return arr.some((n) => n.age === minimumAge);
  }
  // false
  console.log(verifyAges(people, 21));
  // true
  console.log(verifyAges(people, 23));