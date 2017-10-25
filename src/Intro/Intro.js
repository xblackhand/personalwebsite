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
        <div>
          Current projects
          <br/><br/>
          <a href='http://checkbookanywhere.com'>CheckbookAnywhere.com</a>
          <br/>
          <a href='https://www.npmjs.com/package/tc-version'>tc-version</a>
        </div>
        <div className='introBottomDiv'>
          Now the resume!
        </div>
      </div>
    );
  }
}
