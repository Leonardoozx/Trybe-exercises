const INITIAL_STATE = {
  colors: [ 'white', 'black', 'red', 'green', 'blue', 'yellow' ],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1
          ? state.colors.length - 1
          : state.index + 1,
      }
    case 'RANDOM_COLOR':
      return {
        ...state,
        index: state.colors.length - 1,
      }
    default:
      return {
        ...state,
        index: state.index === 0 ? 0 : state.index - 1,
      }
  }
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store)

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const randomColorBtn = document.getElementById('random');

nextBtn.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

previousBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});


function criarCor() {
  const oneChar = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[ aleatorio() ];
  }
  return cor;
}

randomColorBtn.addEventListener('click', () => {
  const oneChar = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[ aleatorio() ];
  }
  const { colors } = store.getState();
  colors.push(cor);
  store.dispatch({ type: 'RANDOM_COLOR' });
});

store.subscribe(() => {
  const { colors, index } = store.getState();

  const container = document.getElementById('container');
  const value = document.getElementById('value');

  value.innerText = colors[ index ];
  container.style.backgroundColor = colors[ index ];

  if (colors[ index ] === 'black') {
    container.style.color = 'white';
  } else {
    container.style.color = 'black';
  }

});

