import React, {Component} from 'react';
import '../App.css';
import './Intro.css';

export default class Intro extends Component {
  render() {
    return (
      <div className='bodyDiv'>
        <div>
          Hi there! Glad you found your way here.<br/>
          I created this website to show some of my skills and to house my resume.
        </div>
        <div>
          Current projects
          <br/><br/>
          <button className='bodyButton'
            onClick={() => window.open('http://checkbookanywhere.com', '_blank')}>
            CheckbookAnywhere
          </button>
          <br/>
          <button className='bodyButton' 
            onClick={() => window.open('https://www.npmjs.com/package/tc-version', '_blank')}>
            tc-version
          </button>
        </div>
        <div className='introBottomDiv'>
          Now the resume!
        </div>
      </div>
    );
  }
}
