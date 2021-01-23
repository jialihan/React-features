import React from "react";
import "./Modal.css";
import { CSSTransition } from 'react-transition-group';

const cssTransitionModal = props => {
    const animationTiming = {
        enter: 800,
        exit: 800
    };
    return (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            // classNames="fade-modal"
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}
        >
            <div className="Modal">
                <h1>A Modal with React Transiton Group</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default cssTransitionModal;
