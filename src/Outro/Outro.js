import React, {Component} from 'react';
import './Outro.css';
import {outroText} from '../globals';

export default class Outro extends Component {
  render() {
    return (
      <div className='outroComponent'>
        {outroText}
      </div>
    );
  }
}
