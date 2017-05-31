import React from 'react';
import './CurrentHeader.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast'
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js'

const CurrentHeader = ({weather, location}) => {
  console.log('CurrentHeader', weather);

  const hourlyCardStyle = {
    backgroundImage: `url(${IconsImagesObj.rainingImage})`,
  }

  return (
    <header style={hourlyCardStyle} className='current-header'>
      <CurrentForecast weather={weather}
                       location={location}
                      />

    </header>
  )
}



export default CurrentHeader;
