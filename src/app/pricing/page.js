import Config from "@config"
import styles from "./style.module.css"

export default function() {
    return (
        <>
            <div className={styles["content-holder"]}>
                <div className={styles["content"]}>
                    <span className={styles["header"]}>Pricing</span>
                    <div className={styles["pricing-list"]}>
                        {Config.Services.map((service, index) => {
                            return (
                                <div className={styles["pricing"]}>
                                    <div className={styles["pricing-left"]}>
                                        <span className={styles["pricing-tier"]}>{service.name}</span>
                                        <span className={styles["pricing-price"]}>{service.price}</span>
                                    </div>
                                    <div className={styles["pricing-right"]}>
                                        <a className={styles["pricing-link"]} href="/contact">Purchase</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
