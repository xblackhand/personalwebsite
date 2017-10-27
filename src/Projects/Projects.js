import React, {Component} from 'react';
import '../App.css';
import './Projects.css';
import {
  projectsHeader, checkItOutButtonText, tcVersionLink, checkbookAnywhereLink,
  checkbookAnywhereHeader, tcVersionHeader, checkbookAnywhereBodyText,
  tcVersionBodyText
} from '../globals';

export default class Projects extends Component {
  render() {
    return (
      <div className='bodyDiv centered'>
        <div className='bodyDiv header bottom'>
          <h2>{projectsHeader}</h2>
        </div>
        <div className='bodyDiv row-orientation top'>
          <div>
            <h3>{checkbookAnywhereHeader}</h3>
            <p>{checkbookAnywhereBodyText}</p>
            <button className='bodyButton'
              onClick={() => window.open(checkbookAnywhereLink, '_blank')}>
              {checkItOutButtonText}
            </button>
          </div>
          <div>
            <h3>{tcVersionHeader}</h3>
            <p>{tcVersionBodyText}</p>
            <button className='bodyButton'
              onClick={() => window.open(tcVersionLink, '_blank')}>
              {checkItOutButtonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
