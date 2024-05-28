import React from 'react'

const Decrease = (props) => {
    const {decrease} = props
  return (
    <div>
        <button onClick={decrease}>Fewer Sheep</button>
    </div>
  )
}

export default Decrease