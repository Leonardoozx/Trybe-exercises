import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  state = {
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    },
  };

  moveCar = (car, side) =>  this.setState(({cars}) => ({ cars: { ...cars, [car]: side } } ));

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
