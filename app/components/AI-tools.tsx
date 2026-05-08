'use client'

import { motion } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

// ─── Inline SVG logos keyed by tool id ────────────────────────────────────────
const logos: Record<string, React.ReactNode> = {
    claude: (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
            <circle cx="16" cy="16" r="16" fill="#f97316" opacity="0.2" />
            <text x="16" y="21" fontFamily="Georgia,serif" fontSize="16" fontWeight="bold" fill="#f97316" textAnchor="middle">✦</text>
        </svg>
    ),
    chatgpt: (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
            <circle cx="16" cy="16" r="16" fill="#10a37f" opacity="0.15" />
            <path d="M16 9c-3.87 0-7 3.13-7 7 0 1.35.39 2.61 1.06 3.67L9 23l3.47-1.02A6.96 6.96 0 0016 23c3.87 0 7-3.13 7-7s-3.13-7-7-7z" fill="#10a37f" />
            <path d="M13 17h6M13 14.5h4M13 19.5h5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    ),
    lovable: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#ff6b6b" opacity="0.15" />
            <path d="M16 22s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z" fill="#ff6b6b" />
        </svg>
    ),
    v0: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="white" opacity="0.06" />
            <text x="16" y="21" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#94a3b8" textAnchor="middle">v0</text>
        </svg>
    ),
    bolt: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#facc15" opacity="0.15" />
            <path d="M18 8l-6 10h5l-1 6 6-10h-5l1-6z" fill="#facc15" />
        </svg>
    ),
    builder: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#6366f1" opacity="0.12" />
            <rect x="8" y="9" width="7" height="7" rx="2" fill="#6366f1" />
            <rect x="17" y="9" width="7" height="3" rx="1.5" fill="#6366f1" opacity="0.6" />
            <rect x="17" y="14" width="7" height="3" rx="1.5" fill="#6366f1" opacity="0.4" />
            <rect x="8" y="19" width="16" height="3" rx="1.5" fill="#6366f1" opacity="0.25" />
        </svg>
    ),
    cursor: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#a78bfa" opacity="0.12" />
            <path d="M12 9l12 7-12 7V9z" fill="#a78bfa" />
        </svg>
    ),
    perplexity: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#34d399" opacity="0.12" />
            <path d="M10 22V10l6 4 6-4v12" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="10" y1="18" x2="22" y2="18" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    emergent: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#22d3ee" opacity="0.12" />
            <circle cx="16" cy="16" r="5" fill="#22d3ee" opacity="0.75" />
            <circle cx="16" cy="7" r="2.2" fill="#22d3ee" opacity="0.35" />
            <circle cx="23.5" cy="20.5" r="2.2" fill="#22d3ee" opacity="0.35" />
            <circle cx="8.5" cy="20.5" r="2.2" fill="#22d3ee" opacity="0.35" />
            <line x1="16" y1="11" x2="16" y2="9.2" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
            <line x1="20.5" y1="18.5" x2="21.7" y2="20" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
            <line x1="11.5" y1="18.5" x2="10.3" y2="20" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
        </svg>
    ),
    framer: (
        <svg viewBox="0 0 32 32" fill="none" width="24" height="24">
            <circle cx="16" cy="16" r="16" fill="#fb923c" opacity="0.12" />
            <rect x="9" y="9" width="14" height="14" rx="3" stroke="#fb923c" strokeWidth="1.4" fill="none" />
            <circle cx="13" cy="13" r="2" fill="#fb923c" opacity="0.6" />
            <path d="M9 21l5-4 4 3 3-4 3 5H9z" fill="#fb923c" opacity="0.45" />
        </svg>
    ),
}

export default function AITools() {
    const { heroes, tools } = portfolio.aiTools

    return (
        <section
            id="ai-tools"
            className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-32"
        >
            {/* same max-w-7xl container as Projects, with comfortable mobile padding */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">
                        AI Toolkit
                    </p>
                    <h2 className="bg-gradient-to-r from-[#8b4555] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent text-4xl font-bold tracking-tight md:text-5xl drop-shadow-[0_0_10px_rgba(79,70,229,0.15)]">
                        Tools that amplify my work
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
                        Not shortcuts — accelerators. These tools let me move faster, think sharper, and ship higher-quality work than ever before.
                    </p>
                </motion.div>

                {/* ── Hero row: 1 col mobile → 2 col md+ ── */}
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {heroes.map((tool, i) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                            className="group flex flex-row items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 md:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = tool.accent + '66')
                            }
                            onMouseLeave={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = '')
                            }
                        >
                            {/* Logo */}
                            <div
                                className="flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl"
                                style={{ background: tool.logoBg }}
                            >
                                {logos[tool.id]}
                            </div>

                            {/* Body */}
                            <div className="flex min-w-0 flex-col gap-2">
                                <div className="text-sm md:text-base font-bold tracking-tight text-[var(--text)]">
                                    {tool.name}
                                </div>
                                <p className="text-xs md:text-sm leading-relaxed text-[var(--text-muted)]">
                                    {tool.description}
                                </p>
                                <div className="mt-1 flex flex-wrap gap-1.5">
                                    {tool.sparks.map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[10px] md:text-[11px] text-[var(--text-muted)]"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[var(--border)]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        Visual · Coding · Research
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                </div>

                {/* ── Tool grid:
                        mobile  (<768px) → 1 column, full width with side padding breathing room
                        md      (768px+) → 2 columns
                        lg      (1024px+)→ 4 columns
                ── */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="group relative flex flex-row md:flex-col items-start gap-4 md:gap-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 md:p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = tool.accent + '66')
                            }
                            onMouseLeave={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = '')
                            }
                        >
                            {/* Logo */}
                            <div
                                className="flex h-10 w-10 md:h-11 md:w-11 flex-shrink-0 items-center justify-center rounded-xl"
                                style={{ background: tool.logoBg }}
                            >
                                {logos[tool.id]}
                            </div>

                            {/* On mobile: name + desc side by side with logo. On md+: stacked */}
                            <div className="flex flex-col gap-1 md:gap-0 min-w-0 flex-1">
                                <div className="text-[13px] font-bold leading-tight text-[var(--text)] md:mb-2">
                                    {tool.name}
                                </div>
                                <p className="text-[11.5px] leading-relaxed text-[var(--text-muted)] md:flex-1 md:mb-3">
                                    {tool.description}
                                </p>
                                {/* Tag badge */}
                                <span
                                    className="mt-1 md:mt-auto self-start rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                                    style={{ background: tool.tagBg, color: tool.tagColor }}
                                >
                                    {tool.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Bottom note ── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center text-sm text-[var(--text-muted)]"
                >
                    AI makes me{' '}
                    <span className="font-semibold text-[var(--text-names)]">faster</span>
                    {' '}— but architecture decisions, client relationships, and shipping quality products?{' '}
                    <span className="text-[var(--text)]">That&apos;s still all me.</span>
                </motion.p>
            </div>
        </section>
    )
}