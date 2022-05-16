const arrayOfTasks = [ 'Limpar a casa', 'Fazer comida', 'Ir pra academia', 'Estudar na Trybe', 'Aprendner React', 'Procurar um emprego' ];

const mapingSomething = (x) => x.map((y) => {
  return (<li>{y}</li>);
})

const mapedArray = mapingSomething(arrayOfTasks);

function App() {
  return (
    <div>
      <h2>To Do List</h2>
      <ol>{mapedArray}</ol>
    </div>
  );
}

export default App;
