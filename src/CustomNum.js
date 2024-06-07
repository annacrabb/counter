import React, { Component } from 'react'

class CustomNum extends Component {
    state = {
        count: ''
    }

    handleChange = (e) => {
        this.setState({
            count: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.customNum(this.state.count)
        this.setState({
            count: ''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.count} />
            <button>Enter Custom</button>
        </form>
      </div>
    )
  }
}

export default CustomNum