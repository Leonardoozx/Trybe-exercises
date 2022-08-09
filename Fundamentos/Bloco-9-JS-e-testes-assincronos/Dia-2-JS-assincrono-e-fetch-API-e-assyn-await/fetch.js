// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const opa = await fetch(API_URL, myObject)
   const sim =  await opa.then(response => response.json())
   const obj = await sim.then(data => data);
   const obj1 = {
    piada: obj.joke,
   };
   console.log(obj1)
};

// window.onload = () => fetchJoke();
