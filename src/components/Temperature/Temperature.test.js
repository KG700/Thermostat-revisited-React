import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Temperature from './Temperature';

configure({adapter: new Adapter()});

describe('<Temperature />', () => {
  it('will render 20 when prop value is 20', () => {
      const wrapper = shallow(<Temperature value={20} />);
      expect(wrapper.html()).toEqual('<div class=\"Temperature\">20</div>')
  })
})
