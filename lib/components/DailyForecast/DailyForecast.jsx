import React from 'react';
import './DailyForecast.css';
import DailyCard from '../DailyCard/DailyCard';

const DailyForecast = () => {
  return (
    <section>
      <h2>10 Day Forecast</h2>
      <DailyCard/>
    </section>
  );
};

export default DailyForecast;
