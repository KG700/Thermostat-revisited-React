import React from 'react';
import Form from 'react-bootstrap/Form';

const WeatherCity = (props) => {
  return (
    <div>
      <Form>
        <Form.Label>Temperature in </Form.Label>
        <Form.Control as="select" size="sm" custom>
          <option value="london">London</option>
          <option value="newyork">New York</option>
          <option value="paris">Paris</option>
          <option value="tokyo">Tokyo</option>
        </Form.Control>
      </Form>
    </div>
  )
}

export default WeatherCity;
