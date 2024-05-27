import React, { Component } from 'react'
// import statements here - import css, 

class App extends Component {
constructor(){
  super();
  this.state = {
    count: 0
  };
  // bind clicks
this.increase = this.increase.bind(this);
this.decrease = this.decrease.bind(this);
this.reset = this.reset.bind(this);
}

state = {
  count: 0
}

// do I need to put state this in a constructor? when to use either?

// functions for increase, decrease, and reset
increase() {
  this.setState({ 
    count: this.state.count + 1
  });
}

decrease() {
  this.setState({ 
    count: this.state.count - 1
  });
}

reset()  {
  this.setState({ 
    count: 0
  }); // can this just be count: 0
  
}

  render() {
    return (
      <div>
      <h1>Count sheep with me!</h1>
      <h3>We currently have {this.state.count} sheep.</h3>
      <button onClick={this.increase}>More sheep!</button>
      <button onClick={this.decrease}>Fewer sheep!</button>
      <button onClick={this.reset}>Reset sheep</button>
      </div>
    )
  }
}



export default App;
