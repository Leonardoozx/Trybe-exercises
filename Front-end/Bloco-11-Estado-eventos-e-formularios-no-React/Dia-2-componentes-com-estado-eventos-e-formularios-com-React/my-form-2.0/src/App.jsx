import React from 'react';
import './Style.css'
import Form from './Form'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          Leonardo's Form
        </header>
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
