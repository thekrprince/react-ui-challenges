import Header from "@/components/header";
import Link from "next/link";
import Card from "./card";
import styles from "./home.module.css";
import { ROUTES } from "../routes";

const HomePage = () => {
    return (
        <>
            <Header />
            <section className={styles.projectSection}>
                {ROUTES.map((route, idx) => <Card key={idx} title={route.title} path={route.path} />)}
            </section>
        </>
    )
}

export default HomePage;