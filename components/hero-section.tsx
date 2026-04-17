"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center md:py-22 px-5 md:px-8 overflow-hidden bg-primary">

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "#FF7A52" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-[100px] lg:pt-0">

        <div className="flex flex-col gap-8">

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(255,122,82,0.08)",
                border: "1px solid rgba(255,122,82,0.25)",
                color: "var(--accent)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to freelance & consulting
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <h1 className="font-serif font-semibold leading-[1.05] tracking-tight">
              <span className="block text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] text-white">
                Building Scalable
              </span>
              <span
                className="block text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] text-accent"
              >
                Digital Experiences
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-[480px]"
          >
            Hi, I&apos;m{" "}
            <span className="text-white font-semibold">Onias da Rocha</span>{" "}
            — a Software Engineer specialising in SSR frameworks, micro frontend
            architectures, and full-stack development. Currently crafting core
            technologies for fraud prevention at Mercado Livre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-accent text-accent-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              View Experience
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="w-full"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(16,16,18,0.55)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-2 px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-auto text-[11px] text-white/20 font-mono tracking-wide">
                profile.ts
              </span>
            </div>

            <pre
              className="px-8 py-7 text-[13px] sm:text-[14px] lg:text-[15px] leading-[2] font-mono overflow-x-auto"
              style={{ color: "#cdd6f4" }}
            >
              <span style={{ color: "#cba6f7" }}>const</span>
              {" "}
              <span style={{ color: "#cdd6f4" }}>profile</span>
              {" "}
              <span style={{ color: "#89dceb" }}>=</span>
              {" "}
              <span style={{ color: "#cdd6f4" }}>{"{"}</span>
              {"\n"}
              {"  "}
              <span style={{ color: "#f38ba8" }}>name</span>
              <span style={{ color: "#89dceb" }}>:</span>
              {" "}
              <span style={{ color: "#a6e3a1" }}>&quot;Onias da Rocha&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {"\n"}
              {"  "}
              <span style={{ color: "#f38ba8" }}>role</span>
              <span style={{ color: "#89dceb" }}>:</span>
              {" "}
              <span style={{ color: "#a6e3a1" }}>&quot;Software Engineer&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {"\n"}
              {"  "}
              <span style={{ color: "#f38ba8" }}>skills</span>
              <span style={{ color: "#89dceb" }}>:</span>
              {" "}
              <span style={{ color: "#cdd6f4" }}>[</span>
              {"\n"}
              {"    "}
              <span style={{ color: "#a6e3a1" }}>&quot;React&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {" "}
              <span style={{ color: "#a6e3a1" }}>&quot;Next.js&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {"\n"}
              {"    "}
              <span style={{ color: "#a6e3a1" }}>&quot;Node.js&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {" "}
              <span style={{ color: "#a6e3a1" }}>&quot;TypeScript&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {"\n"}
              {"    "}
              <span style={{ color: "#a6e3a1" }}>&quot;Java&quot;</span>
              <span style={{ color: "#6c7086" }}>,</span>
              {" "}
              <span style={{ color: "#a6e3a1" }}>&quot;Spring Boot&quot;</span>
              {"\n"}
              {"  "}
              <span style={{ color: "#cdd6f4" }}>]</span>
              {"\n"}
              <span style={{ color: "#cdd6f4" }}>{"}"}</span>
              <span style={{ color: "#89dceb" }}>;</span>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
