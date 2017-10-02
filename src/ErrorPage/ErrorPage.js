import React, {Component} from 'react';

export default class ErrorPage extends Component {
  updatePage(e) {
    this.props.updatePage('/');
  }

  render() {
    return (
      <div>
        ERRORPAGE
        <button onClick={(e) => {this.updatePage('/')}}>TO HOME</button>
      </div>
    );
  }
}
