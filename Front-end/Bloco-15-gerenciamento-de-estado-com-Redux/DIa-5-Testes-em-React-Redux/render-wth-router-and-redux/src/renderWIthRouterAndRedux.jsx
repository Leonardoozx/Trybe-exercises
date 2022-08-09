import React from 'react';
import { createMemoryHistory } from 'history';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const CHANGE_NAME = 'CHANGE_NAME';

// const action = (newName) => ({ type: CHANGE_NAME, newName });

const reducer = (state = { name: 'Leonardo', age: '18'}, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        newName: 'novo nome',
      };  
    default:
    return { ...state, newName: 'nome antigo' };    
  }
};

const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    initialEntries = ['/'],
    history = createMemoryHistory({initialEntries}),
  } = {},
) => ({ ...render(
  <Router history={ history }>
    <Provider store={ store }>
      {component}
    </Provider>
  </Router>
), store, history});

export default renderWithRouterAndRedux;
