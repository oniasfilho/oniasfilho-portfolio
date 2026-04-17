"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    company: "Mercado Livre",
    role: "Software Engineer",
    period: "2021 - Current",
    url: "https://www.mercadolivre.com",
    description:
      "Over 5 years of experience with Fraud Prevention. Currently developing shared SSR modules, micro frontend architectures, and design systems using React, Next.js, Spring Boot, and Express.",
    highlights: [
      "Built fraud detection decision flows using ML models and RESTful APIs",
      "Championed UI/UX standards with design tokens and Figma systems",
      "Developed shared SSR modules and backend adapters with Spring Boot",
    ],
  },
  {
    company: "Softplan",
    role: "Full Stack Developer",
    period: "2020 - 2021",
    url: "https://www.softplan.com.br",
    description:
      "Worked in the Evolution unit of the Justice Automation System (SAJ), LATAM's leading legal SaaS platform, responsible for modernizing and scaling core legal modules.",
    highlights: [
      "Designed and maintained RESTful APIs using Java and Spring Boot",
      "Developed modular frontend components using React and AngularJS",
      "Contributed to event-driven architecture with RabbitMQ",
    ],
  },
  {
    company: "SEFAZ",
    role: "Web Developer",
    period: "2020",
    url: "https://www5.sefaz.mt.gov.br/",
    description:
      "Engineered the Administrative Tax Panel for SUCIT, an internal portal focused on streamlining tax oversight, auditing, and goods inspection processes.",
    highlights: [
      "Built responsive and accessible UIs using React and Bootstrap",
      "Developed backend services with Spring Boot integrating Oracle DB, PostgreSQL, and DB2",
      "Implemented internal tooling to automate report generation",
    ],
  },
]

export function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="pb-12 pt-6 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[96px] lg:text-[144px] font-semibold leading-[1] text-foreground">
            Experience
            <sup className="text-[14px] md:text-[20px] align-top ml-2 text-muted-foreground">
              (2)
            </sup>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
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
              className="group relative border-b border-border"
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
                className="relative flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 transition-all duration-[400ms]"
                style={{
                  paddingLeft: hoveredIndex === index ? "24px" : "0px",
                  paddingRight: hoveredIndex === index ? "24px" : "0px",
                  transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-[#141414] transition-colors duration-[400ms]">
                    {exp.company}
                  </h3>
                  <p className="text-foreground group-hover:text-[#141414] font-sans mt-1 transition-colors duration-[400ms]">{exp.role}</p>
                </div>

                <div className="mt-2 md:mt-0 md:flex-1 md:text-center">
                  <span className="text-sm text-secondary group-hover:text-[#141414]/70 font-sans transition-colors duration-[400ms]">
                    {exp.period}
                  </span>
                </div>

                <div className="mt-4 md:mt-0 md:flex-1 flex items-start md:items-center justify-between gap-4">
                  <p className="text-sm text-secondary group-hover:text-[#141414]/80 font-sans max-w-md leading-relaxed transition-colors duration-[400ms]">
                    {exp.description}
                  </p>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#141414]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
