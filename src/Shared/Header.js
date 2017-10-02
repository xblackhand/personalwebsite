import React, {Component} from 'react';
import styles from '../App.css';

export default class Header extends Component {
  getHeader() {
    var header;

    header = (
      <div className={styles.header}>
        {this.getNavBar()}
        {this.getAccount()}
      </div>
    );
    return header;
  }

  getNavBar() {
    return (
      <div className={styles.navbar}>
        <button>Home</button>
        <button>Blog</button>
        <button>Contact</button>
      </div>
    );
  }

  getAccount() {
    var account;

    if (this.props.user === '' || this.props.user === null) {
      account = (
        <div>
          <button>Log in</button>
        </div>
      );
    } else {
      account = (
        <button>Log out</button>
      );
    }

    return (
      <div className={styles.account}>
        {account}
      </div>
    )
  }

  userHeader() {
    var headerItems;

    headerItems = (
      <div>
        Welcome {this.props.user}!
      </div>
    );
    return headerItems;
  }

  noUserHeader() {
    var headerItems;

    headerItems = (
      <div>
        NO USER LOGGED IN
      </div>
    );
    return headerItems;
  }

  render() {
    return (
      this.getHeader()
    );
  }
}
