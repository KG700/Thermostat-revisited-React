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

  it('decreases temperature by 1 when downHandler is called', () => {
    wrapper.setState({ temperature: 20 })
    wrapper.instance().downHandler();
    expect(wrapper.state().temperature).toEqual(19);
  })

  it('resets temperature to default 20 when resetHandler is called', () => {
    wrapper.setState({ temperature: 21 })
    wrapper.instance().resetHandler();
    expect(wrapper.state().temperature).toEqual(20);
  })

  it('will not decrease temperature below 10 when downHandler is called', () => {
    wrapper.setState({ temperature: 10 })
    wrapper.instance().downHandler();
    expect(wrapper.state().temperature).toEqual(10);
  })

  it('will not increase temperature above 25 when power saving mode is on', () => {
    wrapper.setState({ temperature: 25, powerSavingMode: true })
    wrapper.instance().upHandler();
    expect(wrapper.state().temperature).toEqual(25);
  })

  it('will not increase temperature above 32 when power saving mode is off', () => {
    wrapper.setState({ temperature: 32, powerSavingMode: false })
    wrapper.instance().upHandler();
    expect(wrapper.state().temperature).toEqual(32);
  })

  it('will turn power saving mode on when previously off', () => {
    wrapper.setState({ powerSavingMode: false });
    const event = { target: { checked: true } };
    wrapper.instance().togglePowerSavingModeHandler(event);
    expect(wrapper.state().powerSavingMode).toEqual(true);
  })

  it('will turn power saving mode on when previously off', () => {
    wrapper.setState({ city: 'london' });
    const event = { target: { value: 'paris' } };
    wrapper.instance().selectCityHandler(event);
    expect(wrapper.state().city).toEqual('paris');
  })

})
