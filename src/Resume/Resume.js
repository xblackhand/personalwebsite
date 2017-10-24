import React, {Component} from 'react';
import '../App.css';

export default class Resume extends Component {
  render() {
    return (
      <div className='bodyDiv resume'>
        <iframe className='resumeIFrame' title='resumeIFrame'
         src="https://docs.google.com/document/d/e/2PACX-1vTgWSn-0l8eQNZzc63BpmW7nDK6IxC2nNKJTLOxI6QeMxo3MlgJA_WSn8WaVYkCUqZ-ucZ5Bjo8s4XI/pub?embedded=true"/>
      </div>
    );
  }
}
