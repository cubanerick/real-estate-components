import React, { Component } from 'react';
import {ParallaxProvider} from "react-scroll-parallax";
import Main from "./pages/Main";
import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Main/>
      </ParallaxProvider>
    );
  }
}

export default App;
