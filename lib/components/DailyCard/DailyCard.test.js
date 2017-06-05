import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from './DailyCard';
import MockData from '../../MockData';

describe('DailyCard', () => {
  const weather = {
    condition: 'Partly Cloudy',
    weekday: 'Friday',
    high: '79',
    icon: 'partlycloudy',
    low: '53',
  };
  const component = shallow(<DailyCard weather={weather}/>);

  it('should render a date on a forecast card', () => {

    const date = component.find('.daily-date').children();

    expect(date.text()).toEqual('Friday');
  });

  it('should render a high on a forecast card', () => {
    const high = component.find('.daily-high').children()

    expect(high.nodes[1]).toEqual('79')
  })

  it('should render a low on a forecast card', () => {
    const low = component.find('.daily-low').children()

    expect(low.nodes[1]).toEqual('53')
  })

  it('should rendaer a daily condition on a forecast card', () => {
    const condition = component.find('.daily-condition').children()

    expect(condition.text()).toEqual('Partly Cloudy')
  })

});
