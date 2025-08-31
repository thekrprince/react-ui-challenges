import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>UI Challenges</h1>
      <Link href="/accordion">Accordion</Link>
      <Link href="/progress-bars">Progress Bars</Link>
    </div>
  );
}
