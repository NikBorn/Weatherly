import React from 'react';
import './CurrentLocationDate.css';

const CurrentLocationDate = () => {
  return (
    <div>
      <button className='change-city-btn'>Change City</button>
      <h1 className='current-location'>Denver</h1>
      <h1 className='current-date'>May 27th, 2017</h1>
    </div>
  )
}

export default CurrentLocationDate;
