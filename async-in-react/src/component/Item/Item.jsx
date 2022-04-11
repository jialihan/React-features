import React from 'react';
import './Item.css';
function Item({ id, title, clicked }) {
    return (
        <>
            <div onClick={() => clicked(id)} className="item" key={id}>
                <p className="item_id">{id} </p>
                <p className="item_title">{title} </p>
            </div>
        </>
    );
}

export default Item;
