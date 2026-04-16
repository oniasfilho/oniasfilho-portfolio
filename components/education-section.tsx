"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const education = [
  {
    degree: "Computer Information Systems - B.Sc",
    degreeUrl: "https://www.ic.ufmt.br/graduacao/bacharelado-em-sistemas-de-informacao/",
    institution: "Federal University of Mato Grosso (UFMT)",
    status: "Completed",
  },
  {
    degree: "Distributed Computing and Networks - Specialization",
    degreeUrl: "https://ifmt.edu.br/blog/curso/pos-graduacao-especializacao-em-redes-de-computacao-distribuida-ead/",
    institution: "Federal Institute of Mato Grosso (IFMT)",
    status: "Completed",
  },
  {
    degree: "UX/UI and Digital Products - Specialization",
    degreeUrl: "https://ebaconline.com.br/pos-graduacao-product",
    institution: "British School of Creative Arts and Technology (EBAC)",
    status: "Expected: 07/26",
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 px-5 md:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[96px] lg:text-[144px] font-semibold leading-[1] text-foreground">
            Education
            <sup className="text-[14px] md:text-[20px] align-top ml-2 text-muted-foreground">
              (1)
            </sup>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
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
              className="border-b border-border pb-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    {item.degreeUrl ? (
                      <Link href={item.degreeUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                        {item.degree}
                      </Link>
                    ) : (
                      item.degree
                    )}
                  </h3>
                  <p className="mt-2 text-secondary font-sans">
                    {item.institution}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border px-3 py-1 rounded-sm">
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
