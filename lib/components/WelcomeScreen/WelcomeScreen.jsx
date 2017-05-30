import React from 'react';
import './WelcomeScreen.css'

const WelcomeScreen = () => {
  return (
    <div>
      <header>
        it worked!
      </header>
      <main>
        <input type="text" placeholder="Enter Zipcode or City/State"/>
        <button>Get Weather</button>
      </main>
    </div>
  );
};

export default WelcomeScreen;
