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
      location: 'denver',
      loggedIn: false,
      weather: {
        current: {},
        daily: [],
        hourly: [],
      },
    };
  }

  componentDidMount() {
    if (this.state.location !== '') {
      this.getData(this.state.location);
    }
  }

  pullFromLocalStorage() {
    if (localStorage.getItem('lastLocation')) {
      const localLocation = JSON.parse(localStorage.getItem('lastLocation'));
      this.setState({ location: localLocation });
    }

  }

  sendToLocalStorage() {
    localStorage.setItem('lastLocation', this.state.location);
  }

  // console.log(localStorage.lastLocation)



  getData(location) {
    const url = `http://api.wunderground.com/api/${APIKEY}/forecast/conditions/hourly10day/forecast10day/geolookup/q/${location}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = new ApiCrosswalk(data);
      this.setState({
        weather: weather,
      });
    })
    .catch(e => {
      console.log('there was an error' + e);
      return <ErrorView/>
    });
    // this.setState({ weather: MockData });
  }

  handleSearch(input) {
    this.setState({ location: input });
    this.getData(input);
  }

  render() {
    const { weather, location, loggedIn } = this.state;

    if (location === '') {
      return (<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    } else {
      return (<MainScreen weather={weather}
                          location={location}
                          changeLocation={(input) => this.handleSearch(input)}/>);
    }
  }
}
