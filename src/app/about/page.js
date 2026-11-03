import Config from "@config"
import Image from 'next/image'
import Link from "next/link"
import styles from "./style.module.css"

export default function About() {
    return (
        <>
            <div className={styles['content-holder']}>
                <div className={styles["content"]}>
                    <div className={styles["intro"]}>
                        <span>Hi there, I&apos;m L3G5ND</span>
                        <div className={styles["intro-wave"]}>
                            <Image
                                src="/wave.png"
                                fill={true}
                                alt="wave"
                            />
                        </div>
                    </div>
                    <p className={styles["role"]}>
                        Professional Roblox Developer/Programmer
                    </p>
                    <p className={styles["main"]}>
                        I've been developing on Roblox for 6+ years. Programming is my expertise and passion. I have worked with many other programming languages besides Lua, like C++, Python, and Javascript.
                    </p>
                    <p className={styles["main"]}>
                        I have made a unique variety of <Link className={styles['text-link']}href="/portfolio">projects </Link>
                        consisting of cool gimiks, open source Roblox development libraries, and games made by me!
                    </p>
                    <p className={styles["main"]}>
                        If you are looking for someone to program something up to your expectations, you are in the right place.
                        I will bring your ideas to life so you can achieve your dream project.
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
