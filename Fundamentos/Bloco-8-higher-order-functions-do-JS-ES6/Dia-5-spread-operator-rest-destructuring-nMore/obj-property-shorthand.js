// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .

// ------------- Before refactoring

// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude});

// console.log(getPosition(-19.8157, -43.9542));

// ------------- After refactoring

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));