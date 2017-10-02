import React, {Component} from 'react';

export default class HomePage extends Component {
  updatePage(page) {
    this.props.updatePage(page);
  }

  render() {
    return (
      <div>
        HOMEPAGE
        <br/>
        <button onClick={(e) => {this.updatePage('/error')}}>TO ERROR</button>
      </div>
    );
  }
}
