import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {

  const [input, setInput] = useState();
  const [weather, setWeather] = useState();


  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = () => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=f62cbc5c890e4e5e8ff53532220607&q=${input}&aqi=no`
      )
      .then((data) => setWeather(data.data))
      .catch((err) => console.log(err));
  };

  console.log(weather);

  return (
    <div className="app">
      <div className="page-margin">
        <div className="search">
          <h2>Weather Forecast</h2>
          <br />
          <input   // INPUT Button
            type="text"
            placeholder="Enter Location"
            onChange={inputHandler} /><br /><br />
          <button className='button' onClick={searchHandler}>Search</button>
        </div>

        {weather && (
          <div className="conatiner">
            <div className="top">
              <div className="location">
                <h2>{weather.location.name}</h2>
                <p>{weather.location.country}</p>
              </div>
              <div className="temp">
                <p>Temperature: {weather.current.temp_c} <sup>o</sup>C</p>
              </div>
              <div className="wind">
                <p>Wind Speed: {weather.current.wind_kph} km/hr</p>
              </div>
              <div className="pressure">
                <p>Pressure: {weather.current.pressure_mb} MiliBar</p>
              </div>
              <div className="cloud">
                <p>Cloud: {weather.current.cloud} %</p>
              </div>
              <div class="weather-icon">
                <img
                  src={weather.current.condition.icon}
                  alt={weather}
                />
                <p>Condition: {weather.current.condition.text}</p>
              </div>
            </div>

            <div className="bottom">
              <div className="feels">
                <p className="bold">{weather.current.temp_f} <sup>o</sup>F</p>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                <p className="bold">{weather.current.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{weather.current.wind_mph}MPH</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
