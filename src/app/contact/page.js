import Config from "@config"
import Image from 'next/image'
import styles from "./style.module.css"

function ContactItem(props) {
    return (
        <li className={styles["contact-item-holder"]}>
            <a target="_blank" className={styles['contact-item']} href={props.path || '/'}>
                <div className={styles['contact-item-image']}>
                    <Image
                        src={props.image}
                        fill={true}
                        alt={props.name}
                    />
                </div>
                <span>{props.name}</span>
            </a>
        </li>
    )
}

export default function Contact() {
    return (
        <>
            <div className={styles["content-holder"]}>
                <div className={styles["content"]}>
                    <span className={styles["header"]}>Contact Me</span>
                    <span className={styles["text"]}>
                        If you are interested in my work or have any questions, contact me via <a className={styles["link"]} target="_blank" href="https://discordapp.com/users/512795535552544806/">discord</a>.
                    </span>
                    <ul className={styles['contact-list']}>
                        {Config.Socials.map((social, index) => {
                            return (
                                <li key={index} className={styles["contact"]}>
                                    <a target="_blank" className={styles['contact-link']} href={social.link || '/'}>
                                        <div className={styles['contact-image']}>
                                            <Image
                                                src={social.image}
                                                fill={true}
                                                alt={social.name}
                                            />
                                        </div>
                                        <span className={styles['contact-text']}>{social.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

/*

                    */
