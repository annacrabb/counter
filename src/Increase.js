import React from 'react'

const Increase = (props) => {
    const {increase} = props
  return (
    <span>
        <button onClick={increase}>More Sheep</button>
    </span>
  )
}

export default Increase