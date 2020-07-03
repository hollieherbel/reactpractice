import React, { useState } from 'react'

export default function changeColor() {
    const [textColor, updateTextColor] = useState("rgb(121, 115, 115)")


    const colorChange = () => {
        updateTextColor(event.target.value)
    }
   

   
    return (
        <div className='change-color'>
            <h3 style={{color: textColor}}>Color Me!</h3>
            <input type="text" onInput={() => colorChange()}></input>
        </div>
    )
}