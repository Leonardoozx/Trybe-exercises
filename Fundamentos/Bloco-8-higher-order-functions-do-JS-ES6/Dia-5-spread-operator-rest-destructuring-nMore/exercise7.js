// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring.

const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

const filterNames = (x, nome) => x.filter((x) => x.name === nome );
console.log(filterNames(ships, 'Titanic'));
// escreva shipLength abaixo
console.log('---------------------')
const shipLength = (x) => x.map(({name: shipName, length, measurementUnit}) => `${shipName} is ${length} ${measurementUnit} long`);
console.log(shipLength(ships));

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'