'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'

const companyLogo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MBALogo2-korqQwc9ZsmuxmC4GNEvncKJGauhoe.png'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'MBA Admissions', href: '/admissions' },
  { label: 'Foreign Universities', href: '/foreign' },
  { label: 'Achievements', href: '/achievements' },
]


export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2.5 text-center text-xs font-semibold tracking-wide sm:justify-between sm:px-6 lg:px-8 lg:text-sm">
          <p>Guidance that moves your future forward.</p>
          <div className="hidden items-center gap-5 text-primary-foreground/75 md:flex">
            <a href="tel:+919876543210" className="transition-colors duration-300 hover:text-primary-foreground">+91 98765 43210</a>
            <span className="h-4 w-px bg-primary-foreground/25" />
            <a href="mailto:hello@edutech.in" className="transition-colors duration-300 hover:text-primary-foreground">hello@edutech.in</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 shadow-sm shadow-ink/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="logo-effect flex min-w-0 items-center p-1" aria-label="MBA Connect India home">
            <img src={companyLogo} alt="MBA Connect India - Guide, Prepare, Get There" className="relative z-10 h-12 w-auto max-w-[168px] object-contain sm:h-14 sm:max-w-[210px]" />
            <span className="logo-tooltip">MBA Connect India</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                    active ? 'text-primary' : 'text-muted-foreground hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span className={`absolute inset-x-3 -bottom-1 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a href="tel:+919876543210" className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl">
              <Phone className="size-4 transition-transform duration-300 group-hover:rotate-12" />
              Talk to us
            </a>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-border/70 bg-background/75 text-ink shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink/35 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <nav
        id="mobile-navigation"
        className={`glass-panel fixed inset-x-4 top-24 z-50 rounded-2xl p-3 transition-all duration-300 ease-out xl:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  active ? 'bg-secondary text-primary' : 'text-ink hover:bg-secondary/75 hover:text-primary'
                }`}
              >
                {item.label}
                <ArrowUpRight className={`size-4 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100'}`} />
              </Link>
            )
          })}
          <a href="tel:+919876543210" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90">
            <Phone className="size-4" />
            Talk to us
          </a>
        </div>
      </nav>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:py-20 lg:px-8">
        <div>
          <div className="mb-5 flex items-center">
            <div className="logo-effect bg-primary-foreground p-1">
              <img src={companyLogo} alt="MBA Connect India - Guide, Prepare, Get There" className="relative z-10 h-16 w-auto rounded object-contain" />
              <span className="logo-tooltip">MBA Connect India</span>
            </div>
          </div>
          <p className="max-w-sm leading-7 text-primary-foreground/65">MBA and foreign university admissions guidance for ambitious students.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Explore</p>
          <div className="flex flex-col gap-3 text-primary-foreground/70">
            {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="transition-colors duration-300 hover:text-primary-foreground">{item.label}</Link>)}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Get in touch</p>
          <div className="flex flex-col gap-3 text-primary-foreground/70">
            <a href="tel:+919876543210" className="transition-colors duration-300 hover:text-primary-foreground">+91 98765 43210</a>
            <a href="mailto:hello@edutech.in" className="transition-colors duration-300 hover:text-primary-foreground">hello@edutech.in</a>
            <p>Noida - Delhi - India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-primary-foreground/45 sm:px-6 lg:px-8">{'\u00A9'} 2026 MBA Connect India. Built for brighter beginnings.</div>
      </div>
    </footer>
  )
}

export function DirectContactCard() {
  return (
    <div className="interactive-card glass-panel flex flex-col gap-5 rounded-2xl bg-secondary/75 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <p className="mb-1 text-sm font-bold uppercase tracking-[0.16em] text-primary">Start a conversation</p>
        <h3 className="text-xl font-bold text-ink sm:text-2xl">Your next step can start today.</h3>
      </div>
      <div className="flex flex-col gap-3 min-[420px]:flex-row">
        <a href="tel:+919876543210" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
          Call now
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <a href="mailto:hello@edutech.in" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-background/60 px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10">Email us</a>
      </div>
    </div>
  )
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen overflow-x-hidden bg-background"><SiteHeader />{children}<SiteFooter /></div>
}
