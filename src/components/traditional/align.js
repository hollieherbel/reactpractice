import React, { useState } from 'react'

export default function alignment() {
   const [alignment, updateAlignment] = useState("left")

    }

    const changeAlignment = (newAlignment) => {
        updateAlignment(newAlignment)
    }

    
    return (
        <div className='alignment-wrapper'>
            <h3 style={{textAlign: alignment}}>Align Me!</h3>
            <button onClick={() => changeAlignment("left")}>Left</button>
            <button onClick={() => changeAlignment("center")}>Center</button>
            <button onClick={() => changeAlignment("right")}>Right</button>
        </div>
    )

