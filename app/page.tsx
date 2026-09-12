import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, GraduationCap, LineChart, Sparkles, Users } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'
import { AnalyzerBanner } from '@/components/analyzer/analyzer-banner'

const programs = [
  {
    icon: GraduationCap,
    title: 'MBA & B-School Admissions',
    text: "Build a compelling profile and find the right fit for India's leading business schools.",
    href: '/admissions',
  },
  {
    icon: LineChart,
    title: 'Foreign University Admissions',
    text: 'Shape a strong application profile for universities abroad with clear, practical milestones.',
    href: '/foreign',
  },
]


const gallery = [
  {
    src: '/images/edu-tech-students.png',
    alt: 'Students walking together on a university campus',
    label: 'Campus Fit',
    title: 'Find places where you can thrive.',
    className: 'md:col-span-2 md:row-span-2',
    sizes: '(max-width: 768px) 100vw, 58vw',
  },
  {
    src: '/images/edu-tech-mentor.png',
    alt: 'Academic counsellor speaking with a student',
    label: 'Mentor Review',
    title: 'Sharper choices, better timing.',
    className: '',
    sizes: '(max-width: 768px) 100vw, 28vw',
  },
  {
    src: '/images/edu-tech-campus.png',
    alt: 'Modern university campus building',
    label: 'Future Ready',
    title: 'A plan that grows with you.',
    className: '',
    sizes: '(max-width: 768px) 100vw, 28vw',
  },
]

const stats = [
  { value: '98%', label: 'Students recommend us', text: 'Because the right support changes everything.' },
  { value: '4.9/5', label: 'Average student rating', text: 'Real guidance from real mentors.' },
  { value: '1:1', label: 'Counsellor strategy', text: 'Every plan begins with your goals and strengths.' },
]

export default function Page() {
  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden border-b border-border bg-secondary">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(245,181,42,0.22),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(50,120,140,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.04fr_.96fr] lg:gap-14 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="glass-panel mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary sm:text-xs">
                <span className="size-2 rounded-full bg-accent shadow-[0_0_18px_rgba(245,181,42,0.9)]" />
                Admissions, made personal
              </p>
              <h1 className="text-balance text-[clamp(2.65rem,8vw,5.9rem)] font-bold leading-[0.98] tracking-tight text-ink">
                A clearer path to the <span className="text-primary">right future.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl lg:leading-8">
                MBA Connect India helps students make confident academic decisions, prepare with purpose, and reach the institutions where they can thrive.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[440px]:flex-row">
                <a href="tel:+919876543210" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-2xl sm:px-6">
                  Talk to an expert
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <Link href="/admissions" className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-background/75 px-5 py-3.5 text-sm font-bold text-ink shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background sm:px-6">
                  Explore admissions
                  <ArrowUpRight className="size-4 opacity-60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="glass-panel mb-3 hidden w-fit rounded-2xl px-4 py-3 text-sm font-bold text-ink shadow-xl sm:block">
                <span className="mr-2 inline-block size-2 rounded-full bg-accent" />
                Profile clarity
              </div>
              <div className="animate-float relative overflow-hidden rounded-[1.75rem] bg-primary p-4 shadow-2xl shadow-primary/20 sm:rounded-[2rem] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-24 shimmer-surface opacity-55" />
                <div className="relative flex justify-between text-primary-foreground/75">
                  <span className="font-mono text-xs sm:text-sm">MCI / 2026</span>
                  <Sparkles className="size-5 text-accent" />
                </div>
                <div className="relative my-8 grid place-items-center sm:my-12">
                  <div className="animate-pulse-glow grid size-40 place-items-center rounded-full bg-[conic-gradient(var(--accent)_0_96%,rgba(255,255,255,0.18)_96%_100%)] p-3 sm:size-52 sm:p-4">
                    <div className="grid size-full place-items-center rounded-full bg-primary text-center">
                      <span className="font-mono text-4xl font-bold text-primary-foreground sm:text-5xl">96%</span>
                      <span className="-mt-7 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60 sm:-mt-8">Goal match</span>
                    </div>
                  </div>
                </div>
                <div className="glass-panel rounded-2xl bg-background/90 p-4 text-ink sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">The MBA Connect India promise</p>
                  <p className="mt-1 text-lg font-semibold">Clarity in every decision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid auto-rows-[minmax(220px,1fr)] gap-4 md:grid-cols-3 md:auto-rows-[230px] lg:auto-rows-[260px]">
            {gallery.map((item, index) => (
              <article key={item.src} className={`group relative overflow-hidden rounded-2xl bg-muted shadow-lg shadow-ink/5 ${item.className}`}>
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes={item.sizes} priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
                <div className="glass-panel-dark absolute inset-x-3 bottom-3 rounded-xl p-4 text-primary-foreground sm:inset-x-4 sm:bottom-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">{item.label}</p>
                  <p className="mt-1 text-base font-semibold sm:text-lg">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">What we do</p>
              <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">A complete ecosystem for your next chapter.</h2>
            </div>
            <Link href="/about" className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-primary">
              Why MBA Connect India
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {programs.map(({ icon: Icon, title, text, href }) => (
              <article key={title} className="interactive-card group rounded-2xl border border-border bg-background p-6">
                <div className="mb-8 grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground sm:mb-10">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <AnalyzerBanner />
        </section>

        <section className="bg-ink text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">The MBA Connect India difference</p>
              <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">Advice that sees the student, not just the score.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="interactive-card group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
                <Users className="mb-4 size-7 text-accent transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold">Personalised guidance</h3>
                <p className="mt-2 leading-7 text-primary-foreground/60">Every plan begins with your goals, strengths, and ambitions.</p>
              </div>
              <div className="interactive-card group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
                <CheckCircle2 className="mb-4 size-7 text-accent transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold">Proven outcomes</h3>
                <p className="mt-2 leading-7 text-primary-foreground/60">Practical strategy, honest feedback, and a team invested in your result.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">A track record you can trust</p>
              <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">Small steps. Significant outcomes.</h2>
              <p className="mt-5 leading-7 text-muted-foreground">From first conversation to final acceptance, our counsellors stay close to the details that make your journey yours.</p>
              <Link href="/achievements" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90">
                See student stories
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`interactive-card rounded-2xl border border-border p-6 ${index === 1 ? 'bg-accent text-ink' : 'bg-secondary text-ink'}`}>
                  <p className="font-mono text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-3 font-semibold">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}
