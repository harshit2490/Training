import React, { useState, useEffect, useRef } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef('')
  const prevName = useRef('')

  useEffect(() => {   // It also stores previous value
    prevName.current = name
  }, [name])

  return (
    <>
      <div className="App">
        <p style={{color:'red'}}>Using useRef()</p>
        <input ref={inputRef.current} value={name} onChange={(e) => setName(e.target.value)} />
        <div className="text">My name is {name}</div>

        <hr />
        <p style={{color:'red'}}>Using useEffect()</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>Current text - {name} and Previous text - {prevName.current}</div>
      </div>
    </>
  );
}

export default App;
// Tutorial: https://www.youtube.com/watch?v=t2ypzz6gJm0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=4