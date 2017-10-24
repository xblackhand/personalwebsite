import React, {Component} from 'react';
import '../App.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className='resumeDiv'>
        <iframe className='resumeFrame' title='resume' src="https://docs.google.com/document/d/e/2PACX-1vTgWSn-0l8eQNZzc63BpmW7nDK6IxC2nNKJTLOxI6QeMxo3MlgJA_WSn8WaVYkCUqZ-ucZ5Bjo8s4XI/pub?embedded=true"/>
      </div>
    );
  }
}
