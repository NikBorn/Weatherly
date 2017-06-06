import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeScreen from './WelcomeScreen.jsx';


describe('WelcomeScreen', () =>{
  it('should contain a search-bar and one line of text', () => {
    const component = shallow(<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    const welcomeTitle = component.find('.welcome-title').debug();
    const searchBar = component.find('#welcome-search').debug();

    expect(component.debug()).toContain(welcomeTitle);
    expect(component.debug()).toContain(searchBar);
  });
});
