import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './List.css';

class TransitionGroupList extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item, index) => (
            // <li
            //     key={index}
            //     className="ListItem"
            //     onClick={() => this.removeItemHandler(index)}>{item}
            // </li>
            <CSSTransition key={index} classNames="item" timeout={500}>
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(index)}>{item}
                </li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/* <ul className="List">
                    {listItems}
                </ul> */}
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default TransitionGroupList;