// This header is used inside the small apps
"use client";
import Link from "next/link";
import { FaBackward, FaGithub } from "react-icons/fa";
import styles from "./index.module.css";

const Header = (props) => {
  const { title } = props;
  return (
    <div className={styles.header}>
      <Link href="/">
        <FaBackward size="1.7rem" />
      </Link>
      <h1>{title}</h1>
      <div className={styles.rightSide}>
        <a
          className="svg-icon"
          href="https://github.com/thekrprince/react-ui-challenges"
          target="_blank"
          rel="noopener"
        >
          <FaGithub size="1.7rem" />
        </a>
      </div>
    </div>
  );
};

export default Header;
