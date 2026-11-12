import {Suspense} from 'react';
import Config from '@config';
import ProjectCards from '@/components/ProjectCards';
import RobloxCollection from '@/components/RobloxCollection';
import WorkSwitcher from '@/components/WorkSwitcher';
export const metadata={title:'Work'};
export default function Portfolio(){const software=<><ProjectCards/><section className="section" style={{marginTop:45}}><h2>Skills & tools</h2><div className="skills-grid">{Config.skills.map(s=><div className="skill-block" tabIndex={0} key={s}>{s}</div>)}</div></section></>;return <><div className="page-heading"><h1>My work.</h1><p>Software, tools, and worlds built with curiosity. Choose a collection to explore.</p></div><Suspense fallback={<p>Loading work…</p>}><WorkSwitcher software={software} roblox={<RobloxCollection/>}/></Suspense></>}
