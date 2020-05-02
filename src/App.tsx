import React from 'react';
import './App.css';

import Notification from './components/Notification';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Notification />
        <Hero />
        <Highlights />
        <Footer />
        <Newsletter />
      </div >
    )
  }
}

export default App;
