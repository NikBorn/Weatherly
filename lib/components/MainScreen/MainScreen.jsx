import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';


const MainScreen = ({weather, location}) => {
  console.log(weather)

  return (
    <section>
      <CurrentForecast weather={weather.current}
                       location={location}
      />
      <h2>Hourly Forecast</h2>
      <HourlyForecast weather={weather.hourly}/>
      <h2>10 Day Forecast</h2>
      <DailyForecast weather={weather.daily}/>
    </section>
  );
};

export default MainScreen;
