"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[73px] bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-full px-5 md:px-8 max-w-[1400px] mx-auto">
        <Link href="/" className="font-serif font-semibold text-lg text-foreground">
          Onias<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#education"
            className="text-sm font-medium text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            education
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            experience
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            contact
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[73px] left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col p-5 gap-4">
            <Link
              href="#education"
              className="text-lg font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              education
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              experience
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
