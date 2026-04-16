import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from '@/components/navbar'

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
    React.createElement('a', { href, ...props }, children),
}))

const EXPECTED_HREFS = ['#education', '#experience', '#contact']
const DEAD_HREFS = ['#services', '#skills']

describe('Navbar links', () => {
  it('desktop nav contains exactly the right 3 hrefs', () => {
    const { container } = render(<Navbar />)
    const desktopNav = container.querySelector('.hidden.md\\:flex')
    const links = Array.from(desktopNav!.querySelectorAll('a')).map(a => a.getAttribute('href'))
    expect(links).toEqual(EXPECTED_HREFS)
  })

  it('mobile menu shows correct 3 hrefs after opening', () => {
    const { container } = render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    const mobilePanel = container.querySelector('.md\\:hidden.absolute')
    const links = Array.from(mobilePanel!.querySelectorAll('a')).map(a => a.getAttribute('href'))
    expect(links).toEqual(EXPECTED_HREFS)
  })

  it('mobile menu has no dead links (regression guard for #services and #skills)', () => {
    const { container } = render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    const mobilePanel = container.querySelector('.md\\:hidden.absolute')
    const hrefs = Array.from(mobilePanel!.querySelectorAll('a')).map(a => a.getAttribute('href'))
    DEAD_HREFS.forEach(dead => expect(hrefs).not.toContain(dead))
  })

  it('desktop and mobile link sets are identical', () => {
    const { container } = render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    const desktopHrefs = Array.from(container.querySelector('.hidden.md\\:flex')!.querySelectorAll('a'))
      .map(a => a.getAttribute('href'))
      .sort()
    const mobileHrefs = Array.from(container.querySelector('.md\\:hidden.absolute')!.querySelectorAll('a'))
      .map(a => a.getAttribute('href'))
      .sort()
    expect(desktopHrefs).toEqual(mobileHrefs)
  })

  it('mobile menu is hidden by default and toggles on hamburger click', () => {
    const { container } = render(<Navbar />)
    expect(container.querySelector('.md\\:hidden.absolute')).toBeNull()

    fireEvent.click(screen.getByLabelText('Toggle menu'))
    expect(container.querySelector('.md\\:hidden.absolute')).not.toBeNull()

    const firstLink = container.querySelector('.md\\:hidden.absolute a')!
    fireEvent.click(firstLink)
    expect(container.querySelector('.md\\:hidden.absolute')).toBeNull()
  })
})
