import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';


const MainScreen = ({weather, location}) => {
  return (
    <section>
      <CurrentForecast weather={weather.current}
                       location={location}
      />
      <HourlyForecast weather={weather.hourly}/>
      <DailyForecast weather={weather.daily}/>
    </section>
  );
};

export default MainScreen;
