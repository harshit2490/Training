import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);    // select counter.js state from reducer
  const isLogged = useSelector((state) => state.isLogged);  // select logged.js state from reducer 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h4>Counter : {counter} </h4>
        <h4>Log Status : {isLogged}</h4>
      </header>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {isLogged ? <h3>Valuable Information</h3> : ""}
    </div>
  );
}

export default App;