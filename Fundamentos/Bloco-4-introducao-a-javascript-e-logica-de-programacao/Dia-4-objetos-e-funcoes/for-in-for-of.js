// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }
//-----------------------------------------------------------------//
// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   for (let index in car) {
//     console.log(index, car[index]); // colocando o index na frente, mostra também a chave
//   } 
//---------------------------------//
// for (let position in food) {
//     console.log(position);
//   };

//   let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// //resultado: hamburguer, bife, acarajé;
//   //resultado: 0, 1, 2;                  

// For/in percorre POSIÇÕES --- For/of percorre VALORES    
//--------------------------------//

// Para fixar

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let greeting in names) {
    console.log('Olá', names[greeting]);
}

// ------------------------------------- //

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let allAboutTheCars in car) {
    console.log('---------------');
    console.log(allAboutTheCars + ':', car[allAboutTheCars]);
}