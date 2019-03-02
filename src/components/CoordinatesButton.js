// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  function onReceiveCoordinates(prop) = {
    return console.log(prop);
  }
  
  render() {
    return (
      <div>
      <button onClick={this.onReceiveCoordinates}></button>
      </div>
      );
  }
}