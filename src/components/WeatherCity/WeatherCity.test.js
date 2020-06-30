import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherCity from './WeatherCity';
import { Col, Row, Form } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('<WeatherCity />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherCity />);
  });

  it('constains 1 Form', () => {
    expect(wrapper.find(Form)).toHaveLength(1);

  })
})
