import React, { Component } from 'react';
import Increase from './Increase';
import Decrease from './Decrease';
import Reset from './Reset';
import CustomNum from './CustomNum';
import audio from './baa.wav'


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
    // create audio object
    this.audio = new Audio(audio);
  }

  //function to play sound
  playSound() {
    this.audio.play();
  }

  // functions for increase, decrease, and reset
  increase() {
    this.setState({ count: this.state.count + 1 }, 
      () => {
      // callback after state is updated
      this.playSound();
      console.log('baa');
    });
  }

  customNum = (num) => {
    let value = parseInt(num)
    this.setState({
      count: this.state.count + value
    })
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
        <div>
          <Increase increase={this.increase} />
          <Decrease decrease={this.decrease} />
          <Reset reset={this.reset} />
          <CustomNum customNum={this.customNum} />
        </div>
      </div>
    )
  }
}

export default App;
