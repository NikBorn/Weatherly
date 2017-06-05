import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen';
import ApiCrosswalk from './model/ApiCrosswalk';
import APIKEY from '../APIKEY';
import MockData from './MockData'
import ErrorView from './components/ErrorView'

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: {
        current: {},
        daily: [],
        hourly: [],
      },
    };
  }

  componentWillMount() {
    this.pullFromLocalStorage();
  }

  componentDidMount() {
    if (this.state.location !== '') {
      this.getData(this.state.location);
    }
  }

  pullFromLocalStorage() {
    if (localStorage.getItem('lastLocation')) {
      const localLocation = localStorage.getItem('lastLocation');
      this.setState({ location: localLocation });
    }
  }

  sendToLocalStorage(location) {
    localStorage.setItem('lastLocation', location);
  }

  getData(location) {
    const url = `http://api.wunderground.com/api/${APIKEY}/forecast/conditions/hourly10day/forecast10day/geolookup/q/${location}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = new ApiCrosswalk(data);
      this.setState({ weather });
      this.sendToLocalStorage(weather.current.city);
    })
    .catch(e => {
      console.log('there was an error' + e);
      this.setState({ location: 'error' });
    });
    // this.setState({ weather: MockData });
  }

  handleSearch(input) {
    this.setState({ location: input });
    this.getData(input);
  }

  render() {
    const { weather, location } = this.state;

    if (location === '') {
      return (<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    } else if (location === 'error') {
      return <ErrorView changeLocation={(input) => this.handleSearch(input)}/>
    } else {
      return (<MainScreen weather={weather}
                          location={location}
                          changeLocation={(input) => this.handleSearch(input)}/>);
    }
  }
}
