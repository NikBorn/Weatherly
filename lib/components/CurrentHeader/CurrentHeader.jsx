import React from 'react';
import './CurrentHeader.css';
import CurrentLocationDate from '../CurrentLocationDate/CurrentLocationDate'
import CurrentForecast from '../CurrentForecast/CurrentForecast'
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js'

const CurrentHeader = () => {

  const hourlyCardStyle = {
    backgroundImage: `url(${IconsImagesObj.rainingImage})`,
  }

  return (
    <header style={hourlyCardStyle} className='current-header'>
      <CurrentLocationDate/>
      <CurrentForecast/>
    </header>
  )
}



export default CurrentHeader;
