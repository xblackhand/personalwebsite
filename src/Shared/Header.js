import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickLinksOpen: false
    };
  }

  quickLinksClicked(e) {
    e.preventDefault();
    this.setState({quickLinksOpen: !this.state.quickLinksOpen});
  }

  closeQuickLinks(e) {
    e.preventDefault();
    this.setState({quickLinksOpen: false});
  }

  getNavBar() {
    return (
      <div className='navbar'>
        <div className='blogTitle'>Travis Cook</div>
      </div>
    );
  }

  getQuickLinks() {
    var dropDownStyle;
    var quickLinkFontColor;

    if (this.state.quickLinksOpen) {
      quickLinkFontColor = {'color': '#15F0E1'};
      dropDownStyle = {visibility: 'visible', opacity: '1'};
    } else {
      quickLinkFontColor = {'color': 'inherit'};
      dropDownStyle = {visibility: 'hidden', opacity: '0'};
    }

    return (
      <div className='account'>
        <div ref='dropDownRef' onMouseLeave={this.closeQuickLinks.bind(this)}>
          <button className='headerButton' style={quickLinkFontColor} onClick={this.quickLinksClicked.bind(this)}>Quick Links</button>
          <div className='dropDown' style={dropDownStyle}>
            <button className='headerButton dropDownButton' onClick={() => window.open('https://www.linkedin.com/in/travis-cook-2b5546117/', '_blank')}>LinkedIn</button><br/>
            <button className='headerButton dropDownButton' onClick={() => window.location.href='mailto: traviswaynecook@gmail.com?subject=Sending from your website link&body=Hi Travis,'}>Email</button><br/>
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
