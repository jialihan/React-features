import { Button } from "@material-ui/core";
import { useCallback, useState } from "react";
import Modal from '../Modal2/Modal';
import BackDrop from '../Backdrop/Backdrop';

export default function ErrorMain(props) {
    const [isOpen, setIsOpen] = useState(false);
    const modalOpenHandler = useCallback(() => {
        setIsOpen(true);
    })
    const closeModalHandler = useCallback(() => {
        setIsOpen(false);
    })
    return (
        <div>
            <h1>React Animations - Errors in CSS Transition/Animation</h1>
            { isOpen ? <Modal show={isOpen} closed={closeModalHandler} /> : null}
            { isOpen ? <BackDrop show={isOpen} /> : null}
            <Button variant="contained" color="primary" onClick={modalOpenHandler}>Open error modal</Button>
        </div>
    )
}
