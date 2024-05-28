import React from 'react'

const Increase = (props) => {
    const {increase} = props
  return (
    <div>
        <button onClick={increase}>More Sheep</button>
    </div>
  )
}

export default Increase