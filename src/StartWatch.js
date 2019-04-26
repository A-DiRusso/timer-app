import React from 'react'

function StartWatch() {
  return (
      <ul>
          {
              <button
                    onClick={() => 
                             console.log('start')}
              >Start</button>
          }
      </ul>

  )
}

export default StartWatch;