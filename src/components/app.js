import React, { Component } from 'react';
import Align from "./align";
import Hide from "./hide"
import NumberChange from "./numberchange";
import SizeChange from "./sizechange";
import ColorChange from "./colorchange";

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
      </div>
    );
  }
}
