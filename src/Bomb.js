// your Bomb code here!
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft > 0) {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      return <h2>Boom!</h2>
    }
  }

}