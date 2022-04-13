const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// lesson2.turno = 'noite'
// console.log(lesson2);

console.log(`--------------- 1 ---------------`);

const modifyObjects = (obj, newKey, value) => {
    const keys = newKey
    obj[keys] = value;
    console.log(obj);
}
modifyObjects(lesson2, 'turno', 'noite');

console.log(`--------------- 2 ---------------`);

const listObjects = obj => {
    console.log(Object.keys(obj));
};
listObjects(lesson1);

console.log(`--------------- 3 ---------------`);

const showObjLength = obj => {
    console.log(`O tamanho desse objeto é ${Object.keys(obj).length}. | Lembre-se que para acessar posições é necessário diminuir um número do tamanho total, pois o primeiro indice inicia-se em 0`);
}
showObjLength(lesson3);

console.log(`--------------- 4 ---------------`);

const listObjectsValues = obj => {
    console.log(Object.values(obj));
};
listObjectsValues(lesson1);

console.log(`--------------- 5 ---------------`);

