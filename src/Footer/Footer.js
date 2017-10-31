import React, {Component} from 'react';
import './Footer.css';
import {copyright} from '../globals';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        &copy;&nbsp;{copyright}
      </div>
    );
  }
}
