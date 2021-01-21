import { Button } from "@material-ui/core";
import { useCallback, useState } from "react";
import Modal from '../Modal/Modal';
import BackDrop from '../Backdrop/Backdrop';

export default function Main(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const modalOpenHandler = useCallback(() => {
        setIsOpen(true);
    })
    const closeModalHandler = useCallback(() => {
        setIsOpen(false);
    })
    const modalOpenHandler2 = useCallback(() => {
        setIsOpen2(true);
    })
    const closeModalHandler2 = useCallback(() => {
        setIsOpen2(false);
    })
    return (
        <div>
            <h1>React Animations - CSS Transition</h1>
            <Modal show={isOpen} closed={closeModalHandler} />
            <Button variant="contained" color="primary" onClick={modalOpenHandler}>Open modal</Button>
            <h1>React Animations - CSS Animation</h1>
            <Modal show={isOpen2} closed={closeModalHandler2} />
            <BackDrop show={isOpen || isOpen2} />
            <Button variant="contained" color="primary" onClick={modalOpenHandler2}>Open modal2</Button>
        </div>
    )
}
