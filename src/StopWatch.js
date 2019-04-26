import React from 'react'

function StopWatch() {
  return (
    <ul>
        {
            <button
                onClick={() => {
                    console.log('Stop')
                }}
            >Stop</button>
        }
    </ul>
  )
}

export default StopWatch;