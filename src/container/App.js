import React, { Component } from 'react';

import classes from './App.module.css';
import axios from '../axios';
import Temperature from '../components/Temperature/Temperature';
import Controller from '../components/Controller/Controller';
import PowerSavingMode from '../components/PowerSavingMode/PowerSavingMode';
import WeatherCity from '../components/WeatherCity/WeatherCity'
import Spinner from '../components/Spinner/Spinner'

const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const MAXIMUM_TEMPERATURE_PSM_ON = 25;
const MAXIMUM_TEMPERATURE_PSM_OFF = 32;
const MEDIUM_ENERGY_USAGE_LIMIT = 18;

class App extends Component {
  constructor(props) {
    // console.log('[App.js] constructor')
    super(props);
    this.state = {
      temperature: null,
      powerSavingMode: null,
      city: 'london',
      loading: true
    }
    this.initialiseState();
  }

  initialiseState () {
    // console.log('[App.js] initialiseState')
    axios.get('/all')
          .then(response => {
            this.setState({
              temperature: response.data.temperature,
              powerSavingMode: response.data.powerSavingMode,
              city: response.data.city,
              loading: false
            });
          })
          .catch(error => {
            console.log(error);
          })
    // this.setState({ loading: false })

  }

  upHandler = () => {
    // console.log('[App.js] upHandler')
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
    // console.log('[App.js] downHandler')
    const currentTemperature = this.state.temperature
    if (currentTemperature <= MINIMUM_TEMPERATURE) {
      return;
    }
    this.setState({ temperature: currentTemperature - 1 })
    this.updateTemperature(currentTemperature - 1);
  }

  resetHandler = () => {
    // console.log('[App.js] resetHandler')
    this.setState({ temperature: DEFAULT_TEMPERATURE })
    this.updateTemperature(DEFAULT_TEMPERATURE);
  }

  togglePowerSavingModeHandler = (event) => {
    // console.log('[App.js] togglePowerSavingModeHandler')
    const powerSavingModeSwitch = this.state.powerSavingMode;
    this.setState({ powerSavingMode: event.target.checked })
    this.updatePowerSavingMode(event.target.checked)
    if (!powerSavingModeSwitch && this.state.temperature > MAXIMUM_TEMPERATURE_PSM_ON) {
      this.setState({ temperature: MAXIMUM_TEMPERATURE_PSM_ON })
      this.updateTemperature(MAXIMUM_TEMPERATURE_PSM_ON);
    }
  }

  selectCityHandler = (event) => {
    // console.log('[App.js] selectCityHandler')
    // console.log(event.target.value)
    this.setState({ city: event.target.value })
    this.updateCity(event.target.value)
  }

  energyUsage = () => {
    // console.log('[App.js] energyUsage')
    if (this.state.temperature < MEDIUM_ENERGY_USAGE_LIMIT) {
      return classes.LowUsage;
    }
    if (this.state.temperature >= MEDIUM_ENERGY_USAGE_LIMIT && this.state.temperature <= MAXIMUM_TEMPERATURE_PSM_ON) {
      return classes.MediumUsage;
    }
    return classes.HighUsage;
  }

  updateTemperature = (temperature) => {
    // console.log('[App.js] updateTemperature')
    const data = {
      temperature: temperature
    };
    axios.post('/temperature', data)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

  updatePowerSavingMode = (mode) => {
    // console.log('[App.js] updatePowerSavingMode')
    const data = {
      powerSavingMode: mode
    };
    axios.post('/power-saving-mode', data)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

  updateCity = (city) => {
    // console.log('[App.js] updateCity')
    const data = {
      city: city
    };
    axios.post('/city', data)
          .then(response => console.log(response))
          .catch(error => console.log(error));
  }

  render() {
    // console.log('[App.js] render')

    // Try assigning energy usage classes dynamically

    const energyUsageStyles = [classes.App];
    energyUsageStyles.push(this.energyUsage())

    return (
      <div className={energyUsageStyles.join(' ')}>
      <div className={classes.Thermostat}>
        { this.state.loading
          ?
          <Spinner />
          :
            <>
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
                selected={this.selectCityHandler}
              />
            </>

        }
      </div>
      </div>
    );
  }
}

export default App;
