import styles from './style.module.css';
function Pillar({ side }) {
  return (
    <div className={`${styles.pillar} ${styles[side]}`} aria-hidden="true">
      <div className={styles.crown} />
      <div className={styles.capital}>
        <span />
        <span />
      </div>
      <div className={styles.neck} />
      <div className={styles.shaft} />
      <div className={styles.foot} />
      <div className={styles.base} />
    </div>
  );
}
export default function Pillars() {
  return (
    <>
      <Pillar side="left" />
      <Pillar side="right" />
    </>
  );
}
