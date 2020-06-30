import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Controller from './Controller';
import Button from 'react-bootstrap/Button';

configure({adapter: new Adapter()});

describe('<Controller />', () => {
  it('contains 1 button', () => {
    const wrapper = shallow(<Controller />);
    expect(wrapper.find(Button)).toHaveLength(1);
  })
})
