import React from 'react';
import './HourlyForecast.css';
import HourlyCard from '../HourlyCard/HourlyCard';

const HourlyForecast = ({weather}) => {

  const weatherMap = () => {
    return weather.slice(1, 7).map(weatherObj => {
      console.log(weatherObj);
      return (
        <HourlyCard weather={weatherObj}/>
      );
    });
  };

  return (
    <article className='hourly-container'>
      <h2>Hourly Forecast</h2>
      {weatherMap()}
    </article>
  );
};


export default HourlyForecast;
