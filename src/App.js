import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Intro from './Components/intro';
import Projects from './Components/projects';
import Resume from './Components/resume';
import Outro from './Components/outro';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('resize', this.resizeIFrame.bind(this));
  }

  componentDidMount() {
    this.resizeIFrame();
  }

  resizeIFrame(e) {
    var frame = document.getElementById('resume');
    var newFrameWidth = window.innerWidth * .78;
    var newFrameHeight = (window.innerHeight - 100) * .88;
    frame.width = newFrameWidth;
    if (newFrameHeight / newFrameWidth > 1.3) {
      frame.height = newFrameWidth * 1.3;
    } else {
      frame.height = newFrameHeight;
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='mainBody'>
          <div className='innerBody' id='innerBody'>
            <Intro/>
            <Projects/>
            <Resume/>
            <Outro/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
