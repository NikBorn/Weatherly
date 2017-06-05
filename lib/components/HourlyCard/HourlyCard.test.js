import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCard from './HourlyCard';
import MockData from '../../MockData';

describe('HourlyCard', () => {
  const weather = {
    hour: '1:00',
    condition: 'Partly Cloudy',
    icon: 'partlycloudy',
    temp: '69',
  };
  const component = shallow(<HourlyCard weather={weather}/>);

  it('should render an hourly temp', () => {

    const temp = component.find('.hourly-temp').children()

    expect(temp.nodes[1]).toEqual('69')
  });

  it('should render an hourly condition', () => {

    const condition = component.find('.hourly-condition').children()

    expect(condition.node).toEqual('Partly Cloudy')
  })

  it('should render an hourly hour', () => {
    const hour = component.find('.hourly-hour').children()

    expect(hour.node).toEqual('1:00')
  })

})
