import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PowerSavingMode from './PowerSavingMode';
import Form from 'react-bootstrap/Form';

configure({adapter: new Adapter()});

describe('<PowerSavingMode />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PowerSavingMode />);
  });

  it('contains 1 form', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });
})
