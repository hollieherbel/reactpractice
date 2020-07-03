import React, { useState } from 'react'

export default function hidetext() {
    const [hide, updateHide] = useState("visible")


    const toggleText = () => {
        if (hide === "visible") {
            updateHide("hidden")
        } else {
            updateHide("visible")
        }
    
    }


        return (
            <div className='hide-text'>
                <h3 style={{visibility: hide }}>Hide Me!</h3>
                <button onClick={toggleText}>{hide === "hidden" ? "Show" : "Hide"}</button>
            </div>
        )
    }