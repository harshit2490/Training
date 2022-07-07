import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [input, setInput] = useState();
  const [weather, setWeather] = useState();

  // This useEffect() Loads pre loaded data of India while loading...
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=India&aqi=no`
      )
      .then((data) => setWeather(data.data))
      .catch((err) => console.log(err));
  }, []);


  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=${input}&aqi=no`
      )
      .then((data) => setWeather(data.data))
      .catch((err) => console.log(err));
  };

  console.log(weather);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={inputHandler} />
        <button onClick={searchHandler}>Search</button>
        {weather && (
          <div>
            <p>{weather.location.name}</p>
            <p>{weather.location.country}</p>
            <p>{weather.current.temp_c}</p>
            <img
              src={weather.current.condition.icon}
              alt="weather condition image"
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
