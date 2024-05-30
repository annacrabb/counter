import React from 'react'

const Reset = (props) => {
    const {reset} = props
  return (
    <span>
        <button onClick={reset}>Reset Sheep</button>
    </span>
  )
}

export default Reset