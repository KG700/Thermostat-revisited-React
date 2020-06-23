import React, { Component } from 'react';

import classes from './App.module.css';
import axios from '../axios';
import Temperature from '../components/Temperature/Temperature';
import Controller from '../components/Controller/Controller';
import PowerSavingMode from '../components/PowerSavingMode/PowerSavingMode';
import WeatherCity from '../components/WeatherCity/WeatherCity'

const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const MAXIMUM_TEMPERATURE_PSM_ON = 25;
const MAXIMUM_TEMPERATURE_PSM_OFF = 32;
const MEDIUM_ENERGY_USAGE_LIMIT = 18;

class App extends Component {
  state = {
    temperature: null,
    powerSavingMode: null,
    city: null
  }

  componentDidMount () {
    console.log('[App.js] did mount');
    axios.get('/all')
          .then(response => {
            console.log(response)
            this.setState({
              temperature: response.data.temperature,
              powerSavingMode: response.data.powerSavingMode,
              city: response.data.city
            });
          })
          .catch(error => {
            console.log(error);
          })

  }

  upHandler = () => {
    const currentTemperature = this.state.temperature
    const newTemperature = currentTemperature + 1
    if (this.state.powerSavingMode && currentTemperature < MAXIMUM_TEMPERATURE_PSM_ON) {
      this.setState({ temperature: newTemperature })
      this.updateTemperature(newTemperature)
    }
    if (!this.state.powerSavingMode && currentTemperature <  MAXIMUM_TEMPERATURE_PSM_OFF) {
      this.setState({ temperature: newTemperature });
      this.updateTemperature(newTemperature)

    }
  }

  downHandler = () => {
    const currentTemperature = this.state.temperature
    if (currentTemperature <= MINIMUM_TEMPERATURE) {
      return;
    }
    this.setState({ temperature: currentTemperature - 1 })
    this.updateTemperature(currentTemperature - 1);
  }

  resetHandler = () => {
    this.setState({ temperature: DEFAULT_TEMPERATURE })
    this.updateTemperature(DEFAULT_TEMPERATURE);
  }

  togglePowerSavingModeHandler = () => {
    const powerSavingModeSwitch = this.state.powerSavingMode;
    this.setState({ powerSavingMode: !powerSavingModeSwitch })
    if (!powerSavingModeSwitch && this.state.temperature > MAXIMUM_TEMPERATURE_PSM_ON) {
      this.setState({ temperature: MAXIMUM_TEMPERATURE_PSM_ON })
    }
  }

  energyUsage = () => {
    if (this.state.temperature < MEDIUM_ENERGY_USAGE_LIMIT) {
      return classes.LowUsage;
    }
    if (this.state.temperature >= MEDIUM_ENERGY_USAGE_LIMIT && this.state.temperature <= MAXIMUM_TEMPERATURE_PSM_ON) {
      return classes.MediumUsage;
    }
    return classes.HighUsage;
  }

  updateTemperature = (temperature) => {
    const data = {
      temperature: temperature
    };
    axios.post('/temperature', data)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

  render() {

    // Try assigning energy usage classes dynamically

    const energyUsageStyles = [classes.App];
    energyUsageStyles.push(this.energyUsage())

    return (
      <div className={energyUsageStyles.join(' ')}>
        <div className={classes.Thermostat}>
          <Temperature
            value={this.state.temperature}
          />

          <div className={classes.TemperatureControls}>
            <Controller
              value={'-'}
              click={this.downHandler}
            />

            <Controller
            value={'+'}
            click={this.upHandler}
            />
          </div>
          <Controller
            value={'reset'}
            click={this.resetHandler}
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
