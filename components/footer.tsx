"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <section className="py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-center md:text-left"
          >
            <h2 className="font-serif text-[48px] md:text-[72px] lg:text-[90px] font-bold leading-[1.1] text-white">
              Got a project ?
              <sup className="text-[14px] md:text-[20px] align-top ml-2 text-white/40">(3)</sup>
            </h2>
            <div className="mt-8">
              <Link
                href="mailto:onias.filho@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium text-lg md:text-xl rounded-sm hover:brightness-110 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-white/10 py-16 px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Bio */}
            <div className="md:col-span-1">
              <p className="text-white/80 font-sans text-sm leading-relaxed">
                Software Engineer at Mercado Livre. Building scalable SSR frameworks,
                micro frontend architectures, and design systems for fraud prevention.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-white font-medium mb-4 font-sans">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#education"
                    className="text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-medium mb-4 font-sans">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:onias.filho@gmail.com"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    onias.filho@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5565981522040"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +55 65 98152 2040
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-medium mb-4 font-sans">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/oniasfilho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/oniasfilho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5565981522040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-sans text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 font-sans text-sm">
              Onias da Rocha © 2025 
            </p>
            <p className="text-white/40 font-sans text-sm">
              Based in Brazil
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
