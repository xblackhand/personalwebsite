import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Resume from './Resume/Resume';
import Outro from './Outro/Outro';
import Footer from './Footer/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='bodyAbsolute'>
          <div className='mainBody'>
            <Intro />
            <Resume />
            <Outro />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
