import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Flash Cards!</h1>
        </header>
        <p className="App-intro">
        <h3>What is Javascript?</h3>
          <button>Show Answer</button>
        </p>
      </div>
    );
  }
}


export default App;
