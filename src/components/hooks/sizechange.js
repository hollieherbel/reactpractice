import React, { useState } from 'react'

export default function changeSize() {
    const [textSize, updateTextSize] = useState(12)


    const biggerFont = () => {
        updateTextSize(textSize + 10)
    }

    const smallerFont = () => {
        updateTextSize(textSize - 10)
    }


 

    return (
        <div className='change-font-size'>
            <h3 style={{ fontSize: textSize}}>{textSize}px</h3>
            <button onClick={biggerFont}>Bigger</button>
            <button onClick={smallerFont}>Smaller</button>
        </div>
    )
}