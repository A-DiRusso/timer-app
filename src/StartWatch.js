import React from 'react'

function StartWatch() {
  return (
      <ul>
          {
              <button
                    onClick={() => 
                             console.log('click')}
              >Start</button>
          }
      </ul>

  )
}

export default StartWatch;