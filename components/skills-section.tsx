"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Layers,
  Wrench,
  Network,
  MessageSquare,
  Focus,
  Lightbulb,
  Users,
  UserCheck,
  Zap
} from "lucide-react"

const technicalSkills = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Go"],
  },
  {
    category: "Frameworks",
    icon: Layers,
    skills: ["Spring Framework", "React", "Next.js", "Node.js", "AngularJS"],
  },
  {
    category: "Tools & Design",
    icon: Wrench,
    skills: ["SASS", "Figma", "Web Design", "Design Tokens", "Accessibility"],
  },
  {
    category: "Architecture",
    icon: Network,
    skills: ["Micro Frontends", "SSR", "REST APIs", "Event-Driven", "RabbitMQ"],
  },
]

const softSkills = [
  { name: "Communicative", icon: MessageSquare },
  { name: "Detail Oriented", icon: Focus },
  { name: "Creative", icon: Lightbulb },
  { name: "Collaborative", icon: Users },
  { name: "Team Player", icon: UserCheck },
  { name: "Dynamic", icon: Zap },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-semibold leading-[1] text-primary-foreground">
            Technical Proficiency
            <br />
            <span className="text-accent">&amp; Soft Skills</span>
            <sup className="text-[16px] sm:text-[20px] md:text-[24px] align-top ml-2 text-muted-foreground">
              ({technicalSkills.length + 1})
            </sup>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive skill set spanning frontend, backend, and design — built through
            years of experience across diverse projects and teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 rounded-sm p-6 border border-white/10 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-white/80 bg-white/5 rounded-sm border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <h3 className="font-serif text-[32px] md:text-[48px] font-semibold text-primary-foreground text-center mb-10">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-white/5 rounded-sm p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-white/60 group-hover:text-accent transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-white/80">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
