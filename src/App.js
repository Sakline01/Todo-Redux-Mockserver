import "./App.css";
import Counter from "./components/counter/Counter";
import Todos from "./components/Todo/Todos";


const App = () => {
  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
