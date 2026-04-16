"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding requirements, analyzing existing systems, and defining clear technical goals aligned with business objectives.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Designing scalable solutions with clean architecture, defining APIs, data models, and component structures.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Implementing features with clean code practices, thorough testing, and continuous integration for reliable delivery.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[96px] lg:text-[144px] font-semibold leading-[1] text-foreground">
            Process
            <sup className="text-[14px] md:text-[20px] align-top ml-2 text-muted-foreground">
              (4)
            </sup>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="relative"
            >
              <div className="mb-6">
                <span className="font-serif text-[80px] md:text-[100px] lg:text-[120px] font-bold text-foreground/10 leading-none">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
