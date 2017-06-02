import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen';
import ApiCrosswalk from './model/ApiCrosswalk';
import APIKEY from '../APIKEY';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      loggedIn: false,
      weather: {
        current: {},
        daily: [],
        hourly: [],
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const url = `http://api.wunderground.com/api/${APIKEY}/forecast/conditions/hourly10day/forecast10day/q/CO/${this.state.location}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = new ApiCrosswalk(data);
      this.setState({
        weather,
      });
    })
    .catch(e => console.log(e));
  }

  handleSearch(input) {
    this.setState({ location: input });
  }

  render() {
    const { weather, location, loggedIn } = this.state;

    if (!loggedIn) {
      return (<WelcomeScreen changeLocation={(input) => this.handleSearch(input)}/>);
    } else {
      return (<MainScreen weather={weather}
                          location={location}
              />);
    }
  }
}
