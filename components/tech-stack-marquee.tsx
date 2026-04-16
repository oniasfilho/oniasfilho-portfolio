"use client"

import { motion } from "framer-motion"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Figma",
  "Design Systems",
  "SSR Architecture",
  "Micro Frontends",
]

export function TechStackMarquee() {
  return (
    <section className="py-8 overflow-hidden bg-background border-y border-border">
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-8 px-4"
            >
              <span className="text-lg font-medium text-foreground font-sans">
                {skill}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
