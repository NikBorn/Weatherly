import React from 'react';
import './CurrentForecast.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const CurrentForecast = ({ weather, location }) => {


  return (
    <header  className='current-header'>
      <article className='current-temperatures'>
        <button className='change-city-btn'>Change City</button>
        <h1 className='current-temp'>{weather.temp}˚F</h1>
        <h2 className='temp'>High: {weather.high}˚F</h2>
        <h2 className='temp'>Low: {weather.low}˚F</h2>
      </article>
      <article className='current-main'>
        <h1 className='current-location'>{location}</h1>
        <h1 className='current-date'>May 27th, 2017</h1>
        <img src={IconsImagesObj[weather.icon]}></img>
        <h1 className='current-weather'>{weather.weather}</h1>
      </article>
      <article className='current-summary-article'>
        <h2 className='current-summary'>Summary: {weather.summary}</h2>
      </article>
    </header>
  );
};


export default CurrentForecast;