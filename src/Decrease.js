import React from 'react'

const Decrease = (props) => {
    const {decrease} = props
  return (
    <span>
        <button onClick={decrease}>Fewer Sheep</button>
    </span>
  )
}

export default Decrease