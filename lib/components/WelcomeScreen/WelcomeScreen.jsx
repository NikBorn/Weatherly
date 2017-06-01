import React from 'react';
import './WelcomeScreen.css';
import SearchBar from '../SearchBar/SearchBar';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';

const WelcomeScreen = () => {
  const sectionStyle = {
    backgroundImage: `url(${IconsImagesObj.tstorms})`,
  };

  return (
    <section className="welcome-screen" style={sectionStyle}>
      <header>
        <h1>Welcome To Weatherly</h1>
      </header>
      <SearchBar/>
    </section>
  );
};

export default WelcomeScreen;
