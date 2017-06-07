import React from 'react';
import { shallow, mount } from 'enzyme';
import Weather from './Weather';
import MockData from './MockData';
import localStorageMock from '../__mocks__/localStorage';

window.localStorage = localStorageMock;

describe('Weather', () => {

  it('should render the welcome screen if localStorage is empty', () => {
    localStorage.clear()
    const component = mount(<Weather mock={true}/>);
    const welcomeText = <h1 className="welcome-title">Welcome To Weatherly</h1>;

    expect(component.contains(welcomeText)).toEqual(true);
  });

  it('should render the main screen if there is something in localStorage', () => {
    localStorage.setItem('lastLocation', 'Denver, CO')
    const component = mount(<Weather mock={true}/>);
    const heading = <h1 className="current-location">Littleton, CO</h1>

    expect(component.contains(heading)).toEqual(true);
  });

  it('should update weather state based on passed in data', () => {
    const component = mount(<Weather mock={true}/>);
    const city = 'Littleton, CO';

    expect(component.state().weather.current.city).toEqual(city);
  });
});
