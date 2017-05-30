import React from 'react';
import './CurrentHeader.css';
import CurrentLocationDate from '../CurrentLocationDate/CurrentLocationDate'
import CurrentForecast from '../CurrentForecast/CurrentForecast'

const CurrentHeader = () => {
  return (
    <div>
      <CurrentLocationDate/>
      <CurrentForecast/>
    </div>
  )
}



export default CurrentHeader;
