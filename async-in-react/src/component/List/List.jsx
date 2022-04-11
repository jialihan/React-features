import React from 'react';
import Item from '../Item/Item';
import './List.css';
const List = ({ items, openModal }) => {
    console.log('Render list data:', items);
    return items.length > 0 ? (
        <div className="list">
            {items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    clicked={openModal}
                />
            ))}
        </div>
    ) : null;
};

export default React.memo(List);
