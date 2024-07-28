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
                        Roblox Programmer/Developer
                    </p>
                    <p className={styles["main"]}>
                        I am a professional programmer with 4+ years of experience. I have worked with many programming languages including Roblox Lua, C++, Python, and Javascript.
                        Roblox is what got me into programming and is why I decided to spend most of my time programming with Roblox Lua.
                    </p>
                    <p className={styles["main"]}>
                        Over my time as a programmer, I can confidently say finding something I can&apos;t do at a professional level is nearly impossible.
                        I have worked on a variety of <Link className={styles['text-link']}href="/portfolio">projects and libraries</Link> on Roblox.
                        All of the libraries I&apos;ve created are open-source for anyone to use.
                    </p>
                    <p className={styles["main"]}>
                        If you are looking for someone to program something up to your expectations, you are in the right place.
                        I will bring your ideas to life and put you into the right direction to build your dream project.
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
