import React from 'react';
import './DailyForecast.css';
import DailyCard from '../DailyCard/DailyCard';

const DailyForecast = ({weather}) => {

  const weatherMap = () => {
    return weather.map(weatherObj => {
      return (
        <DailyCard weather={weatherObj} key={weatherObj.date}/>
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
