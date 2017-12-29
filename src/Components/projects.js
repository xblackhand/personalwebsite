import React, {Component} from 'react';
import LinkButton from './linkButton';
import {
  projectsHeader, checkbookAnywhereHeader, checkbookAnywhereBodyText,
  checkItOutButtonText, lookAtTheCodeButtonText, tcVersionHeader,
  tcVersionBodyText, personalWebsiteHeader, personalWebsiteBodyText,
  checkbookAnywhereLink, tcVersionLink, personalWebsiteLink
} from '../globals';

export default class Projects extends Component {
  render() {
    return (
      <div className='projectsSection'>
        <div className='sectionHeader no-padding'>
          <h2>{projectsHeader}</h2>
        </div>
        <div className='flex-row'>
          <div className='flex-row-item'>
            <h3>{checkbookAnywhereHeader}</h3>
            <p>{checkbookAnywhereBodyText}</p>
            <LinkButton linkTo={checkbookAnywhereLink} text={checkItOutButtonText}
              backgroundColor='white' hoverBackgroundColor='#15F0E1' />
          </div>
          <div className='flex-row-item'>
            <h3>{tcVersionHeader}</h3>
            <p>{tcVersionBodyText}</p>
            <LinkButton linkTo={tcVersionLink} text={checkItOutButtonText}
              backgroundColor='white' hoverBackgroundColor='#15F0E1' />
          </div>
          <div className='flex-row-item'>
            <h3>{personalWebsiteHeader}</h3>
            <p>{personalWebsiteBodyText}</p>
            <LinkButton linkTo={personalWebsiteLink} text={lookAtTheCodeButtonText}
              backgroundColor='white' hoverBackgroundColor='#15F0E1' />
          </div>
        </div>
      </div>
    );
  }
}
