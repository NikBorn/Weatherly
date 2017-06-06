import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyForecast from './DailyForecast.jsx'
import DailyCard from '../DailyCard/DailyCard'
import MockData from '../../MockData'

describe('DailyForecast', () => {
  it('should render 10 forecast cards', () => {

    const component = shallow(<DailyForecast weather={MockData.daily}/>);
    const dailyCards = component.find('DailyCard');

    expect(dailyCards.length).toEqual(10);
  });

})
