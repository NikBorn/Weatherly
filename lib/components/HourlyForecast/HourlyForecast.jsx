import React from 'react';
import './HourlyForecast.css';
import HourlyCard from '../HourlyCard/HourlyCard';

const HourlyForecast = ({weather}) => {

  const weatherMap = () => {
    return weather.map(weatherObj => {
      return (
        <HourlyCard weather={weatherObj}/>
      );
    });
  };

  return (
    <article className='hourly-container'>
      {weatherMap()}
    </article>
  );
};


export default HourlyForecast;
