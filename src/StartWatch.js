import React from 'react'

function StartWatch(props) {
  return (
      <ul>
          {
              <button
                    onClick={() => {
                        props.handleClick(props.time)
                    }}
              >Start</button>
          }
      </ul>

  )
}

export default StartWatch;