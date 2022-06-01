import React from "react";

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

class App extends React.Component {
  state = {
    email: '',
  };

  handleInputChange = ({target: {value}}) => {
    this.setState({ email: value })
  }

  render() {
    const { email } = this.state;
    const { handleInputChange } = this;
    return (
      <div className="App">
        <div>
          <input
            value={email}
            onChange={ handleInputChange }
          />
          <div>{verifyEmail(email)
            ? (
              <p style={{color: 'green'}}>Email Válido</p>
            )
            : (
              <p style={{color: 'red'}}>Email Inválido</p>
            )
            }</div>

        </div>
      </div>
    );
  }
}

export default App;
