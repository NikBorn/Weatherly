import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeScreen from './WelcomeScreen.jsx';


describe('WelcomeScreen', () =>{

  it('should contain a search-bar and one line of text', () => {
    const component = mount(<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    const welcomeTitle = component.find('.welcome-title');
    const searchBar = component.find('#welcome-search');
    const autoCompleteList = <ul className="autocomplete-list" /> ;
    console.log('searchBar', component.debug());

    expect(component.contains(autoCompleteList)).toEqual(true);

  });

});
