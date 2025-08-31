"use client";
import { useState } from "react";
import styles from "./page.module.css";
import ProgressBar from "./progress-bar";

const Page = () => {
    const [bars, setBars] = useState(0);
    
    return (
        <div className={styles.main}>
            <div>
                <button onClick={() => setBars(bars + 1)}>Add</button>
            </div>
            <div className={styles.bars}>{Array.from({ length: bars }).map((_, idx) => <ProgressBar key={idx} />)}</div>
        </div>
    );
};

export default Page;