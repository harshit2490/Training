import "./App.css";
import { MyProvider } from "./MyContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <ComponentA />
        <hr/>
        <ComponentB />
      </MyProvider>
    </div>
  );
}

export default App;
