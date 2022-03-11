// Exercício 1

console.log('----------------------- Exercício 1 -----------------------');

function palindromo(sameName) {
    if (sameName.split('').reverse('').join('') == sameName) {
        return true;
    }
    return false;
}

console.log(palindromo('ana'));

// Exercício 2 

console.log('----------------------- Exercício 2 -----------------------');

function integerArray(test) {
    let maiorNum = 0;
    for (let i = 0; i < test.length; i += 1) {
        if (test[i] > maiorNum) {
            maiorNum = test[i];
        }
    }
    let index = test.findIndex((n) => n == maiorNum);
    return index;
}
const arrayTest = [2, 3, 6, 7, 10, 1];
console.log(integerArray(arrayTest));

// Exercício 3

//console.log('----------------------- Exercício 3 -----------------------');



// Exercício 4

//console.log('----------------------- Exercício 4 -----------------------');

