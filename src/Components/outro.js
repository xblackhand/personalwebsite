import React, {Component} from 'react';
import {outroText} from '../globals';

export default class Outro extends Component {
  render() {
    return (
      <div className='outroSection'>
        <div className='outroBody'>
          {outroText}
        </div>
      </div>
    );
  }
}
