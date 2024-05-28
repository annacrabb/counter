import React, { Component } from 'react';
import Increase from './Increase';
import Decrease from './Decrease';
import Reset from './Reset';
import audio from './'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // bind clicks
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }


  // functions for increase, decrease, and reset
  increase() {
    this.setState({
      count: this.state.count + 1
    });
    new Audio('./')
  }

  decrease() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }



  render() {
    return (
      <div>
        <h1>Count sheep with me!</h1>
        <h3>We currently have {this.state.count} sheep.</h3>
        <span>
          <Increase increase={this.increase} />
          <Decrease decrease={this.decrease} />
          <Reset reset={this.reset} />
        </span>
      </div>
    )
  }
}

export default App;
