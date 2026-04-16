"use client"

import { motion } from "framer-motion"

const outcomes = [
  { metric: "5+", label: "Years of experience" },
  { metric: "3", label: "Companies worked at" },
  { metric: "10+", label: "Major projects delivered" },
  { metric: "∞", label: "Lines of code written" },
]

export function OutcomesSection() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-foreground font-sans">
            Career Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="text-center md:text-left"
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                {outcome.metric}
              </p>
              <p className="mt-2 text-sm text-muted-foreground font-sans">
                {outcome.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
