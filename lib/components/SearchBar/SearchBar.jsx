import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
  return(
    <div className='search-container'>
      <input className='search-bar search-element' type="text" placeholder="Enter Zipcode or City/State"/>
      <button className='search-btn search-element'>Get Weather</button>
    </div>
  )

}



export default SearchBar;
