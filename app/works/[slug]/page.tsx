import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/data"
import { WorkDetailClient } from "./work-detail-client"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Onias da Rocha`,
    description: project.description,
  }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return <WorkDetailClient project={project} nextProject={nextProject} />
}
