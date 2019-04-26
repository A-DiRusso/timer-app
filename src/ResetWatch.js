import React from 'react'

function ResetWatch() {
  return (
    <ul>
        {
            <button
                onClick={() => {
                    console.log('reset');
                }}
            >Reset</button>
        }
    </ul>
  )
}

export default ResetWatch;
