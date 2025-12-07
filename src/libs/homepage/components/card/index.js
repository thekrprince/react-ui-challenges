import Link from "next/link";
import styles from "../home.module.css";

const Card = (props) => {
    const { path, title } = props;
    return (
        <Link href={path} className={styles.card}>{title}
        </Link>
    )
};

export default Card;