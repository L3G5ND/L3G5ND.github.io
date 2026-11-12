import Link from 'next/link';
import Image from 'next/image';
import Config from '@config';
import ProjectCards from '@/components/ProjectCards';
import styles from './style.module.css';
export default function Home(){return <>
 <section className={styles.hero}>
  <div className={styles.welcome}><span className="eyebrow">Malachi Holland · Software Developer</span><h1>Serious about code.<br/><span>Playful by nature.</span></h1><p className={styles.intro}>I turn ideas into thoughtful software, useful tools, and things that are just fun to use.</p><Link className="button" href="/portfolio">Explore my work</Link><div className={styles.signature} aria-hidden="true">MH<span>Made with curiosity.</span></div></div>
  <div className={styles.aboutColumn}>
   <section className={styles.about} aria-labelledby="about-title"><div className={styles.aboutTop}>{Config.portrait ? <Image className={styles.portrait} src={Config.portrait} width={104} height={104} alt="Malachi Holland"/> : <div className={styles.portrait} role="img" aria-label="Malachi Holland portrait placeholder">MH</div>}<div><span className="eyebrow">The person behind the code</span><h2 id="about-title">About me</h2></div></div><p>I’m Malachi, also known as L3G5ND. Programming is my expertise and my passion. I build software, tools, and experiments with a little personality.</p><p>I’ve worked with JavaScript, Python, C++, and Lua. I love understanding how things work, then turning that understanding into something people can use.</p></section>
   <section className={styles.origin}><h3>It started with Roblox.</h3><p>Over 6 years of building games, open-source libraries, and experiments in physics and AI. The same curiosity, a different playground.</p><Link className="text-link" href="/portfolio?view=roblox">Explore my Roblox work</Link></section>
  </div>
 </section>
 <section className={styles.work}><div className="section-title"><h2>Featured Work</h2><Link className="text-link" href="/portfolio">View all work</Link></div><ProjectCards/></section>
 </>}
