import React from 'react';

class Home extends React.Component {
  render() {
    const srcPart1 = '//avatars.githubusercontent.com/';
    const srcPart2 = 'u/99770247?s=400&u=ca0aece2a0422f23cb4f61f89856034696f19504&v=4';
    const fullSrc = srcPart1 + srcPart2;
    return (
      <div>
        <h2>
          Leonardo Guimarães Urci
        </h2>
        <img
          src={ fullSrc }
          alt="Leonardo Guimaraẽs"
        />
        <p data-testid="little-description">
          Meu nome é Leonardo, tenho 18 anos, moro em Carapicuíba - SP
        </p>
      </div>
    );
  }
}

export default Home;
