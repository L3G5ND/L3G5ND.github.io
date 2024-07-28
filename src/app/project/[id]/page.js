import Config from "@config"
import styles from "./style.module.css"

export async function generateStaticParams() {
    return {
        id: 1
    }
}

export default function Project({params}) {
    let project = Config.Projects[params.id]
    return (
        <div className={styles["content-holder"]}>
            <div className={styles["content"]}>
                <span className={styles["title"]}>{project.name}</span>
                <div className={styles["video-holder"]}>
                    <iframe
                        width="800"
                        height="450"
                        src={project.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <span className={styles["description"]}>
                    {project.description}
                </span>
            </div>
        </div>
    )
}
