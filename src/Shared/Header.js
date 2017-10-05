import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  updatePage(page) {
    this.props.updatePage(page);
  }

  getNavBar() {
    return (
      <div className='navbar'>
        <div className='headerButtonWrapper'>
          <button className='headerButton' onClick={() => this.updatePage('/')}>Home</button>
        </div>
        <div className='headerButtonWrapper'>
          <button className='headerButton' onClick={() => this.updatePage('/blog')}>Blog</button>
        </div>
        <div className='headerButtonWrapper'>
          <button className='headerButton' onClick={() => this.updatePage('/contact')}>Contact</button>
        </div>
      </div>
    );
  }

  getAccount() {
    var account;

    if (this.props.user === '' || this.props.user === null) {
      account = (
        <div className='headerButtonWrapper'>
          <button className='headerButton' onClick={() => this.updatePage('/login')}>Log in</button>
        </div>
      );
    } else {
      account = (
        <div className='headerButtonWrapper'>
          <div className='userSpanWrapper'>
            <span className='userSpan'>Welcome {this.props.user}!</span>
          </div>
          <div className='logOutWrapper'>
            <button className='headerButton' onClick={this.props.logOut}>Settings</button>
          </div>
        </div>
      );
    }

    return (
      <div className='account'>
        {account}
      </div>
    )
  }

  render() {
    return (
      <div className='header'>
        {this.getNavBar()}
        {this.getAccount()}
      </div>
    );
  }
}
