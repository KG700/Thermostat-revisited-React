import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import classes from './WeatherCity.module.css';

const WeatherCity = (props) => {

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + props.city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  // $.get(url + token + units, function(data) {
  //   var temperature = data.main.temp;
  // });

  return (
    <div className={classes.Weather}>
      <Form>
        <Row>
          <Col xs={4.4}>
            <h2>Temperature in</h2>
          </Col>
          <Col xs={5}>
            <Form.Control as="select" size="sm" custom>
              <option value="london">London</option>
              <option value="newyork">New York</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </Form.Control>
          </Col>
          <Col>
            <h2>is {10}&#8451;</h2>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default WeatherCity;
