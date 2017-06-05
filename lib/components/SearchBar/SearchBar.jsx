import React, { Component } from 'react';
import './SearchBar.css';
import Trie from '@coleworsley/complete-me';
import citiesList from '../../citiesList';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      trie: {},
    };
  }

  componentWillMount() {
    const newTrie = new Trie();
    newTrie.populate(citiesList);
    this.setState({ trie: newTrie });
  }

  autocomplete(str) {
    const suggestions = this.state.trie.suggest(str);

    if (suggestions.length > 5) {
      suggestions.splice(5, suggestions.length);
    }

    return suggestions.map(e => (
      <li key={e} className='autocomplete-item'>
        {e}
      </li>
    ));
  }

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
                onClick={() => changeLocation(input)}>
                Get Weather
        </button>
        <ul className='autocomplete-list'>
          {this.autocomplete(this.state.input)}
        </ul>
      </div>
    );
  }
}
