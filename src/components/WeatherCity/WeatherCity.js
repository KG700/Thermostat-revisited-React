import React, { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap';

import classes from './WeatherCity.module.css';
import axios from '../../axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const TOKEN = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
const UNITS = '&units=metric';

class WeatherCity extends Component {

  constructor(props) {
    // console.log('[WeatherCity.js] constructor')
    super(props);
    this.state = {
      cityTemperature: null
    }
  }

  componentDidMount () {
    this.updateCityTemperature();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.updateCityTemperature();
    }
  }

  updateCityTemperature = () => {
    // console.log('updating cityTemperature')
    // console.log(URL + this.props.city + TOKEN + UNITS)

    axios.get(URL + this.props.city + TOKEN + UNITS)
          .then(response => {
            // console.log(response.data.main.temp)
            this.setState({
              cityTemperature: response.data.main.temp
            });
          })
          .catch(error => {
            console.log(error);
          })
  }

  render () {

    return (
      <div className={classes.Weather}>
      <Form>
        <Row>
          <Col xs={4.4}>
            <h2>Temperature in</h2>
          </Col>
          <Col xs={5}>
            <Form.Control as="select" size="sm" custom value={this.props.city} onChange={this.props.selected}>
              <option value="london">London</option>
              <option value="newyork">New York</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </Form.Control>
          </Col>
          <Col>
            <h2>is {this.state.cityTemperature}&#8451;</h2>
          </Col>
        </Row>
      </Form>
      </div>
    )

  }

}

export default WeatherCity;

// {
//   "coord":{"lon":139.69,"lat":35.69},
//   "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//   "base":"stations",
//   "main":{
//     "temp":21.9,
//     "feels_like":22.29,
//     "temp_min":21.67,
//     "temp_max":22.78,
//     "pressure":1014,
//     "humidity":88
//   },
//   "visibility":10000,
//   "wind":{"speed":4.6,"deg":70},
//   "clouds":{"all":75},
//   "dt":1592999705,
//   "sys":{"type":1,"id":8074,"country":"JP","sunrise":1592940385,"sunset":1592992846},
//   "timezone":32400,
//   "id":1850144,
//   "name":"Tokyo",
//   "cod":200
// }
