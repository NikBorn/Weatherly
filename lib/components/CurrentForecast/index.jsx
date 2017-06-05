import React from 'react';
import './CurrentForecast.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const CurrentForecast = ({ weather }) => {
  const { high, low, temp, city, icon, currentWeather, summary, date } = weather;

  return (
    <header>
      <article className='current-location-container'>
        <h1 className='current-location'>{ city }</h1>
        <h1 className='current-date'>{ date }</h1>
      </article>

      <article className='current-header'>

          <article className='current-temperatures'>
            <h1 className='temp'>Current Temp</h1>
            <h1 className='current-temp'>{ temp }˚F</h1>
            <h2 className='temp'>Low/High:</h2>
            <h2 className='temp'>{ low }˚F/{ high }˚F</h2>
          </article>

          <article className='current-main'>
            <img className='current-icon' src={ IconsImagesObj[icon] }></img>
            <h1 className='current-weather'>{ currentWeather }</h1>
          </article>

          <article className='current-summary-article'>
            <h2 className='current-summary current-summary-title'>CURRENT FORECAST:</h2>
            <h2 className='current-summary'>{ summary }</h2>
          </article>
      </article>

    </header>
  );
};


export default CurrentForecast;
