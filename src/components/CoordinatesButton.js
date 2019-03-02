// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  onReceiveCoordinates = (event) => {
    return console.log(event.target);
  }
  
  render() {
    return (
      <div>
      <button onClick={this.onReceiveCoordinates}></button>
      </div>
      );
  }
}