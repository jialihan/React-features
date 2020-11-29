import React from 'react';

function Child({ message }) {
    console.log("Render - Child");
    return (
        <div className="Child">
            {message}
        </div>
    )
}

export default React.memo(Child);
