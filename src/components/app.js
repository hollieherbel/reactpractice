import React, { Component } from 'react';
import Align from "./hooks/align";
import Hide from "./hooks/hide"
import NumberChange from "./hooks/numberchange";
import SizeChange from "./hooks/sizechange";
import ColorChange from "./hooks/colorchange";
import Clock from "./hooks/clock"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Align />
        <br />
        <Hide />
        <br />
        <NumberChange />
        <br />
        <SizeChange />
        <br />
        <ColorChange />
        <br />
        <Clock />
      </div>
    );
  }
}
