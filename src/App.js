import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactPlayer from "react-player"

<link rel="stylesheet" href="/css/video-react.css" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi Emma :-) Welcome to your website!</h2>
        </div>
        <ReactPlayer
          url="https://youtu.be/phjiPCtcq34"
        />
      </div>
    );
  }
}

export default App;
