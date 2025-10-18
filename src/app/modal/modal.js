import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from "./page.module.css";

function useOnKeyPress(key, fn) {
    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === key) {
                fn();
            }
        }

        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, [fn])
}

function useOnClickOutside(elRef, fn) {
    useEffect(() => {
        function onClickOutside(event) {
            if (event.target instanceof Node && elRef.current !== null && !elRef.current?.contains(event.target)) {
                fn();
            }
        }

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("touchstart", onClickOutside);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("touchstart", onClickOutside);
        }
    }, [fn])
}

const Modal = (props) => {
    const { children, title, open, onClose } = props;

    const dialogRef = useRef(null);

    useOnClickOutside(dialogRef, onClose);
    useOnKeyPress("Escape", onClose);

    if (!open) {
        return null;
    }

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal} ref={dialogRef}>
                <h1>{title}</h1>
                <div>{children}</div>
                <div>
                    <button onClick={onClose} className={styles.btn}>Close</button>
                </div>
            </div>
        </div>
        , document.body);
};

export default Modal;