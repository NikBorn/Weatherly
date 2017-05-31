import React from 'react';
import './MainScreen.css';
import CurrentHeader from '../CurrentHeader/CurrentHeader';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';


const MainScreen = ({weather, location}) => {
  console.log('MainScreen', weather);
  return (
    <div>
      <CurrentHeader weather={weather}
                     location={location}
        />
      <HourlyForecast/>
      <DailyForecast/>
    </div>
  )
}



export default MainScreen;
