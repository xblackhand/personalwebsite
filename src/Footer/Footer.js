import React, {Component} from 'react';
import './Footer.css';
import {copyright} from '../globals';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='textWrapper'>
          &copy;&nbsp;{copyright}
        </div>
      </div>
    );
  }
}
