import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/components/DailyCard/DailyCard';
import MockData from '../lib/MockData';

describe('DailyCard', () => {
  it('should render a forecast card', () => {
    const weather = {
      condition: 'Partly Cloudy',
      date: 'Friday',
      high: '79',
      icon: 'partlycloudy',
      low: '53',
    };

    const component = shallow(<DailyCard weather={weather}/>);
    const date = component.find('.daily-date').children();

    expect(date).toEqual('Friday');
  });
});
