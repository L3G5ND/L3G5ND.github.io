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

export default function() {
    return (
        <>
            <div className={styles["content-holder"]}>
                <div className={styles["content"]}>
                    <span className={styles["header"]}>Contact Me</span>
                    <span className={styles["text"]}>
                        If you are interested in my work or have any questions, contact me via <a className={styles["email-link"]} href="mailto:L3G5ND@L3G5ND.com">e-mail</a>.
                    </span>
                    <ul className={styles['contact-list']}>
                        <ContactItem
                            name="Roblox"
                            image="/roblox.png"
                            path={Config.RobloxLink}
                        />
                        <ContactItem
                            name="Discord"
                            image="/discord.png"
                            path={Config.DiscordLink}
                        />
                        <ContactItem
                            name="Github"
                            image="/github.png"
                            path={Config.GithubLink}
                        />
                        <ContactItem
                            name="Twitter"
                            image="/twitter.png"
                            path={Config.TwitterLink}
                        />
                        <ContactItem
                            name="Email"
                            image="/email.png"
                            path={"mailto:" + Config.Email}
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

/*

                    */
