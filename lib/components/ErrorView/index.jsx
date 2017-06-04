import React from 'react';
import './ErrorView.css';
import SearchBar from '../SearchBar/SearchBar';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';

const ErrorView = ({ error, changeLocation }) => {
  const sectionStyle = {
    backgroundImage: `url(${IconsImagesObj.nt_clearImage})`,
  };

  return (
    <section className="Erroorview-section" style={sectionStyle}>
      <p>There was an error</p>
      <p>Please enter a valid location</p>
      <SearchBar changeLocation={changeLocation}/>
    </section>
  )
}

export default ErrorView;
