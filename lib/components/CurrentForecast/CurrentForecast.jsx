import React from 'react';
import './CurrentForecast.css';

const CurrentForecast = ({weather}) => {
  console.log('CurrentForecast', weather);

  return (
    <div>
      <img src="lib/icons/Cloudy.svg"></img>
      <p>{weather.temp}</p>
      <p>{weather.weather}</p>
    </div>
  )
}


export default CurrentForecast;
