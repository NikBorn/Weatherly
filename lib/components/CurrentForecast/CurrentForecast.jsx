import React from 'react';
import './CurrentForecast.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const CurrentForecast = ({ weather, location }) => {
  const headerBackground = {
    backgroundImage: `url(${IconsImagesObj.rainingImage})`,
  };

  return (
    <header style={headerBackground} className='current-header'>
      <button className='change-city-btn'>Change City</button>
      <h1 className='current-location'>{location}</h1>
      <h1 className='current-date'>May 27th, 2017</h1>
      <img src={IconsImagesObj[weather.icon]}></img>
      <h1>{weather.temp}</h1>
      <h1>{weather.weather}</h1>
      <h2>High: {weather.high}</h2>
      <h2>Low: {weather.low}</h2>
      <h2>Summary: {weather.summary}</h2>
    </header>
  );
};


export default CurrentForecast;
