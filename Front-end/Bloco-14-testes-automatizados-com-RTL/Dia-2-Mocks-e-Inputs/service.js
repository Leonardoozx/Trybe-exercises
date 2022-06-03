const randomNumber = () => Math.floor(Math.random() * 100);

const toUpperCase = (str) => str.toUpperCase();

const theFirstLetter = (x) => x[ 0 ];

const twoStrIntoOne = (str1, str2) => `${str1} ${str2}`;

module.exports = {
  randomNumber,
  toUpperCase,
  theFirstLetter,
  twoStrIntoOne,
};