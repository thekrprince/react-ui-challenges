"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const ProgressBar = () => {
    const [startTransition, setStartTransition] = useState(false);

    useEffect(() => {
        if (startTransition) {
            return;
        }

        setStartTransition(true);
    }, [startTransition]);

    return (
        <div className={styles.barContainer}>
            <div className={`${styles.bar} ${startTransition && styles.barFilled}`} />
        </div>
    );
};

export default ProgressBar;