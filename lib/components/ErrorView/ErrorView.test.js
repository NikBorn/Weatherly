import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorView from './index.jsx';


describe('ErrorView', () =>{
  const mockFn = jest.fn();
  const component = mount(<ErrorView changeLocation={mockFn}/>);

  it('should contain a search-bar', () => {
    const autocomplete = <ul className="autocomplete-list" />;
    console.log(component.debug())
    expect(component.contains(autocomplete)).toEqual(true);
  });

  it('should contain some text indicating and error', () => {
    const errorText = 'There was an error';
    const error = component.find('.error-text1');

    expect(error.text()).toEqual(errorText);
  });
});
