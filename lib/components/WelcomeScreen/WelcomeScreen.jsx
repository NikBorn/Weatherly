import React from 'react';
import './WelcomeScreen.css';
import SearchBar from '../SearchBar/SearchBar';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';

const WelcomeScreen = () => {
  const sectionStyle = {
    backgroundImage: `url(${IconsImagesObj.tstormsImage})`,
  };

  return (
    <section className="welcome-screen" style={sectionStyle}>
        <h1 className="welcome-title">Welcome To Weatherly</h1>
      <SearchBar/>
    </section>
  );
};

export default WelcomeScreen;
