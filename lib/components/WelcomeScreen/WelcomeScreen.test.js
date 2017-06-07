import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeScreen from './WelcomeScreen.jsx';


describe('WelcomeScreen', () =>{
  const mockFn = jest.fn()
  const component = mount(<WelcomeScreen changeLocation={mockFn}/>);

  it('should contain a search-bar', () => {
    const autocomplete = <ul className="autocomplete-list" />;

    expect(component.contains(autocomplete)).toEqual(true);
  });

  it('should contain a welcome title', () => {
    const welcomeTitle = <h1 className="welcome-title">Welcome To Weatherly</h1>;

      expect(component.contains(welcomeTitle)).toEqual(true);
  });
});
