import HomePage from "@/libs/homepage";
import styles from "./page.module.css";

export const metadata = {
  title: "UI Challenges",
  description: "Mini react apps library for frontend interview practice",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
