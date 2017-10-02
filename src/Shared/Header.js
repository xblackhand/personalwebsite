import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  updatePage(page) {
    this.props.updatePage(page);
  }

  getHeader() {
    var header;

    header = (
      <div className='header'>
        {this.getNavBar()}
        {this.getAccount()}
      </div>
    );
    return header;
  }

  getNavBar() {
    return (
      <div className='navbar'>
        <button className='headerButton' onClick={() => this.updatePage('/')}>Home</button>
        <button className='headerButton' onClick={() => this.updatePage('/blog')}>Blog</button>
        <button className='headerButton' onClick={() => this.updatePage('/contact')}>Contact</button>
      </div>
    );
  }

  getAccount() {
    var account;

    if (this.props.user === '' || this.props.user === null) {
      account = (
        <div>
          <button className='headerButton' onClick={() => this.updatePage('/login')}>Log in</button>
        </div>
      );
    } else {
      account = (
        <div>
          <span>{this.props.user}</span>
          <button className='headerButton' onClick={this.props.logOut}>Log out</button>
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
      this.getHeader()
    );
  }
}
