import React, { Component } from 'react';
import Temperature from './Temperature/Temperature';
import Controller from './Controller/Controller';
import PowerSavingMode from './PowerSavingMode/PowerSavingMode';
import WeatherCity from './WeatherCity/WeatherCity'
import './App.css';

class App extends Component {
  state = {
    temperature: 20,
    defaultTemperature: 20
  }

  up = () => {
    const currentTemperature = this.state.temperature
    this.setState({ temperature: currentTemperature + 1 })
  }

  down = () => {
    const currentTemperature = this.state.temperature
    this.setState({ temperature: currentTemperature - 1 })
  }

  reset = () => {
    this.setState({ temperature: this.state.defaultTemperature })
  }

  render() {
    return (
      <div className="App">
        <div className="thermostat">
          <Temperature
            value={this.state.temperature}
          />

          <Controller
            value={'+'}
            click={this.up}
          />

          <Controller
            value={'-'}
            click={this.down}
          />

          <Controller
            value={'reset'}
            click={this.reset}
          />

          <PowerSavingMode
          />

          <WeatherCity
          />
        </div>
      </div>
    );
  }
}

export default App;
