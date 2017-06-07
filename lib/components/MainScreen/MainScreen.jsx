import React from 'react';
import './MainScreen.css';
import CurrentForecast from '../CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DailyForecast from '../DailyForecast/DailyForecast';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';
import SearchBar from '../SearchBar/SearchBar';


const MainScreen = ({ weather, location, changeLocation }) => {
  const { current, hourly, daily } = weather;
  const background = {
    backgroundImage: `url(${IconsImagesObj[current.icon + 'Image']})`
  };
  console.log(`url(${IconsImagesObj[current.icon]}Image)`)

  return (
    <section className='main-section' style={ background }>
      <nav className='current-nav'>
        <h1 className='title'>WEATHERLY</h1>
        <SearchBar changeLocation={ changeLocation } currentID='main-search'/>
      </nav>
      <CurrentForecast weather={ current } className="main-current"/>
      <main>
        <h2 className='hourly-text'>Hourly Forecast</h2>
        <HourlyForecast weather={hourly.slice(1, 8)}/>
        <h2 className='ten-day-text'>10 Day Forecast</h2>
        <DailyForecast weather={daily}/>
      </main>
    </section>
  );
};

export default MainScreen;
