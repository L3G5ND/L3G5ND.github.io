import { Suspense } from 'react';
import Config from '@config';
import ProjectCards from '@/components/ProjectCards';
import RobloxCollection from '@/components/RobloxCollection';
import WorkSwitcher from '@/components/WorkSwitcher';
export const metadata = { title: 'Work' };
export default function Portfolio() {
  const software = (
    <>
      <ProjectCards />
      <section className="section" style={{ marginTop: 45 }}>
        <h2>Skills</h2>
        <div className="skills-grid">
          {Config.skills.map((s) => (
            <div className="skill-block" tabIndex={0} key={s}>
              {s}
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
