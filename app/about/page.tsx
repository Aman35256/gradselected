import Image from 'next/image'
import { ArrowUpRight, Compass, HeartHandshake, Target } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'

const values = [
  {
    icon: Compass,
    title: 'Clarity',
    text: 'Understand every option before making a decision.',
  },
  {
    icon: Target,
    title: 'Strategy',
    text: 'Turn ambition into a step-by-step action plan.',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    text: 'A trusted team from preparation to admission.',
  },
]

export default function AboutPage() {
  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden bg-secondary">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_20%,rgba(245,181,42,0.2),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(50,120,140,0.18),transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-24">
            <div>
              <p className="glass-panel mb-4 inline-flex rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">About Us</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight text-ink">
                Guidance built around <span className="text-primary">your potential.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl lg:leading-8">
                We help students and families navigate important academic decisions with clarity, context, and confidence.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="group relative overflow-hidden rounded-[1.75rem] bg-background/55 p-3 shadow-2xl shadow-ink/10 backdrop-blur sm:p-5">
                <Image
                  src="/images/about-us-banner.png"
                  alt="Student smiling with academic guidance illustrations"
                  width={524}
                  height={381}
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="glass-panel absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-ink sm:left-auto sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Human first</p>
                  <p className="mt-1 font-semibold">Plans shaped around the student.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Our story</p>
              <LinkButton href="/admissions" label="Start planning" />
            </div>
            <div>
              <h2 className="max-w-3xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">
                The right direction is easier to find with the right people beside you.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                MBAConnect India was created to make academic guidance more human and more useful. No one-size-fits-all roadmaps. Instead, we listen closely, understand the full picture, and help each student build a practical plan for the future they want.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {values.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="interactive-card group rounded-2xl border border-border bg-background p-5">
                    <div className="mb-4 grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
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

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90">
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  )
}
