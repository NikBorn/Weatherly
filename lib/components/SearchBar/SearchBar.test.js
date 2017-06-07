import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';
import MockData from '../../MockData';


describe('Search Bar', () => {
  let myMock
  let component;
  let input;
  let button;
  const cities = ['denver, co', 'seattle, wa'];

  beforeEach(() => {
    myMock = jest.fn();
    component = mount(<SearchBar changeLocation={ myMock } currentID='main-search'/>);
    input = component.find('.search-bar');
    button = component.find('.search-btn');
  });

  it('should pass in an id', () => {
    const searchContainer = component.find('.search-container');
    expect(searchContainer.prop('id')).toEqual('main-search');
  });

  it('should run a function when the button is clicked', () => {
    button.simulate('click');
    expect(myMock).toHaveBeenCalledTimes(1);

    button.simulate('click');
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  it('should update the input field', () => {
    const inputVal = 'Denv';
    const changeEvent = { target: { value: inputVal } };

    expect(input.prop('value')).toEqual('');
    expect(component.state('input')).toEqual('');

    input.simulate('change', changeEvent);

    expect(input.prop('value')).toEqual(inputVal);
    expect(component.state('input')).toEqual(inputVal);
  });

  it('should clear input when the button is clicked', () => {
    const inputVal = 'Hello';
    const changeEvent = { target: { value: inputVal } };

    input.simulate('change', changeEvent);
    expect(input.prop('value')).toEqual('Hello');

    button.simulate('click');
    expect(input.prop('value')).toEqual('');
  });
});
