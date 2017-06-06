import React from 'react';
import './ErrorView.css';
import SearchBar from '../SearchBar/SearchBar';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj.js';

const ErrorView = ({ changeLocation }) => {
  const sectionStyle = {
    backgroundImage: `url(${IconsImagesObj.nt_clearImage})`,
  };

  return (
    <section className="Errorview-section" style={sectionStyle}>
      <p className='error-text1 error-txt'>There was an error</p>
      <p className='error-text2 error-txt'>Please enter a valid location</p>
      <SearchBar changeLocation={changeLocation}/>
    </section>
  )
}

export default ErrorView;
