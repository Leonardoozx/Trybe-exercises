// // apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => {
//       const opa = data.joke;
//       const h2 = document.querySelector('h2');
//       h2.innerText = opa
//     });
// };

// window.onload = () => fetchJoke();

const apiUrl = 'https://api.coincap.io/v2/assets';

const showCrypto = () => {
  fetch(apiUrl)
    .then((x) => x.json())
    .then((dat) => {
      const { data } = dat;
      const coins = [];
      for (let i = 0; i < 10; i += 1) {
        coins.push(data[i]);
      }
      const ol = document.querySelector('ol');
      const create = document.createElement('li');
      console.log(coins)
      const coinsNames = coins.map((y) => y.id);
      console.log(coinsNames)
    });
};

window.onload = () => showCrypto();
