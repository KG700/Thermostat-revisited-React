import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import './WeatherCity.css';

const WeatherCity = (props) => {
  return (
    <div>
      <Form>
        <Row>
          <Col xs={4.4}>
            <h2 className='weather'>Temperature in</h2>
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
            <h2 className='weather'>is 10&#8451;</h2>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default WeatherCity;
