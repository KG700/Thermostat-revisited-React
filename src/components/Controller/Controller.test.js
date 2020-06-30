import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Controller from './Controller';
import Button from 'react-bootstrap/Button';

configure({adapter: new Adapter()});

describe('<Controller />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controller />);
  })

  it('contains 1 button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('calls click handler when button is clicked', () => {
    const mockClickHandler = jest.fn();
    wrapper.setProps({ click: mockClickHandler })
    wrapper.find(Button).simulate('click');
    expect(mockClickHandler.mock.calls.length).toEqual(1);
  });
})
