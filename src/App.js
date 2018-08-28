import React, { Component } from 'react';
import image from './mister-v.png';
import Youtube from './Youtube.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <h1 className="App-title">Les news de Mister V</h1>
        </header>
        <p className="App-intro">
          Retrouvez ci-dessous les 3 dernières vidéos de ma chaîne Youtube !
        </p>
        <Youtube />
      </div>
    );
  }
}

export default App;
