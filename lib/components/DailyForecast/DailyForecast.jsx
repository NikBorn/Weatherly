import React from 'react';
import './DailyForecast.css';
import DailyCard from '../DailyCard/DailyCard';

const DailyForecast = ({weather}) => {
  const weatherMap = () => {
    return weather.slice(1, 11).map(weatherObj => {
      return (
        <DailyCard weather={weatherObj}/>
      );
    });
  };


  return (
    <article className='daily-container'>
      {weatherMap()}
    </article>
  );
};

export default DailyForecast;
