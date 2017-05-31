import React from 'react';
import './CurrentForecast.css';

const CurrentForecast = ({weather}) => {
  console.log(weather)
  return (
    <div>
      <img src="lib/icons/Cloudy.svg"></img>
    </div>
  )
}


export default CurrentForecast;
