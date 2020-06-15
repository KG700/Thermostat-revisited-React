import React, { Component } from 'react';
import Temperature from './Temperature/Temperature';
import Controller from './Controller/Controller';
import PowerSavingMode from './PowerSavingMode/PowerSavingMode';
import WeatherCity from './WeatherCity/WeatherCity'
import './App.css';

class App extends Component {
  state = {
    temperature: 20,
    powerSavingMode: true,
    defaultTemperature: 20,
    minimumTemperature: 10,
    maximumTemperaturePSMOn: 25,
    maximumTemperaturePSMOff: 32,
    mediumEnergyUsageLimit: 18,
    city: 'london'
  }

  up = () => {
    const currentTemperature = this.state.temperature
    if (this.state.powerSavingMode && currentTemperature < this.state.maximumTemperaturePSMOn) {
      this.setState({ temperature: currentTemperature + 1 })
    }
    if (!this.state.powerSavingMode && currentTemperature < this.state.maximumTemperaturePSMOff) {
      this.setState({ temperature: currentTemperature + 1 })
    }
  }

  down = () => {
    const currentTemperature = this.state.temperature
    this.setState({ temperature: currentTemperature - 1 })
  }

  reset = () => {
    this.setState({ temperature: this.state.defaultTemperature })
  }

  togglePowerSavingModeHandler = () => {
    const powerSavingModeSwitch = this.state.powerSavingMode;
    this.setState({ powerSavingMode: !powerSavingModeSwitch })
    if (!powerSavingModeSwitch && this.state.temperature > this.state.maximumTemperaturePSMOn) {
      this.setState({ temperature: this.state.maximumTemperaturePSMOn })
    }
  }

  energyUsage = () => {
    if (this.state.temperature < this.state.mediumEnergyUsageLimit) {
      return 'low-usage';
    }
    if (this.state.temperature >= this.state.mediumEnergyUsageLimit && this.state.temperature <= this.state.maximumTemperaturePSMOn) {
      return 'medium-usage';
    }
    return 'high-usage';
  }


  render() {

    // Try assigning energy usage classes dynamically

    const energyUsageStyles = ["App"];
    energyUsageStyles.push(this.energyUsage())

    return (
      <div className={energyUsageStyles.join(' ')}>
        <div className="thermostat">
          <Temperature
            value={this.state.temperature}
          />

          <div className="temperature-controls">
            <Controller
              value={'-'}
              click={this.down}
            />

            <Controller
            value={'+'}
            click={this.up}
            />
          </div>
          <Controller
            value={'reset'}
            click={this.reset}
          />
          <PowerSavingMode
            checked={this.state.powerSavingMode}
            click={this.togglePowerSavingModeHandler}
          />

          <br />
          <WeatherCity
            city={this.state.city}
          />

        </div>
      </div>
    );
  }
}

export default App;
