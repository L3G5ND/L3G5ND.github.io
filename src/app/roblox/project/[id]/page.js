import Config from '@config';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return Config.roblox.projects.map((project, index) => ({ id: String(index) }));
}
export const dynamicParams = false;

export default async function Project({ params }) {
  const { id } = await params;
  const project = /^\d+$/.test(id) ? Config.roblox.projects[Number(id)] : null;
  if (!project) notFound();
  return (
    <ProjectDetail
      project={{ ...project, image: undefined }}
      backHref="/portfolio?view=roblox"
      backLabel="Back to Roblox work"
    />
  );
}
