"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, performant interfaces built with React, Next.js, and TypeScript. Focus on accessibility and user experience.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Scalable APIs and services using Java, Spring Boot, Node.js, and Go. Microservices and event-driven architectures.",
  },
  {
    number: "03",
    title: "Platform Engineering",
    description:
      "SSR frameworks, micro frontend architectures, and multi-tenant web applications optimized for scale.",
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Comprehensive design tokens, component libraries, and Figma workflows that bridge design and engineering.",
  },
  {
    number: "05",
    title: "Technical Leadership",
    description:
      "Defining technical strategy, mentoring teams, and championing best practices in UI/UX and accessibility.",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="pt-24 md:pt-32 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[96px] lg:text-[144px] font-semibold leading-[1] text-foreground">
            Services
            <sup className="text-[14px] md:text-[20px] align-top ml-2 text-muted-foreground">
              (3)
            </sup>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="group relative border-b border-border cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-accent transition-transform duration-[450ms] origin-left"
                style={{
                  transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                  transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              />

              <div
                className="relative grid grid-cols-12 gap-4 py-6 md:py-8 transition-all duration-[400ms]"
                style={{
                  paddingLeft: hoveredIndex === index ? "24px" : "0px",
                  paddingRight: hoveredIndex === index ? "24px" : "0px",
                  transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-sm text-muted-foreground group-hover:text-[#141414]/60 font-sans transition-colors duration-[400ms]">
                    ({service.number})
                  </span>
                </div>

                <div className="col-span-10 md:col-span-3">
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-[#141414] transition-colors duration-[400ms]">
                    {service.title}
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-8 mt-2 md:mt-0">
                  <p className="text-sm md:text-base text-secondary group-hover:text-[#141414]/80 font-sans leading-relaxed transition-colors duration-[400ms]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
