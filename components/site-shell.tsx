'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Achievements', href: '/achievements' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm sm:px-8">
          <p className="font-medium tracking-wide">Guidance that moves your future forward.</p>
          <div className="hidden items-center gap-5 text-primary-foreground/75 sm:flex">
            <a href="tel:+919876543210" className="transition hover:text-primary-foreground">+91 98765 43210</a>
            <span className="h-4 w-px bg-primary-foreground/25" />
            <a href="mailto:hello@edutech.in" className="transition hover:text-primary-foreground">hello@edutech.in</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-11 place-items-center rounded-xl bg-primary font-mono text-lg font-bold text-primary-foreground shadow-sm">ET</span>
            <span className="font-mono text-lg font-bold tracking-tight text-ink">edu<span className="text-primary">tech</span></span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-muted-foreground transition hover:text-primary">{item.label}</Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"><Phone className="size-4" /> Talk to us</a>
          </div>
          <button type="button" className="rounded-lg p-2 text-ink md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-ink">{item.label}</Link>)}<a href="tel:+919876543210" className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"><Phone className="size-4" /> Talk to us</a></div></nav>}
      </header>
    </>
  )
}

export function SiteFooter() {
  return <footer className="bg-ink text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] md:py-20"><div><div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary font-mono font-bold">ET</span><span className="font-mono text-lg font-bold">edutech</span></div><p className="max-w-sm leading-7 text-primary-foreground/65">Personalised academic guidance, exam preparation, and admissions support for ambitious students.</p></div><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Explore</p><div className="flex flex-col gap-3 text-primary-foreground/70">{navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="transition hover:text-primary-foreground">{item.label}</Link>)}</div></div><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Get in touch</p><div className="flex flex-col gap-3 text-primary-foreground/70"><a href="tel:+919876543210" className="transition hover:text-primary-foreground">+91 98765 43210</a><a href="mailto:hello@edutech.in" className="transition hover:text-primary-foreground">hello@edutech.in</a><p>Mumbai · Pune · Online</p></div></div></div><div className="border-t border-primary-foreground/10"><div className="mx-auto max-w-7xl px-5 py-5 text-sm text-primary-foreground/45 sm:px-8">© 2026 Edu Tech. Built for brighter beginnings.</div></div></footer>
}

export function DirectContactCard() {
  return <div className="flex flex-col gap-4 rounded-2xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-primary">Start a conversation</p><h3 className="text-xl font-bold text-ink">Your next step can start today.</h3></div><div className="flex flex-wrap gap-3"><a href="tel:+919876543210" className="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">Call now</a><a href="mailto:hello@edutech.in" className="rounded-lg border border-primary/30 px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary/10">Email us</a></div></div>
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-background"><SiteHeader />{children}<SiteFooter /></div> }
