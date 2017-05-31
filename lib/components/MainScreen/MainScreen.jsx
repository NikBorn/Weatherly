import React from 'react';
import './MainScreen.css';
import CurrentHeader from '../CurrentHeader/CurrentHeader';
import HourlyForecast from '../HourlyForecast/HourlyForecast';


const MainScreen = () => {

  return (
    <div>
      <CurrentHeader/>
      <HourlyForecast/>
    </div>
  )
}



export default MainScreen;
