import Image from 'next/image'
import { ArrowUpRight, Globe, MapPin } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'
import foreign from '@/data/foreign.json'

type Institution = {
  institution: string
  location: string
  programs: string
  counsellorSupport: string
}

const countries = Array.from(new Set((foreign as Institution[]).map((i) => i.location))).sort()

const byCountry = countries.map((country) => ({
  country,
  universities: (foreign as Institution[]).filter((i) => i.location === country),
}))

export default function ForeignPage() {
  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,181,42,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_44%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent backdrop-blur">Foreign University Admissions</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight">
                Your future, <span className="text-accent">across borders.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg lg:text-xl lg:leading-8">
                We help Indian students build strong applications and secure admissions to top universities across {countries.length} countries worldwide.
              </p>
              <a href="tel:+919876543210" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Speak with an advisor
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="animate-float group relative overflow-hidden rounded-[1.75rem] bg-primary-foreground/10 p-3 shadow-2xl shadow-ink/20 backdrop-blur sm:p-5">
                <Image src="/images/foreign-university-banner.png" alt="Students exploring international university opportunities" width={584} height={381} className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" priority />
                <div className="glass-panel-dark absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-primary-foreground sm:left-auto sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Global planning</p>
                  <p className="mt-1 font-semibold">Shortlists, essays, deadlines, and visas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [`${(foreign as Institution[]).length}+`, 'Partner universities'],
              [`${countries.length}`, 'Countries covered'],
              ['UG & PG', 'Programs guided'],
              ['End-to-end', 'Application support'],
            ].map(([value, label]) => (
              <div key={label} className="bg-background px-4 py-7 text-center transition-colors duration-300 hover:bg-secondary/55 sm:px-6 sm:py-9">
                <p className="font-mono text-2xl font-bold text-primary sm:text-3xl">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Partner universities</p>
            <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">Universities we help you get into.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Our counsellors have deep knowledge of admission processes, deadlines, and requirements at each of these institutions.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {byCountry.map(({ country, universities }) => (
              <div key={country}>
                <div className="mb-6 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">{country.slice(0, 2).toUpperCase()}</span>
                    <h3 className="text-xl font-bold text-ink">{country}</h3>
                  </div>
                  <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary sm:ml-auto">
                    {universities.length} {universities.length === 1 ? 'university' : 'universities'}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {universities.map((uni) => (
                    <UniversityCard key={uni.institution} university={uni} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}

function UniversityCard({ university }: { university: Institution }) {
  return (
    <div className="interactive-card group rounded-2xl border border-border bg-background p-5">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground">
        <Globe className="size-5" />
      </div>
      <h4 className="font-bold text-ink">{university.institution}</h4>
      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" />
        <span>{university.location}</span>
      </div>
      <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{university.programs}</p>
    </div>
  )
}
