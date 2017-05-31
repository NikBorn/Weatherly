import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen';
import ApiCrosswalk from './model/ApiCrosswalk';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      currentWeather: {},
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/f020d873265e4f66/forecast/q/CO/Denver.json')
    .then(response => {

      return response.json()
    })
    .then(data => {
      const weatherObj = new ApiCrosswalk(data);
      console.log(weatherObj);
      this.setState({
        currentWeather: weatherObj,
      })
    }).catch(e => console.log(e));
  }

  render() {
    if (!this.state.loggedIn) {
      return (<WelcomeScreen/>);
    } else {
      return (<MainScreen/>);
    }
  }
}
