const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (s, g) => s.map((y, z) => ({name: s[z], grades: g[z].reduce((acc, value) => acc + value / g[z].length, 0)}));
console.log(studentAverage(students, grades));
