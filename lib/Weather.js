import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen'

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/f020d873265e4f66/geolookup/conditions/q/IA/Cedar_Rapids.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        city: data
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
