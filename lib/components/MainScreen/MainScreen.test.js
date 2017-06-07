import React from 'react';
import { shallow, mount } from 'enzyme';
import MainScreen from './MainScreen.jsx'
import MockData from '../../MockData'

describe('MainScreen', () => {

  const mockFn = jest.fn();
  const component = mount(<MainScreen weather={MockData} changeLocation={mockFn}/>);

  it('should render a search bar', () => {
    const searchBar = component.find('#main-search').debug();
    const autoCompleteList = <ul className="autocomplete-list" />;

    expect(component.contains(autoCompleteList)).toEqual(true);
  });

  it('should render an hourly forecast', () => {
    const hourlyForecastText = <h2 className="hourly-text">Hourly Forecast</h2>;

    expect(component.contains(hourlyForecastText)).toEqual(true);
  });

  it('should render a 10-day forecast', () => {
    const tenDayForecastText = <h2 className="ten-day-text">10 Day Forecast</h2>;

    expect(component.contains(tenDayForecastText)).toEqual(true);
  });

  it('should render a current forecast', () => {
    const currentDate = <h1 className="current-date">Last Updated on June 2, 12:57 PM MDT</h1>;

    expect(component.contains(currentDate)).toEqual(true);
  });
});
