import './App.css';
import Shop from './Shop';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"> 
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
