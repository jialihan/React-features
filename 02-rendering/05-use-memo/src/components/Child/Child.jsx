import React from 'react';
import './Child.css'
function Child({ color, onDelete }) {
    console.log("Render - Child");
    return (
        <div className={`Child ${color}`} onClick={() => onDelete(color.id)} >
            I am a color item
        </div >
    )
}

export default Child;
