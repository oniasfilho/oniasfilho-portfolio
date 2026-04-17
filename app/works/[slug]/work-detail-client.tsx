"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface Project {
  slug: string
  title: string
  description: string
  year: string
  industry: string
  service: string
  role: string
  overview: string
  liveUrl: string | null
  githubUrl: string | null
  images: string[]
}

interface WorkDetailClientProps {
  project: Project
  nextProject: Project
}

export function WorkDetailClient({ project, nextProject }: WorkDetailClientProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Works
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-foreground mb-16"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-lg font-medium text-foreground mb-8">Project Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider">Industry</h3>
                <p className="text-foreground font-medium">{project.industry}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider">Service</h3>
                <p className="text-foreground font-medium">{project.service}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider">Role</h3>
                <p className="text-foreground font-medium">{project.role}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider">Year</h3>
                <p className="text-foreground font-medium">{project.year}</p>
              </div>
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex items-center gap-6 mt-10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-6 md:px-12 lg:px-24 mb-20"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-muted">
            <Image
              src={project.images[0]}
              alt={`${project.title} hero`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>

      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground sticky top-32">
                Project Overview
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none">
                {project.overview.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted"
              >
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/works/${nextProject.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Next Project
                </span>
                <h3 className="font-serif text-3xl md:text-5xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {nextProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-foreground group-hover:text-accent transition-colors duration-300">
                <span className="text-lg font-medium">View Project</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
