import React from 'react'

function StartWatch(props) {
  return (
      <ul>
          {
              <button
                    onClick={() => 
                             console.log(props.time)}
              >Start</button>
          }
      </ul>

  )
}

export default StartWatch;