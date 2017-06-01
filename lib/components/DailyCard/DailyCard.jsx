import React from 'react';
import './DailyCard.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj';

const DailyCard = ({weather}) => {
  const { weekday, high, low, icon, condition } = weather;

  return (
    <div className='daily-card'>
      <p className='daily-date'>{weekday}</p>
      <img className='daily-icon' src={IconsImagesObj[icon]} alt={icon}/>
      <h2 className='daily-high'>High {high}˚F</h2>
      <h2 className='daily-low'>Low {low}˚F</h2>
      <p className='daily-condition'>{condition}</p>
    </div>
  );
};


export default DailyCard;
