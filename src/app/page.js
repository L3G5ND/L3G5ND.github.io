import Image from 'next/image'
import Link from "next/link"
import styles from "./style.module.css"

export default function Home() {
    return (
        <>
            <div className={styles['content']}>
                <div className={styles['welcome-holder']}>
                    <div className={styles['welcome']}>
                        <p className={styles["name"]}>L3G5ND</p>
                        <p className={styles["text"]}>
                            Roblox Developer bringing the best ideas to life.
                        </p>
                        <Link className={styles["more"]} href={"/about"}>
                            <span>See more about me</span>
                            <div className={styles["more-arrow"]}>
                                <Image
                                    src={"/arrow.png"}
                                    fill={true}
                                    alt={"arrow"}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles["background-image"]}>
                    <Image
                        style={{objectFit: "cover"}}
                        src="/welcome-background.png"
                        fill={true}
                        alt={"\"wave\""}
                    />
                </div>
            </div>
        </>
    )
}
