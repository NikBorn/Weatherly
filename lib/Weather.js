import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen';
import ApiCrosswalk from './model/ApiCrosswalk';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Denver',
      loggedIn: true,
      weather: {
        current: {},
        daily: {},
        hourly: {},
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const APIKEY = 'f020d873265e4f66';
    const url = `http://api.wunderground.com/api/${APIKEY}/forecast/conditions/hourly10day/forecast10day/q/CO/${this.state.location}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = new ApiCrosswalk(data);
      this.setState({
        weather: weather,
      });
    })
    .catch(e => console.log(e));
  }

  render() {
    const { weather, location } = this.state;

    console.log(weather)
    if (!this.state.loggedIn) {
      return (<WelcomeScreen/>);
    } else {
      return (<MainScreen weather={weather.current}
                          location={location}
              />);
    }
  }
}
