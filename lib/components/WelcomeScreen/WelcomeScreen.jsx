import React from 'react';
import './WelcomeScreen.css';
import GetWeather from '../GetWeather/GetWeather';

const WelcomeScreen = () => {
  return (
    <section className="welcome-screen">
      <header>
        <h1>Welcome To Weatherly</h1>
      </header>
      <GetWeather/>
    </section>
  );
};

export default WelcomeScreen;
