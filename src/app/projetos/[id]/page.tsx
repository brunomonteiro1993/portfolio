import { ProjectDemoWalkthrough } from "@/components/ProjectDemoWalkthrough";
import { getProjectById, projects } from "@/data/projects";
import { notFound } from "next/navigation";

type ProjectDemoPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDemoPage({
  params,
}: ProjectDemoPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDemoWalkthrough project={project} />;
}
