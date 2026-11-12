import Link from 'next/link';
import Image from 'next/image';
import Config from '@config';
import ProjectCards from '@/components/ProjectCards';
import ArrowRight from '@/components/ArrowRight';
import SkillsMarquee from '@/components/SkillsMarquee';
import styles from './style.module.css';
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.aboutColumn}>
          <section className={styles.about} aria-labelledby="about-title">
            <div className={styles.aboutTop}>
              {Config.portrait ? (
                <Image
                  className={styles.portrait}
                  src={Config.portrait}
                  width={104}
                  height={104}
                  alt="Malachi Holland"
                />
              ) : (
                <div
                  className={styles.portrait}
                  role="img"
                  aria-label="Malachi Holland portrait placeholder"
                >
                  MH
                </div>
              )}
              <div>
                <span className="eyebrow">Malachi Holland · Software Developer</span>
                <h2 id="about-title">About me</h2>
              </div>
            </div>
            <p>
              I'm Malachi Holland, a software developer with over 6 years of programming
              experience and a passion for building innovative, efficient, and practical
              solutions. My experience spans software development, tools, automation, and
              game development.
            </p>
            <p>
              I'm driven by curiosity and a desire to understand how things work. I enjoy
              breaking down complex problems, exploring new technologies, and applying
              what I learn to create software that is both functional and meaningful.
            </p>
          </section>
          <section className={styles.origin}>
            <h3>It started with Roblox.</h3>
            <p>
              Consistently developing on Roblox for over 6 years. What started as an
              interest quickly became a passion.
            </p>
            <Link className="text-link arrow-link" href="/portfolio?view=roblox">
              Explore my Roblox work
              <ArrowRight />
            </Link>
          </section>
        </div>
        <div className={styles.welcome}>
          <div className={styles.codeBox}>
            <div className={styles.editorBar}>
              <span className={styles.editorDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>portfolio.js</span>
              <span className={styles.editorMark} aria-hidden="true">
                &lt;/&gt;
              </span>
            </div>
            <div className={styles.editorBody}>
              <h1 className={styles.codeHeading}>
                <span className={styles.codeLine}>
                  <span className={styles.functionName}>print</span>(
                  <span className={styles.string}>"Hello"</span>)
                </span>
                <span className={`${styles.codeLine} ${styles.returnLine}`}>
                  <span className={styles.keyword}>return</span> my_portfolio
                </span>
              </h1>
              <p className={styles.comment}>
                <span className={styles.commentDelimiter}>/*</span>
                <span className={styles.commentText}>
                  I turn ideas into thoughtful software and tools that are useful,
                  exciting, and fun to use.
                </span>
                <span className={styles.commentDelimiter}>*/</span>
              </p>
            </div>
          </div>
          <div className={styles.exploreAction}>
            <Link className="button" href="/portfolio">
              Explore my work
            </Link>
          </div>
        </div>
      </section>
      <SkillsMarquee skills={Config.skills} />
      <section className={styles.work}>
        <div className="section-title">
          <h2>Featured Work</h2>
          <Link className="text-link arrow-link" href="/portfolio">
            View all work
            <ArrowRight />
          </Link>
        </div>
        <ProjectCards />
      </section>
    </>
  );
}
