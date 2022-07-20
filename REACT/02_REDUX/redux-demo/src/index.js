import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from "redux";  // Global Store

// Increment Action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

// Decrement Action
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};


// Reducer
const counter = (state = 0, action) => {  
  // action counters while dispatch method called...
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}


let store = legacy_createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));


// Dispatch
store.dispatch(increment());  // state 0+1 = 1
store.dispatch(increment());  // state 1+1 = 2
store.dispatch(increment());  // state 2+1 = 3
store.dispatch(decrement());  // state 3-1 = 2
store.dispatch(decrement());  // state 2-1 = 1
store.dispatch(decrement());  // state 1-1 = 0


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);