import React from 'react';
import './HourlyCard.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const HourlyCard = ({weather}) => {
  const {hour, condition, icon, temp} = weather;
  return (
    <div className='card-hourly'>
      <p>{hour}</p>
        <img className='hourly-icon' src={IconsImagesObj[icon]} alt={icon}/>
      <h2 className='hourly-temp'>Temp: {temp}˚F</h2>
      <p>{condition}</p>
    </div>
  );
};


export default HourlyCard;
