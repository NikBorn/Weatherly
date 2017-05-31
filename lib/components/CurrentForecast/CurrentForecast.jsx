import React from 'react';
import './CurrentForecast.css';

const CurrentForecast = ({weather, location}) => {
  console.log('CurrentForecast', weather);

  return (
    <div>
      <button className='change-city-btn'>Change City</button>
      <h1 className='current-location'>{location}</h1>
      <h1 className='current-date'>May 27th, 2017</h1>
      <img src="lib/icons/Cloudy.svg"></img>
      <p>{weather.temp}</p>
      <p>{weather.weather}</p>
    </div>
  )
}


export default CurrentForecast;
