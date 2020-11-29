import React, { useState } from 'react'
import Child from '../Child/Child';
import "./Container.css"
export function Container(props) {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("I am a Child .");
    const incHandler = () => {
        setCount(count + 1);
    }
    console.log("Render - Container");
    return (
        <div className="Container">
            <p>{count}</p>
            <button className="Button" onClick={incHandler}>Increase</button>
            <Child message={message} />
        </div>
    )
}
