'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
// @ts-ignore
import { Menu, X } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },
]

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] transition-all hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
            )}
        </button>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled
                    ? 'border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <a href="#home" className="group relative flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#22d3ee] font-bold text-white">
                        {portfolio.initials}
                    </span>
                    <span className="hidden font-semibold tracking-tight text-[var(--text)] sm:block">
                        {portfolio.name}
                    </span>
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="relative text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 md:flex">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="rounded-lg border border-[#6366f1]/40 bg-[#6366f1]/10 px-4 py-2 text-sm text-[var(--text)] transition-all hover:bg-[#6366f1]/20"
                    >
                        Let's Talk
                    </a>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-[var(--text)]"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl md:hidden"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-md px-3 py-2 text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text)]"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}