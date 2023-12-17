import Config from "@config"
import Image from 'next/image'
import Link from "next/link"
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
            </a>
        </li>
    )
}

export default function() {
    return (
        <div className={styles['footer']}>
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
    ) 
}
