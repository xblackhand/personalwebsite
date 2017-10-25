import React, {Component} from 'react';
import '../App.css';

export default class Resume extends Component {
  render() {
    return (
      <div className='bodyDiv resume'>
        <iframe className='resumeIFrame' title='resumeIFrame'
          src="https://drive.google.com/file/d/0B1BqVslnA1Pjc2xoOUpnVjdfeWs/preview" />
      </div>
    );
  }
}
