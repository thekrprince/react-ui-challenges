"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <Link href="/" className={styles.headerText}>
          <span>React UI Challenges</span>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <a
          className="svg-icon"
          href="https://github.com/thekrprince/react-ui-challenges"
          target="_blank"
        >
          <FaGithub size="1.7rem" />
        </a>
      </div>
    </div>
  );
};

export default Header;
