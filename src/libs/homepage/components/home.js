import Header from "@/components/header";
import Link from "next/link";
import Card from "./card";
import styles from "./home.module.css";

const HomePage = () => {
    return (
        <>
            <Header />
            <section className={styles.projectSection}>
                <Card path="/accordion" title="Accordion" />
                <Card path="/progress-bars" title="Progress Bars" />
                <Card path="/calculator" title="Calculator" />
                <Card path="/modal" title="Modal" />
            </section>
        </>
    )
}

export default HomePage;