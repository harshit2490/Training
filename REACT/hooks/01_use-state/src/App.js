import React, { useState } from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(5)
  const [theme, setTheme] = useState('Blue')
  // count ----> it updates a current state
  // setCount ----> allows us to update the state

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('Green')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('Red')
  }

  return (
    <>
      <div className="App">
        <h2>UseState()</h2>
        <button onClick={decrementCount}>-</button>
        <span> {count} </span>
        <span> {theme} </span>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}

export default App;

// Tutorial: https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=1