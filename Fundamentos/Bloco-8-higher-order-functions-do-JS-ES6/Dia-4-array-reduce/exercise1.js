const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(x) {
    const reducedArray = x.reduce((y, z) => y.concat(z));
    // reducedArray.push('opa')
    return reducedArray;
};
console.log(flatten(arrays));