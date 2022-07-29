import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isVisible, setVisibility] = useState(false);
  const [x, setX] = useState(false);

  const verifyMultiple = (x) =>
    x % 3 === 0 || x % 5 === 0 ? setX((isVisible) => !isVisible) : setX(false);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 50);
    setRandomNumber(randomNum);
    verifyMultiple(randomNum);
  }, [isVisible]);

  // useEffect(() => setInterval(() => setVisibility((xx) => !xx), 10000), []);

  return (
    <div className='App '>
      Random number: {`${randomNumber}`}
      <p>{x && 'ACEITO'}</p>
      <br />
      <br />
      <button onClick={() => setVisibility((x) => !x)}>OPAOPA</button>
    </div>
  );
}

export default App;
