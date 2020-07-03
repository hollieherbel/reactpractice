import React, { useState, useEffect } from 'react'

export default function Clock() {
    const [currentTime, updateCurrentTime] = useState(new Date)



    useEffect(() => {
    setInterval(() => updateCurrentTime(new Date), 1000)
    })


    return (
        <div className='clock-wrapper'>
            <h3>{currentTime.toTimeString()}</h3>
        </div>
    )
}
