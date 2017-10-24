import React, {Component} from 'react';
import '../App.css';

export default class Intro extends Component {
  render() {
    return (
      <div className='bodyDiv'>
        <div className='introTopDiv'>
          Hi there! Glad you found your way here.<br/>
          I created this website to show some of my skills and to house my resume.
        </div>
        <div className='introBottomDiv'>
          Now the resume!
        </div>
      </div>
    );
  }
}
