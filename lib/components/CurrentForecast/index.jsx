import React from 'react';
import './CurrentForecast.css';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';


const CurrentForecast = ({ weather }) => {
  const { high, low, temp, city, icon, currentWeather, summary, date } = weather;

  return (
    <header className='current-header'>
      <article className='current-temperatures'>
        <h2 className='temp high-temp'>High: { high }˚F</h2>
        <h1 className='current-temp'>{ temp }˚F</h1>
        <h2 className='temp'>Low: { low }˚F</h2>
      </article>

      <article className='current-main'>
        <h1 className='current-location'>{ city }</h1>
        <h1 className='current-date'>{ date }</h1>
        <img className='current-icon' src={ IconsImagesObj[icon] }></img>
        <h1 className='current-weather'>{ currentWeather }</h1>
      </article>

      <article className='current-summary-article'>
        <h2 className='current-summary'>CURRENT FORECAST:</h2>
        <h2 className='current-summary'>{ summary }</h2>
      </article>
    </header>
  );
};


export default CurrentForecast;
