import { useContext } from "react";
import { MyContext } from "./MyContext";
import "./App.css";

const ComponentA = () => {
  const { count, incrementCount, decrementCount } = useContext(MyContext);

  return (
    <div>
      <h1>Component-A</h1>
      <div className="counter">
        <button onClick={decrementCount}> - </button>
        <p>{count}</p>
        <button onClick={incrementCount}> + </button>
      </div>
    </div>
  );
};

export default ComponentA;
