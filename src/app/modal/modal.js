import React from 'react';
import { createPortal } from 'react-dom';
import styles from "./page.module.css";

const Modal = (props) => {
    const { children, title, open, onClose } = props;

    if (!open) {
        return null;
    }

    return createPortal(
        <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
                <h1>{title}</h1>
                <div>{children}</div>
                <div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
        , document.body);
};

export default Modal;