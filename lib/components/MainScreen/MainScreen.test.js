import React from 'react';
import { shallow, mount } from 'enzyme';
import MainScreen from './MainScreen.jsx'
import MockData from '../../MockData'

describe('MainScreen', () => {

  const mockFn = jest.fn();
  const component = shallow(<MainScreen weather={MockData} changeLocation={mockFn}/>);

  it('should render a search bar', () => {
    const searchBar = component.find('#main-').debug();

      expect(component.contains(searchBar)).toEqual(true);
  });

  it('should render an hourly forecast', () => {
    const hourlyForecast = component.find('.hourly-text').debug();

    expect(component.debug()).toContain(hourlyForecast);
  })

  it('should render a 10-day forecast', () => {
    const tenDayForecast = component.find('.ten-day-text').debug();

    expect(component.debug()).toContain(tenDayForecast);
  })

  it('should render a current forecast', () => {
    const currentForecast = component.find('.main-current').debug();

    expect(component.debug()).toContain(currentForecast);
  })



});
