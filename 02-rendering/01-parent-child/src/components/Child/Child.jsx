import React from 'react'
import './Child.css'

export function Child(props) {

    console.log("Render - Child");
    return (
        <div className="Child">
            I am a Child .
        </div>
    )
}

