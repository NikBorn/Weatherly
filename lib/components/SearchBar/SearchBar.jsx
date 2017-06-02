import React, { Component } from 'react';
import './SearchBar.css';


export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  
  // findCity() {
  //
  // }
  //
  // findState() {
  //
  // }
  //
  // findZip() {
  //
  // }
  //
  // determineAPISearch() {
  //
  // }

  render() {
    const { input } = this.state;
    const { changeLocation } = this.props;

    return (
      <div className='search-container'>
        <input className='search-bar search-element'
          type="text"
          placeholder="Enter Zipcode or City/State"
          onInput={(e) => {
            this.setState({ input: e.target.value });
          }}/>
        <button className='search-btn search-element'
                onClick={() => changeLocation(input)}
          >Get Weather</button>
      </div>
    );
  }
}
