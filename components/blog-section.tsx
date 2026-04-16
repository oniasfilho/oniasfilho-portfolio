"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/data"

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-foreground">
            Blog
            <sup className="text-[0.2em] ml-2 align-super font-sans font-normal">
              ({blogPosts.length})
            </sup>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground" />

          <div className="pl-8 md:pl-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b border-border"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 gap-4 md:gap-8"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex-1">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-muted-foreground text-sm md:text-base whitespace-nowrap">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2 px-5 py-2 border border-border rounded-sm text-sm font-medium text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      Read
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
