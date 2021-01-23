import React from "react";
import "./Modal.css";
import { Transition } from 'react-transition-group';

const transitionModal = props => {
    return (
        <Transition in={props.show} timeout={800} mountOnEnter unmountOnExit>
            { state => {
                const cssClasses = [
                    "Modal",
                    state === 'entering' ? "ModalOpen" : state === 'exiting' ? "ModalClosed" : null
                ];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal with React Transiton Group</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
      </button>
                    </div>)
            }}
        </Transition>
    );
};

export default transitionModal;
