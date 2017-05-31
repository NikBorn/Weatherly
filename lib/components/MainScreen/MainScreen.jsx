import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';


const MainScreen = ({weather, location}) => {
  return (
    <div>
      <CurrentForecast weather={weather}
                       location={location}
      />
      <HourlyForecast/>
      <DailyForecast/>
    </div>
  );
};



export default MainScreen;
