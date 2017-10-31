import React, {Component} from 'react';
import './Header.css';
import {
  title, gitHubLinkText, gitHubLink, npmLinkText, npmLink, emailLinkText,
  linkedInLinkText, linkedInLink, emailLink
} from '../globals';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickLinksOpen: false
    };
    global.addEventListener('click', this.handleClick.bind(this));
    global.addEventListener('touchstart', this.handleClick.bind(this));
  }

  handleClick(e) {
    var elems = document.getElementsByClassName('headerButton');
    for (var i = 0; i < elems.length; i++) {
      if (elems.item(0) === e.target) {
        return;
      }
    }
    this.setState({quickLinksOpen: false});
  }

  quickLinksClicked(e) {
    e.preventDefault();
    this.setState({quickLinksOpen: !this.state.quickLinksOpen});
  }

  getNavBar() {
    return (
      <div className='navbar'>
        <div className='blogTitle'>
          {title}
        </div>
      </div>
    );
  }

  getQuickLinks() {
    var dropDownStyle;
    var quickLinkStyle;

    if (this.state.quickLinksOpen) {
      quickLinkStyle = {'color': '#15F0E1'};
      dropDownStyle = {visibility: 'visible', opacity: '1'};
    } else {
      dropDownStyle = {visibility: 'hidden', opacity: '0'};
    }

    // onMouseLeave={this.closeQuickLinks.bind(this)}
    // onMouseEnter={this.openQuickLinks.bind(this)}
    return (
      <div className='account'>
        <div ref='dropDownRef'>
          <button className='headerButton menuButton' style={quickLinkStyle} tag='test'
            onClick={this.quickLinksClicked.bind(this)}>
            &#9776;
          </button>
          <div className='dropDown' style={dropDownStyle}>
            <button className='headerButton dropDownButton'
              onClick={() => window.open(linkedInLink, '_blank')}>
              {linkedInLinkText}
            </button>
            <br/>
            <button className='headerButton dropDownButton'
              onClick={() => window.open(gitHubLink, '_blank')}>
              {gitHubLinkText}
            </button>
            <br/>
            <button className='headerButton dropDownButton'
              onClick={() => window.open(npmLink, '_blank')}>
              {npmLinkText}
            </button>
            <br/>
            <button className='headerButton dropDownButton'
              onClick={() => window.location.href=emailLink}>
              {emailLinkText}
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='header'>
        {this.getNavBar()}
        {this.getQuickLinks()}
      </div>
    );
  }
}
