"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Onias brings exceptional technical depth combined with a keen eye for user experience. His work on our SSR framework transformed how our product teams build applications.",
    author: "Platform Team Lead",
    role: "Mercado Livre",
  },
  {
    quote:
      "A rare engineer who can bridge the gap between design and development. His contributions to our design system have improved consistency across all our products.",
    author: "Senior Designer",
    role: "Foundation Team",
  },
  {
    quote:
      "His approach to building scalable architectures while maintaining code quality is impressive. Always thinking about the bigger picture.",
    author: "Tech Lead",
    role: "Fraud Prevention",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[96px] lg:text-[144px] font-semibold leading-[1] text-foreground">
            Testimonial
            <sup className="text-[14px] md:text-[20px] align-top ml-2 text-muted-foreground">
              (6)
            </sup>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
            className="max-w-4xl"
          >
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-lg font-medium text-foreground font-sans">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-muted-foreground font-sans">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-border rounded-sm hover:bg-accent hover:border-accent transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="p-3 border border-border rounded-sm hover:bg-accent hover:border-accent transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            <span className="ml-4 text-sm text-muted-foreground font-sans">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
