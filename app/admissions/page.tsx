import { ArrowUpRight, CheckCircle2, MapPin, GraduationCap } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'
import colleges from '@/data/colleges.json'

type College = {
  institution: string
  location: string
  programs: string
  counsellorSupport: string
}

const steps = [
  'Discover your goals and shortlist the right pathways.',
  'Build an exam and application strategy around your timeline.',
  'Strengthen your profile with focused, practical guidance.',
  'Apply with confidence and prepare for every conversation.',
]

export default function AdmissionsPage() {
  return (
    <PageFrame>
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-accent">Admissions support</p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Your application deserves a <span className="text-accent">strong strategy.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">
              From choosing an exam to choosing a college, Edu Tech gives you an experienced team for every important decision.
            </p>
            <a href="tel:+919876543210" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-bold text-ink">
              Speak with an advisor <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">How it works</p>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">A simple process for a complex decision.</h2>
            </div>
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-5 border-t border-border py-6">
                  <span className="font-mono text-sm font-bold text-primary">0{index + 1}</span>
                  <p className="text-lg font-semibold text-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">What you get</p>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { title: 'Personal roadmap', desc: 'A realistic plan based on your profile and target schools.' },
                { title: 'Expert mentoring', desc: 'Guidance from counsellors who know the process inside out.' },
                { title: 'Application confidence', desc: 'Clear feedback and preparation for each milestone.' },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-2xl bg-background p-6">
                  <CheckCircle2 className="mb-5 size-6 text-primary" />
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Colleges sourced from Google Sheets */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Our partner institutions</p>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Colleges we help you get into.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              We have guided students into {(colleges as College[]).length}+ institutions across India. Our counsellors know what each school looks for.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(colleges as College[]).map((college) => (
              <div
                key={college.institution}
                className="group rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="font-bold text-ink">{college.institution}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5 shrink-0" />
                  <span>{college.location}</span>
                </div>
                <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {college.programs}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}
