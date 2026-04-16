"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h2 className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-foreground">
            Selected Works
            <sup className="text-[0.2em] ml-2 align-super font-sans font-normal">
              ({projects.length})
            </sup>
          </h2>
        </div>

        <p className="text-muted-foreground text-lg mb-16">
          2019 - 2025
        </p>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-border py-12 md:py-16"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <div className="lg:w-[320px] flex-shrink-0 space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href={`/works/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-sm text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group/btn"
                    >
                      View Work
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-3 gap-3">
                  {project.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} preview ${imgIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
