import React, {Component} from 'react';
import {introText, introText2} from '../globals';

export default class Intro extends Component {
  render() {
    return (
      <div className='introSection'>
        {introText}
        <br/>
        {introText2}
      </div>
    );
  }
}
