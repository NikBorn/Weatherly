import React, { Component } from 'react';
import './SearchBar.css';
import Trie from '@coleworsley/complete-me';
import citiesList from '../../citiesList';
import IconsImagesObj from '../IconsImagesObj/IconsImagesObj';


export default class SearchBar extends Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
    this.state = {
      input: '',
      trie: {},
    };
  }

  changeCase(place) {
    const city = place.split('');
    const state = city.splice(city.indexOf(','), city.length).map(e => e.toUpperCase());
    const cityUpperCase = city.reduce((str, letter, i, array) => {
      if (i === 0 || array[i - 1] === ' ') {
        str += letter.toUpperCase();
      } else {
        str += letter;
      }
      return str;
    }, '');
    return [...cityUpperCase, ...state].join('');
  }

  checkKeyPress(event) {
    const { changeLocation } = this.props;
    const { input, trie } = this.state;
    const suggestions = trie.suggest(input);

    if (event.keyCode === 13 && input.length > 0) {
      changeLocation(input);
      this.setState({ input: '' });
    } else if (event.keyCode === 9 && input.length > 0) {
      this.setState({ input: this.changeCase(suggestions[0]) });
    } 
  }

  componentWillMount() {
    const newTrie = new Trie();
    newTrie.populate(citiesList);
    this.setState({ trie: newTrie });
  }

  autocomplete(str) {
    const suggestions = this.state.trie.suggest(str);

    return suggestions.map(suggestion => (
      <li key={suggestion}
          className='autocomplete-item'
          onClick={(e) => {
            this.setState({ input: e.target.textContent });
            this.searchBar.focus();
          }}>
        {this.changeCase(suggestion)}
      </li>
    ));
  }

  focus() {
    this.searchBar.focus();
  }

  render() {
    const { input } = this.state;
    const { changeLocation } = this.props;
    const background = {
      backgroundImage: `url(${IconsImagesObj.magnifyingGlass})`,
    };

    return (
      <div className='search-container'>
        <input className='search-bar search-element'
               type='text'
               placeholder="Enter Zipcode or City/State"
               value={input}
               onKeyDown={(e) => {
                 this.checkKeyPress(e);
               }}
               onChange={(e) => {
                 this.setState({ input: e.target.value });
               }}
               ref={(selection) => { this.searchBar = selection; }}
        />
        <button className='search-btn search-element'
                onClick={() => {
                  changeLocation(input);
                  this.setState({ input: '' });
                }}
                style={ background }>
        </button>
        <ul className='autocomplete-list'>
          {this.autocomplete(this.state.input)}
        </ul>
      </div>
    );
  }
}
