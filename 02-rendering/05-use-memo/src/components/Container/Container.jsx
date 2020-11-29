import React, { useState, useMemo, useCallback } from 'react'
import Child from '../Child/Child';
import "./Container.css"
export function Container(props) {
    const initalColors = [{ name: "blue", id: 1 }, { name: "green", id: 2 }, { name: "yellow", id: 3 }]
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState(initalColors)
    const incHandler = () => {
        setCount(count + 1);
    }
    const deleteColorHandler = useCallback((colorId) => {
        setColors(colors.filter(el => el.id !== colorId));
    }, [colors]);
    console.log("Render - Container");

    const colorList = useMemo(() => {
        return colors.map(el =>
            <Child color={el.name} onDelete={deleteColorHandler} key={el.id} />
        )
    }, [colors, deleteColorHandler])

    return (
        <div className="Container">
            <p>{count}</p>
            <button className="Button" onClick={incHandler}>Increase</button>
            { colorList}
        </div>
    )
}
