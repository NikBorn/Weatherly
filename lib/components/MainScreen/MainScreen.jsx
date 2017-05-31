import React from 'react';
import './MainScreen.css';
import CurrentHeader from '../CurrentHeader/CurrentHeader';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';


const MainScreen = ({weather}) => {

  return (
    <div>
      <CurrentHeader weather={weather}/>
      <HourlyForecast/>
      <DailyForecast/>
    </div>
  )
}



export default MainScreen;
