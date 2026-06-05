'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Mail,
    MapPin,
    Send,
    Loader2,
    CheckCircle2,
    Briefcase,
    UserRound
} from 'lucide-react'
import { portfolio } from '../../data/portfolio'
const ContraIcon = () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M4 4h16v16H4z" />
        <path fill="white" d="M8 8h8v2h-4v4h4v2H8z" />
    </svg>
)

const UpworkIcon = () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M16.5 7c-1.5 0-2.8.8-3.6 2.1-.9-1.3-1.5-2.8-1.8-4.1H8.8v7.1c0 1.1-.9 2-2 2s-2-.9-2-2V7H2.5v5.1C2.5 14.8 4.7 17 7.4 17s4.9-2.2 4.9-4.9v-.4c.6.9 1.2 1.7 2 2.3.7.5 1.6.8 2.5.8 2.4 0 4.2-1.8 4.2-4.1C21 8.8 19.1 7 16.5 7zm0 5.6c-.9 0-1.9-.6-2.9-1.7.5-1.1 1.5-1.8 2.7-1.8 1.2 0 2.1.8 2.1 1.8 0 1-.8 1.7-1.9 1.7z"/>
    </svg>
)

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', subject: '', contact: '' })
    const [sending, setSending] = useState(false)
    const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSending(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, From: 'Dipal Patel' }),
            })
            const data = await res.json()
            if (data.success) {
                setToast({ type: 'success', msg: "Message sent! I'll reply within 24 hours 🚀" })
                setForm({ name: '', email: '', message: '', subject: '', contact: '' })
            } else {
                setToast({ type: 'error', msg: 'Something went wrong. Try again.' })
            }
        } catch {
            setToast({ type: 'error', msg: 'Something went wrong. Try again.' })
        } finally {
            setSending(false)
            setTimeout(() => setToast(null), 3500)
        }
    }

    const contactCards = [
        {
            icon: Mail,
            label: 'Email',
            value: portfolio.email,
            href: `https://mail.google.com/mail/?view=cm&to=${portfolio.email}`
        },
        {
            icon: Briefcase,
            label: 'Contra',
            value: 'Hire Me on Contra',
            href: portfolio.socials.contra
        },
        {
            icon: UserRound,
            label: 'Upwork',
            value: 'Hire Me on Upwork',
            href: portfolio.socials.upwork
        },
        {
            icon: MapPin,
            label: 'Location',
            value: portfolio.location,
            href: undefined
        },
    ]

    return (
        <section id="contact" className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg)] py-24">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">Contact</p>
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">Let's Build Something Great</h2>
                    <p className="mt-4 text-[var(--text-muted)]">Have a project in mind? Drop a line — we'll respond within a few hours.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
                >
                    {contactCards.map((c) => {
                        const Icon = c.icon
                        const Wrapper = c.href ? 'a' : 'div'
                        return (
                            <Wrapper
                                key={c.label}
                                {...(c.href ? { href: c.href, target: '_blank', rel: 'noreferrer' } : {})}
                                className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5"
                            >
                                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] group-hover:bg-[#6366f1]/20">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs text-[var(--text-muted)]">{c.label}</p>
                                    <p className="truncate text-sm font-medium text-[var(--text)]">{c.value}</p>
                                </div>
                            </Wrapper>
                        )
                    })}
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8"
                >
                    {/* Row 1: Name + Email */}
                    <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Name</label>
                            <input
                                name="name" required value={form.name} onChange={handleChange}
                                placeholder="Your name"
                                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Email</label>
                            <input
                                name="email" type="email" required value={form.email} onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50"
                            />
                        </div>
                    </div>

                    {/* Row 2: Subject + Phone */}
                    <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Subject</label>
                            <input
                                name="subject" required value={form.subject} onChange={handleChange}
                                placeholder="Project inquiry"
                                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Phone</label>
                            <input
                                name="contact" required value={form.contact} onChange={handleChange}
                                placeholder="+91 00000 00000"
                                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50"
                            />
                        </div>
                    </div>

                    {/* Message — full width */}
                    <div className="mb-6">
                        <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Message</label>
                        <textarea
                            name="message" required rows={5} value={form.message} onChange={handleChange}
                            placeholder="Tell me about your project..."
                            className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50"
                        />
                    </div>

                    <button
                        type="submit" disabled={sending}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-6 py-3.5 font-medium text-white shadow-lg shadow-[#6366f1]/30 transition-all hover:bg-[#4f46e5] disabled:opacity-60"
                    >
                        {sending
                            ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>)
                            : (<>Send Message<Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)
                        }
                    </button>
                </motion.form>
            </div>

            {/* Toast */}
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                    className={`fixed bottom-8 right-8 z-[120] flex items-center gap-3 rounded-xl border px-5 py-3 backdrop-blur-xl ${
                        toast.type === 'success'
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                            : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                    }`}
                >
                    <CheckCircle2 className="h-5 w-5" />
                    {toast.msg}
                </motion.div>
            )}
        </section>
    )
}