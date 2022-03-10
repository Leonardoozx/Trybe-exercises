// Refatorando exercício 1

// const a = 5;
// const b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

function matematica(numero1, numero2, operator) {
    if (operator === '+') {
        return numero1 + numero2;
    }
    else if (operator === '-') {
        return numero2 - numero1;
    }
    else if (operator === '/') {
        return numero1 / numero2;
    }
    else if (operator === '*') {
        return numero1 * numero2;
    }
    else if (operator === '**') {
        return numero1 ** numero2;
    }
    else {
        return numero1 % numero2;
    }

}
console.log(matematica(3, 15, ''));

// Refatorando exercício 2

// const aa = 6;
// const bb = 2;

// if (aa > bb) {
//     console.log(aa);
// }
// else {
//     console.log(bb)
// }

function higherOrLess(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
console.log(higherOrLess(4.5, 4.4));

// Refatorando exercício 3

// const num1 = 3;
// const num2 = 6;
// const num3 = 9;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3);
// }

function higherNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return (num1);
    }
    else if (num2 > num1 && num2 > num3) {
        return (num2);
    }
    return (num3);
}
console.log(higherNum(6, 9, 15));

// Refatorando exercício 4

// if (valor > 0) {
//     console.log("positive");
// }
// else if (valor < 0) {
//     console.log("negative");
// }
// else {
//     console.log(zero);
// }

function positiveOrNegative(vallue) {
    if (vallue > 0) {
        return ("positive");
    }
    else if (vallue < 0) {
        return ("negative");
    }
        return ('zero');
}
console.log(positiveOrNegative(0));

// // Exercício 5

// const anguloA = 60;
// const anguloB = 60;
// const anguloC = 60;
// let triangulo = anguloA + anguloB + anguloC;

// if (triangulo === 180) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

function triangulo (anguloA, anguloB, anguloC) {
    if (anguloA + anguloB + anguloC === 180) {
        return(true);
    }
    return(false);
}
console.log(triangulo(36, 72, 72));