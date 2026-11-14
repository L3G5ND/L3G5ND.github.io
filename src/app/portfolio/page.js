import { Suspense } from 'react';
import Config from '@config';
import ProjectCards from '@/components/ProjectCards';
import RobloxCollection from '@/components/RobloxCollection';
import WorkSwitcher from '@/components/WorkSwitcher';
export const metadata = { title: 'Work' };
export default function Portfolio() {
  const projects = Config.projects;
  const languages = new Set([
    ...Config.languages,
    ...projects.flatMap((project) => project.languages || []),
  ]);
  const skills = [
    ...new Set([
      ...languages,
      ...Config.skills,
      ...projects.flatMap((project) => project.stack || []),
    ]),
  ];
  const software = (
    <>
      <ProjectCards />
      <section className="section" style={{ marginTop: 45 }}>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className={`skill-block ${languages.has(skill) ? 'skill-language' : ''}`}
              tabIndex={0}
              key={skill}
            >
              {languages.has(skill) && (
                <span className="skill-code-symbol" aria-hidden="true">
                  {'</>'}
                </span>
              )}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
  return (
    <>
      <Suspense fallback={<p>Loading work…</p>}>
        <WorkSwitcher software={software} roblox={<RobloxCollection />} />
      </Suspense>
    </>
  );
}
