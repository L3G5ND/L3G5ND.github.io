import styles from './style.module.css';

export default function ProjectTags({ project }) {
  const languages = project.languages || [];
  const stack = (project.stack || []).filter((skill) => !languages.includes(skill));
  if (!languages.length && !stack.length) return null;

  return (
    <ul className={styles.tags} aria-label="Languages and tools">
      {languages.map((language) => (
        <li className={styles.language} key={language}>
          <span className={styles.symbol} aria-hidden="true">
            {'</>'}
          </span>
          <span>{language}</span>
        </li>
      ))}
      {stack.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
