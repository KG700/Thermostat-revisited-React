import React from 'react';
import Temperature from './Temperature/Temperature';
import Controller from './Controller/Controller';
import PowerSavingMode from './PowerSavingMode/PowerSavingMode';
import WeatherCity from './WeatherCity/WeatherCity'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="thermostat">
        <Temperature
          value={20}
        />

        <Controller
          value={'+'}
        />

        <Controller
          value={'-'}
        />

        <Controller
          value={'reset'}
        />

        <PowerSavingMode
        />

        <WeatherCity
        />
      </div>
    </div>
  );
}

export default App;
