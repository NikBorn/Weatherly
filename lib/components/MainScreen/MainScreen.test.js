import React from 'react';
import { shallow, mount } from 'enzyme';
import MainScreen from './MainScreen.jsx'
import MockData from '../../MockData'

describe('MainScreen', () => {

  const mockFn = jest.fn();
  const component = shallow(<MainScreen weather={MockData} changeLocation={mockFn}/>);
  it('should render a search bar', () => {
    // console.log(component.debug());

  });
});
