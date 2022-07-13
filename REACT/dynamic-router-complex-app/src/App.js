import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Weather from './Components/Weather';
import Shop from './Components/Shop';
import Props from './Components/Props';
import ItemDetail from './Components/ItemDetail';


function App() {
  // passing values for using props...
  let expenseDate = new Date(2022, 6, 22);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route path="/props" element={<Props
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;