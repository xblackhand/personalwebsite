import React, { Component } from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import HomePage from './HomePage/HomePage';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='body'>
          <HomePage/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
