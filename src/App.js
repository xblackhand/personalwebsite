import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LinkButton from './Components/LinkButton/LinkButton';
import './App.css'
import {
  introText, introText2, resumeHeader, outroText, projectsHeader, tcVersionLink,
  checkbookAnywhereLink, checkbookAnywhereHeader, tcVersionHeader,
  checkbookAnywhereBodyText, tcVersionBodyText, checkItOutButtonText,
  resumeEmbeddedLink, personalWebsiteLink, personalWebsiteHeader,
  personalWebsiteBodyText, lookAtTheCodeButtonText
} from './globals';

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
    var newFrameWidth = window.innerWidth * .79 - 4;
    var newFrameHeight = (window.innerHeight - 100) * .89 - 4;
    frame.width = newFrameWidth;
    if (newFrameHeight / newFrameWidth > 1.29) {
      frame.height = newFrameWidth * 1.29;
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
            <div className='introSection'>
              {introText}
              <br/>
              {introText2}
            </div>
            <div className='projectsSection'>
              <div className='sectionHeader no-padding'>
                <h2>{projectsHeader}</h2>
              </div>
              <div className='flex-row'>
                <div className='flex-row-item'>
                  <h3>{checkbookAnywhereHeader}</h3>
                  <p>{checkbookAnywhereBodyText}</p>
                  <LinkButton linkTo={checkbookAnywhereLink} text={checkItOutButtonText}
                    backgroundColor='white' hoverBackgroundColor='#15F0E1' />
                </div>
                <div className='flex-row-item'>
                  <h3>{tcVersionHeader}</h3>
                  <p>{tcVersionBodyText}</p>
                  <LinkButton linkTo={tcVersionLink} text={checkItOutButtonText}
                    backgroundColor='white' hoverBackgroundColor='#15F0E1' />
                </div>
                <div className='flex-row-item'>
                  <h3>{personalWebsiteHeader}</h3>
                  <p>{personalWebsiteBodyText}</p>
                  <LinkButton linkTo={personalWebsiteLink} text={lookAtTheCodeButtonText}
                    backgroundColor='white' hoverBackgroundColor='#15F0E1' />
                </div>
              </div>
            </div>
            <div className='resumeSection'>
              <div className='resumeHeader'>
                <h2>{resumeHeader}</h2>
              </div>
              <div className='resumeWrapper'>
                <iframe className='resumeIFrame' title='resumeIFrame' id='resume'
                  src={resumeEmbeddedLink} />
              </div>
            </div>
            <div className='outroSection'>
              <div className='outroBody'>
                {outroText}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
