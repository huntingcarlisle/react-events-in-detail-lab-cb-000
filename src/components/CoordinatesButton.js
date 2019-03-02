// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX])
  }
  
  render() {
    return (
      <div>
      <button onClick={this.handleClick}></button>
      </div>
      );
  }
}