import React from 'react'

function ResetWatch(props) {
  return (
    <ul>
        {
            <button
                onClick={() => {
                    props.handleClick(props.time);
                }}
            >Reset</button>
        }
    </ul>
  )
}

export default ResetWatch;
