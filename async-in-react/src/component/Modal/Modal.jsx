import React from 'react';
import { Modal } from '@material-ui/core';
import './Modal.css';
const MyModal = ({ open, onCloseHandler, onDeleteItem }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={onCloseHandler}
                className="modal"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal-body">
                    <h2>Do you want to delete this item?</h2>
                    <div className="btn-controls">
                        <button
                            className="secondary btn"
                            onClick={onCloseHandler}
                        >
                            Cancel
                        </button>
                        <button className="primary btn" onClick={onDeleteItem}>
                            Confirm
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default MyModal;
