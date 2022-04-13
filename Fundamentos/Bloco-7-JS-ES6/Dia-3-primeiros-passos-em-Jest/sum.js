function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number')
    return false;

  if (num % 3 === 0 && num % 5 === 0)
    return 'fizzbuzz';

  if (num % 3 === 0)
    return 'fizz';

  if (num % 5 === 0)
    return 'buzz';

  return num;
}

function encode(coding) {
  let codify = '';
  for (let i = 0; i < coding.length; i += 1) {
    if (coding[i] === 'a') {
      codify += 1;
    } else if (coding[i] === 'e') {
      codify += 2;
    } else if (coding[i] === 'i') {
      codify += 3;
    } else if (coding[i] === 'o') {
      codify += 4;
    } else if (coding[i] === 'u') {
      codify += 5;
    } else {
      codify += coding[i];
    }
  }
  return codify;
}

function decode(decoding) {
  let decodify = '';
  for (let i = 0; i < decoding.length; i += 1) {
    if (decoding[i] === '1') {
      decodify += 'a';
    } else if (decoding[i] === '2') {
      decodify += 'e';
    } else if (decoding[i] === '3') {
      decodify += 'i';
    } else if (decoding[i] === '4') {
      decodify += 'o';
    } else if (decoding[i] === '5') {
      decodify += 'u';
    } else {
      decodify += decoding[i];
    }
  }
  return decodify;
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode
};
