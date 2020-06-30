import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Temperature from '../components/Temperature/Temperature';
import Controller from '../components/Controller/Controller';
import PowerSavingMode from '../components/PowerSavingMode/PowerSavingMode';
import WeatherCity from '../components/WeatherCity/WeatherCity';
import Spinner from '../components/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<App />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the Spinner component when loading', () => {
    wrapper.setState({ loading: true });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('renders Temperature components when loaded', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find(Temperature)).toHaveLength(1);
  });

  it('renders 3 Controller components when loaded', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find(Controller)).toHaveLength(3);
  });

  it('renders PowerSavingMode components when loaded', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find(PowerSavingMode)).toHaveLength(1);
  });

  it('renders WeatherCity components when loaded', () => {
    wrapper.setState({ loading: false });
    expect(wrapper.find(WeatherCity)).toHaveLength(1);
  });

  it('increases temperature by 1 when upHandler is called', () => {
    wrapper.setState({ temperature: 20 })
    wrapper.instance().upHandler();
    expect(wrapper.state().temperature).toEqual(21);
  })

})
