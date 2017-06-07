import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyForecast from './HourlyForecast.jsx'
import MockData from '../../MockData'

describe('HourlyForecast', () => {
  it('should render 7 forecast cards', () => {
    const weatherObj = MockData.daily.slice(1, 8);
    const component = shallow(<HourlyForecast
          weather={weatherObj}/>);
    const hourlyCards = component.find('HourlyCard');

    expect(hourlyCards.length).toEqual(7);
  });
});
