import React from 'react';
import { shallow, mount } from 'enzyme';
import Weather from './Weather';
import MockData from './MockData';
import localStorageMock from '../__mocks__/localStorage';

window.localStorage = localStorageMock;

describe('Weather', () => {

  it('should render the welcome screen if localStorage is empty', () => {
    localStorage.clear()
    let component = mount(<Weather />);
    const welcomeText = <h1 className="welcome-title">Welcome To Weatherly</h1>;

    expect(component.contains(welcomeText)).toEqual(true);
  });

  it('should render the main screen if there is something in localStorage', () => {
    localStorage.setItem('lastLocation', 'Denver, CO')
    const component = mount(<Weather />);
    // expect(component.contains('MainScreen')).toEqual(true);
  });

});
