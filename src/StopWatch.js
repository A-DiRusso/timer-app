import React from 'react'

function StopWatch(props) {
  return (
    <ul>
        {
            <button
                onClick={() => {
                    props.handleClick(props.time)
                }}
            >Stop</button>
        }
    </ul>
  )
}

export default StopWatch;