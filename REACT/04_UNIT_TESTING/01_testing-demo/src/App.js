import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="App">
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;
