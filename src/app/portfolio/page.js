import Config from "@config"
import Image from 'next/image'
import styles from "./style.module.css"

export default function() {
    return (
        <>
            <div className={styles["content-holder"]}>
                <div className={styles["content"]}>
                    <span className={styles["header"]}>Libraries</span>
                    <div className={styles["library-list"]}>
                        {Config.Libraries.map((library, index) => {
                            return (
                                <div className={styles["library"]}>
                                    <div className={styles["library-text"]}>
                                        <span className={styles["library-name"]}>{library.name}</span>
                                        <span className={styles["library-description"]}>{library.description}</span>
                                    </div>
                                    <div className={styles["library-link-holder"]}>
                                        <a className={styles["library-link"]} target="_blank" href={library.link}>View Project</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles["divider"]}></div>
                    <span className={styles["header"]}>Projects</span>
                    <div className={styles["project-list"]}>
                        {Config.Projects.map((project, index) => {
                            return (
                                <div className={styles["project"]}>
                                    <div className={styles["project-preview-holder"]}>
                                        <a className={styles["project-preview"]} target="_blank" href={"/project/"+index || "/"}>
                                            <Image
                                                src={project.image}
                                                fill={true}
                                                alt={"\"Game Preview\""}
                                            />
                                        </a>
                                    </div>
                                    <div className={styles["project-text-holder"]}>
                                        <span className={styles["project-text"]}>{project.name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles["divider"]}></div>
                    <span className={styles["header"]}>3rd Party Libraries I Can Work With</span>
                    <div className={styles["skill-list"]}>
                        {Config.Skills.map((skill, index) => {
                            return (
                                <a className={styles["skill"]} target="_blank" href={skill.link || "/"}>
                                    <span className={styles["skill-name"]}>{skill.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
