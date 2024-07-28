import styles from "./not-found-style.module.css"

export default function PageNotFound() {
    return (
        <div className={styles["content-holder"]}>
            <div className={styles["content"]}>
                <span className={styles["left-text"]}>404</span>
                <span className={styles["right-text"]}>Page Not Found</span>
            </div>
        </div>
    )
}