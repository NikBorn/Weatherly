import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeScreen from './WelcomeScreen.jsx';


describe('WelcomeScreen', () =>{
  it.skip('should contain a search-bar and one line of text', () => {
    const component = mount(<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    const welcomeTitle = component.find('.welcome-title');
    const searchBar = component.find('#welcome-search');
    // const searchBox = <div className="search-box">
    // console.log('searchBar',searchBar.debug())
    // console.log('welcome', welcomeTitle.debug())
    // console.log(component.debug())

    // expect(component.debug()).toContain(welcomeTitle);
    expect(component.toContain('#welcome-search')).toEqual(true);
  });
});
