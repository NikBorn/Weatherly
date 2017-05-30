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

  render() {
    if (!this.state.loggedIn) {
      return (<WelcomeScreen/>)
    } else {
      return (<MainScreen/>)
    }
  }
}
