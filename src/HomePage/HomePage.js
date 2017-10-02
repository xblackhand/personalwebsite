import React, {Component} from 'react';

export default class HomePage extends Component {
  updatePage(page) {
    this.props.updatePage(page);
  }

  render() {
    return (
      <div>
        HOMEPAGE
        <button onClick={(e) => {this.updatePage('/error')}}>TO ERROR</button>
        <button onClick={(e) => {this.updatePage('/login')}}>TO LOGIN</button>
      </div>
    );
  }
}
