import React, { Component } from 'react';
import OneComponent from './components/OneComp.js';
import TwoComponent from './components/TwoComp.js';
import ThreeComponent from './components/ThreeComp.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OneComponent />
        <TwoComponent />
        <ThreeComponent />
      </div>
    );
  }
}

export default App;
