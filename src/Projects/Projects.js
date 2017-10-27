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
      <div>
        <div className='projectHeader'>
          <h2>{projectsHeader}</h2>
        </div>
        <div className='flex-row'>
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
