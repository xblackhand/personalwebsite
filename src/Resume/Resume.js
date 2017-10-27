import React, {Component} from 'react';
import '../App.css';
import './Resume.css';

export default class Resume extends Component {
  render() {
    return (
      <div className='resumeWrapper'>
        <iframe className='resumeIFrame' title='resumeIFrame' id='resume'
          src="https://drive.google.com/file/d/0B1BqVslnA1Pjc2xoOUpnVjdfeWs/preview" />
      </div>
    );
  }
}
