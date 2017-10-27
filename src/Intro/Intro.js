import React, {Component} from 'react';
import Projects from '../Projects/Projects';
import '../App.css';
import './Intro.css';
import  {
  introText, introText2, outroText
} from '../globals';

export default class Intro extends Component {
  render() {
    return (
      <div className='bodyDiv'>
        <div>
          {introText}
          <br/>
          {introText2}
        </div>
        <div>
          <Projects />
        </div>
        <div className='introBottomDiv'>
          {outroText}
        </div>
      </div>
    );
  }
}
