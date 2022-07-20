import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);
  // [] ---> it's a 2nd parameter array...
  // whenever 'resourceType' changes useEffect function renders again...

  return (
    <>
      <div className="App">
        <h2>UseEffect()</h2>

        <p>
          Calling API from -
          <a 
            href="https://jsonplaceholder.typicode.com" target="_blank"> https://jsonplaceholder.typicode.com
          </a>
        </p>
        
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        <hr />
        {items.slice(0, 3).map(item => {
          return <p> {JSON.stringify(item)} <hr /></p>
        })}

      </div>
    </>
  );
}

export default App;
// Tutorial: https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2