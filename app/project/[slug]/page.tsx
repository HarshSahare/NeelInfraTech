import ProjectPage from "@/app/components/project-page/projectPage";
import { projects } from "@/app/lib/project";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
