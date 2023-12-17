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
                <span>{props.name}</span>
            </a>
        </li>
    )
}

export default function() {
    return (
        <>
            <div className={styles['content-holder']}>
                <div className={styles["content"]}>
                    <div className={styles["intro"]}>
                        <span>Hi there, I'm L3G5ND</span>
                        <div className={styles["intro-wave"]}>
                            <Image
                                src="/wave.png"
                                fill={true}
                                alt={"\"wave\""}
                            />
                        </div>
                    </div>
                    <p className={styles["role"]}>
                        Roblox Programmer/Developer
                    </p>
                    <p className={styles["main"]}>
                        I am a programmer who has worked with many languages including Roblox Lua, C++, Python, and Javascript.
                        Over all the years I have been programming I have gained a strong skillset in all of these languages, most notably Roblox Lua.
                        Roblox is what got me into programming and is what I decided to focus on.
                    </p>
                    <p className={styles["main"]}>
                        I have worked on a wide variety of <Link className={styles['text-link']}href="/portfolio">projects and libraries</Link> on Roblox. 
                        The majority of libraries I've created are open source for anyone to use and as a way prove to my clients what I am capable of.
                    </p>
                    <p className={styles["main"]}>
                        If you are looking for someone to program something up to your expectations, you are in the right place.
                        I can bring your ideas to life in no time and let you build your dream project.
                        Still have questions? <Link className={styles['text-link']}href="/contact">Contact Me</Link>
                    </p>
                    <div className={styles['about-nav']}>
                        <Link className={styles['about-nav-item']} href="/portfolio">
                            My Work
                        </Link>
                        <Link className={styles['about-nav-item']} href="/pricing">
                            Pricing
                        </Link>
                    </div>
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
