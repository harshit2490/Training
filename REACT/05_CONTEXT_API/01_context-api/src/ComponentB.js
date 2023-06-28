import { useContext } from "react";
import { MyContext } from "./MyContext";

const ComponentB = () => {
  const { message, setMessage } = useContext(MyContext);

  const handleMsg = () => {
    setMessage("New message from Component-B");
  };

  return (
    <div>
      <h1>Component-B</h1>
      <div className="message">
        <h2>{message}</h2>
        <button onClick={handleMsg}>Change Message</button>
      </div>
    </div>
  );
};

export default ComponentB;
