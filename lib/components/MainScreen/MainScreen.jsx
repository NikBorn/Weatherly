import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const MainScreen = ({weather, location}) => {
  const background = {
    backgroundImage: `url(${IconsImagesObj.rainImage})`,
  };
  const { current, hourly, daily} = weather;

  return (
    <section className='main-section' style={background}>
      <CurrentForecast weather={current}
                       location={location}
      />
    <h2 className='hourly-text'>Hourly Forecast</h2>
      <HourlyForecast weather={hourly.slice(1, 8)}/>
      <h2 className='ten-day-text'>10 Day Forecast</h2>
      <DailyForecast weather={daily.slice(1, 11)}/>
    </section>
  );
};

export default MainScreen;
