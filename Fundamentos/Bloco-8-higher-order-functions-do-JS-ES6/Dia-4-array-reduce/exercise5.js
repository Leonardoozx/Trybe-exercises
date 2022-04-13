const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// Escreva seu código aqui:

// A forma que eu pensei em fazer usando apenas o for tradicional:

// const namesSliced = names;
// const aaaa = () => {
//     let counter = 0;
//     for (let i = 0; i < namesSliced.length; i += 1) {
//         const opa = namesSliced[i].split('');
//         console.log(opa);
//         for (let i = 0; i<opa.length; i+= 1){
//             if(opa[i] === 'a' || opa[i] === 'A') {
//                 counter++;
//             }
//         }
//     }
//     return counter
// }
// console.log(aaaa());

const containsA = (x) => {
  const reducedArray = x.reduce((y, z) => y + z);
  const array = reducedArray.toUpperCase();
  const splitedArray = array.split('');
  const countArray = splitedArray.reduce((acc, b) => b === 'A' ? acc += 1 : acc);
  const splitCountArray = countArray.split('');
  return splitCountArray.length;
};
console.log(containsA(names));