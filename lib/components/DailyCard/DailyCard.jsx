import React from 'react';
import './DailyCard.css';

const DailyCard = ({weather}) => {
  const {date, high, low, icon, condition} = weather;

  return (
    <div>
      <img src="lib/icons/Cloudy.svg" alt=""/>
      <h2>High {high}˚F</h2>
      <h2>Low {low}˚F</h2>
      <p>{condition}</p>
      <p>{date}</p>
    </div>
  );
};


export default DailyCard;
