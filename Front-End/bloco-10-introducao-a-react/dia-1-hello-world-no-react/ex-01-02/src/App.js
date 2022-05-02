const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar Café', 'Meditar', 'Estudar', 'Almoçar'];

function App() {
  return (
    <div className="App">
      {tasks.map((task) => Task(task))}
    </div>
  );
}

export default App;
