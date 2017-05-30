import React, {Component} from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <section>
        <WelcomeScreen />
      </section>
    );
  }
}
