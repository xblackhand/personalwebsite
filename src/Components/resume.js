import React, {Component} from 'react';
import {resumeHeader, resumeEmbeddedLink} from '../globals';

export default class Resume extends Component {
  render() {
    return (
      <div className='resumeSection'>
        <div className='resumeHeader'>
          <h2>{resumeHeader}</h2>
        </div>
        <div className='resumeWrapper'>
          <iframe className='resumeIFrame' title='resumeIFrame' id='resume'
            height='600px' width='450px'
            src={resumeEmbeddedLink} />
        </div>
      </div>
    );
  }
}
