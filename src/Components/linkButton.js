import React, {Component} from 'react';

export default class LinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        display: 'block',
        appearance: 'none',
        border: '2px black solid',
        backgroundColor: this.props.backgroundColor || 'inherit',
        color: 'black',
        textAlign: 'center',
        padding: '.5em 1em',
        margin: '0 auto',
        fontSize: '16px',
        cursor: 'pointer'
      }
    }
  }

  setHoverAttributes(e) {
    var style = Object.assign({}, this.state.style);
    style.backgroundColor = this.props.hoverBackgroundColor
    this.setState({
      style: style
    });
  }

  resetAttributes(e) {
    var style = Object.assign({}, this.state.style);
    style.backgroundColor = this.props.backgroundColor || 'inherit';
    this.setState({
      style: style
    });
  }

  render() {
    return (
      <button style={this.state.style}
        onMouseOver={this.setHoverAttributes.bind(this)}
        onMouseLeave={this.resetAttributes.bind(this)}
        onClick={() => window.open(this.props.linkTo, '_blank')}>
        {this.props.text}
      </button>
    );
  }
}
