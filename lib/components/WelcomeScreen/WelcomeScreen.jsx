import React from 'react';
import './WelcomeScreen.css';
import GetWeather from '../GetWeather/GetWeather';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';

const WelcomeScreen = () => {
  const sectionStyle = {
    backgroundImage: `url(${IconsImagesObj.moonImage})`,
  };

  return (
    <section className="welcome-screen" style={sectionStyle}>
      <header>
        <h1>Welcome To Weatherly</h1>
      </header>
      <GetWeather/>
    </section>
  );
};

export default WelcomeScreen;
