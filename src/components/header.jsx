"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { FaRegMoon, FaSun, FaGithub } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  return (
    <div className={`${styles.header} ${theme === "dark" && styles.dark}`}>
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
        <div
          className={styles.theme}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <FaRegMoon size="1.7rem" />
          ) : (
            <FaSun size="1.7rem" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
