import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentForecast from './index.jsx'
import MockData from '../../MockData'

describe('CurrentForecast', () => {
  const component = shallow(<CurrentForecast weather={MockData.current}/>);

  it('should render the current temperature', () => {
    const temp = component.find('.current-temp');

    expect(temp.text()).toEqual('80.5˚F')
  });

  it('should render high and low values', () => {
    const highLow = component.find('.temp').children().nodes;

    expect(highLow[2]).toEqual('51');
    expect(highLow[4]).toEqual('84');
  });

  it('should create an image element', () => {
    const icon = component.find('.current-icon');

    expect(icon.prop('src')).toEqual('lib/icons/mostlycloudy.svg');
  });

  it('should display the current weather', () => {
    const current = component.find('.current-weather');
    const element = <h1 className="current-weather">Mostly Cloudy</h1>;

    expect(current.contains(element)).toEqual(true);
  });
});
