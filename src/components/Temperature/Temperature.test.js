import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Temperature from './Temperature';

configure({adapter: new Adapter()});

describe('<Temperature />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Temperature />);
  })

  it('will render 20 when prop value is 20', () => {
      wrapper.setProps({value: 20});
      expect(wrapper.html()).toEqual('<div class=\"Temperature\">20</div>')
  })

  it('only contains a div element to render temperature', () => {
      expect(wrapper.render()).toHaveLength(1)
  })

})
