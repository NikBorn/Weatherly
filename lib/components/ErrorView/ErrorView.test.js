import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorView from './index.jsx';


describe('ErrorView', () =>{
  it('should contain a search-bar and two lines of text', () => {
    const component = shallow(<ErrorView changeLocation={(input) => this.handleSearch(input)}/>);
    const errorText1 = component.find('.error-text1').debug();
    const errorText2 = component.find('.error-text2').debug();
    const searchBar = component.find('#error-search').debug();

    expect(component.debug()).toContain(errorText1);
    expect(component.debug()).toContain(errorText2);
    expect(component.debug()).toContain(searchBar);
  });
});
