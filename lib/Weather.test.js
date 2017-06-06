import React from 'react';
import { shallow, mount } from 'enzyme';
import Weather from './Weather';
import MockData from './MockData';
import MainScreen from './components/MainScreen/MainScreen';

describe('Weather', () => {
  const storageMock = () => {
    const storage = {};
    return {
      location: 'Denver, CO',
      clear() {
        return this.location = '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
    };
  };

  window.localStorage = storageMock();

  it.only('should render the correct screens', () => {
    let component = mount(<Weather />)
    const welcomeText = <h1 className="welcome-title">Welcome To Weatherly</h1>;
    console.log(component.debug())
    console.log(component.welcomeText)
    // console.log(component.toContainEqual('WelcomeScreen'))
    // expect(component.contains(<WelcomeScreen />)).toEqual(true);
    // console.log(component.debug())
    // console.log(mainScreen.debug())
    // expect(component).toEqual(mainScreen)
  });

  it('should render the main screen if there is something in localStorage', () => {
    const component = mount(<Weather />);
    expect(component.contains('MainScreen')).toEqual(true);

  });

});
