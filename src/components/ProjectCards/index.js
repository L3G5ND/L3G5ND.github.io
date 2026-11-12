import Link from 'next/link';
import Config from '@config';
import ProjectMedia from '@/components/ProjectMedia';
import styles from './style.module.css';

export function ProjectCard({ project, href }) {
  const hasMedia = Boolean(project.image || project.video);
  return (
    <Link
      href={href}
      className={`${styles.card} ${!hasMedia ? styles.textOnly : ''}`}
      aria-label={`View ${project.name}`}
    >
      {hasMedia && (
        <div className={styles.media}>
          <ProjectMedia project={project} preview />
        </div>
      )}
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {!!project.stack?.length && (
          <div className={styles.tags}>
            {project.stack.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function ProjectCards() {
  return (
    <div className={styles.grid}>
      {Config.projects.map((project) => (
        <article className={`${styles.card} ${styles.textOnly}`} key={project.id}>
          <div className={styles.content}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.github?.trim() && (
              <a
                className={`button ${styles.codeButton}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View code for ${project.name}`}
              >
                View code
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
