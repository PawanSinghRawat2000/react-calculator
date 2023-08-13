import React from 'react'
import './Display.css'

const Display = ({answer,input}) => {

  return (
    <div className='display'>

        <input
          type="text"
          name="input"
          value={input}
          className="input"
          placeholder="0"
          maxLength={12}
          disabled
        />
        <input
          type="text"
          name="value"
          className="input"
          value={answer}
          disabled
        />

</div>
  )
}

export default Display
