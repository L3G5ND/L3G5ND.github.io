import BackArrow from '@/components/BackArrow';
import Link from 'next/link';
import ProjectMedia from '@/components/ProjectMedia';
import styles from './style.module.css';

export default function ProjectDetail({
  project,
  backHref = '/portfolio',
  backLabel = 'Back to work',
}) {
  return (
    <article className={styles.project}>
      <Link className={styles.back} href={backHref}>
        <BackArrow />
        {backLabel}
      </Link>
      <header className={styles.heading}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {project.github?.trim() && (
          <a
            className={`button ${styles.codeButton}`}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View code
          </a>
        )}
      </header>
      <ProjectMedia project={project} />
    </article>
  );
}
