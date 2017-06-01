import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const MainScreen = ({weather, location}) => {
  const background = {
    backgroundImage: `url(${IconsImagesObj.rainImage})`,
  };
  console.log(weather)

  return (
    <section classname='main-section' style={background}>
      <CurrentForecast weather={weather.current}
                       location={location}
      />
    <h2 className='hourly-text'>Hourly Forecast</h2>
      <HourlyForecast weather={weather.hourly}/>
      <h2 className='ten-day-text'>10 Day Forecast</h2>
      <DailyForecast weather={weather.daily}/>
    </section>
  );
};

export default MainScreen;
