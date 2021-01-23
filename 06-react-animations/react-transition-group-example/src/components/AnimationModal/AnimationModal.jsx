import { Button } from "@material-ui/core";
import { useCallback, useState } from "react";
import Modal from '../Modal/Modal';
import BackDrop from '../Backdrop/Backdrop';
import { Transition } from 'react-transition-group';
import TransitionModal from '../Modal/ModalWithTransition';
import CSSTransitionModal from '../Modal/ModelWithCSSTransition'

export default function AnimationModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const modalOpenHandler = useCallback(() => {
        setIsOpen(true);
    })
    const closeModalHandler = useCallback(() => {
        setIsOpen(false);
    })

    return (
        <div>
            <h1>React Animations - Modal with React Transition Group</h1>
            {/* <Transition in={isOpen} timeout={800} mountOnEnter unmountOnExit>
                {state =>
                    (<Modal show={state} closed={closeModalHandler} />)}
            </Transition> */}
            {/* <TransitionModal show={isOpen} closed={closeModalHandler} /> */}
            <CSSTransitionModal show={isOpen} closed={closeModalHandler} />
            {isOpen ? <BackDrop show={isOpen} /> : null}
            <Button variant="contained" color="primary" onClick={modalOpenHandler}>Open modal</Button>
        </div>
    )
}
