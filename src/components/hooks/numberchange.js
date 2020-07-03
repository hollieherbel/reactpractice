import React, { useState } from 'react'

export default function numberchange() {
    const [num, updatenum] = useState(0)


    const incrementor = () => {
        updatenum(num + 1)
    }
   
    const decrementor = () => {
        updatenum(num - 1)
    }
   
    return (
        <div className='number-change'>
            <button onClick={incrementor}>+</button>
            <h3>{num}</h3>
            <button onClick={decrementor}>-</button>
        </div>
    )
}