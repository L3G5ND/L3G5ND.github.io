import assetPath from '@/lib/assetPath';
import Config from '@config';
import styles from './style.module.css';
import { ProjectCard } from '@/components/ProjectCards';
export default function RobloxCollection() {
  return (
    <>
      <section className="section" id="games">
        <div className="section-title">
          <h2>Games</h2>
        </div>
        <div className="grid">
          {Config.roblox.games.map((g) => (
            <article className="card" key={g.name}>
              <video className="media" controls playsInline preload="metadata">
                <source src={assetPath(g.video)} type="video/mp4" />
              </video>
              <h3>{g.name}</h3>
              <p>{g.description}</p>
              {g.link ? (
                <a
                  className={`button ${styles.codeButton}`}
                  href={g.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play game{' '}
                </a>
              ) : (
                <span className="chip">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="libraries">
        <h2>Open-Source Libraries</h2>
        {Config.roblox.libraries.map((l) => (
          <article className="list-row" key={l.name}>
            <div>
              <h3>{l.name}</h3>
              <p>{l.description}</p>
            </div>
            {l.link && (
              <a
                className={`button ${styles.codeButton}`}
                href={l.link}
                target="_blank"
                rel="noreferrer"
              >
                View code
              </a>
            )}
          </article>
        ))}
      </section>
      <section className="section" id="projects">
        <div className="section-title">
          <h2>Experiments</h2>
        </div>
        <div className="grid">
          {Config.roblox.projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              href={'/roblox/project/' + index}
            />
          ))}
        </div>
      </section>
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid" style={{ marginTop: 25 }}>
          {Config.roblox.skills.map((s) => (
            <a
              className="skill-block"
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
            >
              {s.name}{' '}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
