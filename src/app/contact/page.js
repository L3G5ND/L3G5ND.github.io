import Config from '@config';
import styles from './style.module.css';

export const metadata = { title: 'Contact' };

function ContactIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'email' ? <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></> : <><path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z" /><path d="M7 11h.01M12 11h.01M17 11h.01" strokeWidth="3" /></>}
    </svg>
  );
}

export default function Contact() {
  const discord = Config.socials.find(social => social.name === 'Discord');
  const profiles = Config.socials.filter(social => social.name !== 'Discord');

  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.intro}>
        <span className="eyebrow">Have something in mind?</span>
        <h1 id="contact-title">Let’s make<br />something <span>great.</span></h1>
        <p>A new project, a creative idea, or a question about my work. I’d love to hear what you’re thinking.</p>
        <div className={styles.prompt}>
          <span className={styles.promptMark} aria-hidden="true">✦</span>
          <p>Tell me a little about your idea, what you need, and your timeline. We can take it from there.</p>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeading}>
          <h2>Say hello.</h2>
          <p>Choose the way that works for you.</p>
        </div>
        <div className={styles.primaryContacts}>
          <a className={`${styles.contactButton} ${styles.email}`} href={`mailto:${Config.email}`}>
            <span className={styles.icon}><ContactIcon type="email" /></span>
            <span className={styles.buttonText}><strong>Send an email</strong><span>{Config.email}</span></span>
          </a>
          {discord && <a className={styles.contactButton} href={discord.link} target="_blank" rel="noreferrer">
            <span className={styles.icon}><ContactIcon type="chat" /></span>
            <span className={styles.buttonText}><strong>Chat on Discord</strong><span>Let’s talk about your idea</span></span>
          </a>}
        </div>
        <div className={styles.elsewhere}>
          <h3>Find me elsewhere</h3>
          <div className={styles.profileButtons}>
            {profiles.map(social => <a key={social.name} className={styles.profileButton} href={social.link} target="_blank" rel="noreferrer">{social.name}</a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
