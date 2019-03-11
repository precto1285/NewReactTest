import React, { Component } from 'react';
import OneComponent from './components/OneComp.js';
import TwoComponent from './components/TwoComp.js';
import ThreeComponent from './components/ThreeComp.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      two: {
        instrument: 'Bass',
        band: 'Bonehead',
        yearsPlayed: 25
      },
      three: {
        song: 'Bahay Sabog',
        artist: 'Bonehead',
        genre: 'Pinoy Rock'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <OneComponent />
        <TwoComponent
          instrument={this.state.two.instrument}
          band={this.state.two.band}
          yearsPlayed={this.state.two.yearsPlayed} />
        <ThreeComponent
          song={this.state.three.song}
          artist={this.state.three.artist}
          genre={this.state.three.genre} />
      </div>
    );
  }
}

export default App;
