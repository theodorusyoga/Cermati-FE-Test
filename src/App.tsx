import React from 'react';
import './App.css';

import Notification from './components/Notification';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Notification />
        <Hero />
        <Highlights />
      </div >
    )
  }
}

export default App;
