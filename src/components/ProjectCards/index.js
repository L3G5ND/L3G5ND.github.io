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
            {project.github?.trim() ? (
              <a
                className={`button ${styles.codeButton}`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View code for ${project.name}`}
              >
                View code
              </a>
            ) : (
              <button
                type="button"
                className={`button ${styles.codeButton} ${styles.privateButton}`}
                disabled
                aria-label={`Code for ${project.name} is private`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <path d="M12 14v3" />
                </svg>
                Private
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
