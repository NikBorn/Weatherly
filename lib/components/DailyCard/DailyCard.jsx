import React from 'react';
import './DailyCard.css';

const DailyCard = ({weather}) => {
  const {date, high, low, icon, condition} = weather;

  return (
    <div className='daily-card'>
      <p className='daily-date'>{date}</p>
      <img className='dialy-icon' src="lib/icons/Cloudy.svg" alt=""/>
      <h2 className='daily-high'>High {high}˚F</h2>
      <h2 className='daily-low'>Low {low}˚F</h2>
      <p className='daily-condition'>{condition}</p>
    </div>
  );
};


export default DailyCard;
