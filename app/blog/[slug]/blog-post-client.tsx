"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ReactMarkdown from "react-markdown"

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

interface BlogPostClientProps {
  post: BlogPost
  otherPosts: BlogPost[]
}

export function BlogPostClient({ post, otherPosts }: BlogPostClientProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-foreground mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed mb-8"
          >
            {post.excerpt}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground"
          >
            {post.date}
          </motion.p>
        </div>
      </section>

      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-border origin-left"
          />
        </div>
      </div>

      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-[900px] mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
          >
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-10 mb-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground leading-relaxed">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">
                    {children}
                  </strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.article>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              More Blogs
            </h2>
          </motion.div>

          <div className="space-y-0">
            {otherPosts.map((otherPost, index) => (
              <motion.div
                key={otherPost.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-border"
              >
                <Link
                  href={`/blog/${otherPost.slug}`}
                  className="group flex items-center justify-between py-6 md:py-8"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {otherPost.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
