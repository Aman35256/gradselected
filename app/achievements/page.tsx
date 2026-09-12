import Image from 'next/image'
import { ArrowUpRight, Quote } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'

const stories = [
  {
    name: 'Riya Mehta',
    detail: 'MBA - Symbiosis International University',
    quote: 'I had too many options and was not sure where to begin. The counselling helped me understand which colleges actually suited my profile, budget, and career plans.'
  },
  {
    name: 'Arjun Shah',
    detail: 'IIM Indore - PGP',
    quote: 'What I liked most was the clarity. Instead of simply suggesting colleges, the team explained the admission process, important deadlines, and what I needed to focus on.'
  },
  {
    name: 'Neha Kapoor',
    detail: 'PGDM - SPJIMR Mumbai',
    quote: 'The process initially felt overwhelming, but the guidance gave me a clear plan. Every conversation helped me understand my next step and make decisions with more confidence.'
  },
  {
    name: 'Aarav Sharma',
    detail: 'MBA - NMIMS Mumbai',
    quote: 'I was comparing several MBA colleges and found it difficult to understand the differences. The counselling helped me compare my options objectively and choose a programme that fit my goals.'
  },
  {
    name: 'Kunal Verma',
    detail: 'MBA - Manipal Academy of Higher Education',
    quote: 'From understanding eligibility and fees to keeping track of applications and deadlines, I received guidance throughout the process. It made the admission journey much more manageable.'
  },
  {
    name: 'Ananya Gupta',
    detail: 'MBA - Christ University',
    quote: 'The counselling session was personalised to my profile rather than being a generic college recommendation. I got answers to the questions I had been struggling with and much better clarity about my options.'
  },
  {
    name: 'Rahul Malhotra',
    detail: 'MBA - Amity University',
    quote: 'I was unsure which college would give me the right balance of academics, opportunities, and affordability. The team helped me compare everything clearly before making my decision.'
  },
  {
    name: 'Sneha Kapoor',
    detail: 'MBA - UPES Dehradun',
    quote: 'I had several doubts about the admission process and kept changing my mind. The counsellors were patient, explained my options clearly, and helped me move forward with confidence.'
  },
  {
    name: 'Aditya Jain',
    detail: 'MBA - Great Lakes Institute of Management',
    quote: 'The biggest difference for me was having someone explain the process step by step. I knew what to do, what deadlines to watch, and how each option compared with the others.'
  },
  {
    name: 'Ishita Agarwal',
    detail: 'MBA - Welingkar Institute of Management',
    quote: 'The advice felt practical and specific to my profile. Rather than pushing one particular college, the team helped me understand the pros and cons of different choices so I could decide for myself.'
  }
];

export default function AchievementsPage() {
  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden bg-secondary">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(245,181,42,0.2),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(50,120,140,0.18),transparent_34%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
            <div>
              <p className="glass-panel mb-4 inline-flex rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Student achievements</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight text-ink">
                Progress worth <span className="text-primary">celebrating.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl lg:leading-8">
                Behind every admit is a personal story of effort, uncertainty, and growth. We are proud to be part of those stories.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="animate-float group relative overflow-hidden rounded-[1.75rem] bg-background/55 p-3 shadow-2xl shadow-ink/10 backdrop-blur sm:p-5">
                <Image src="/images/achievements-students.png" alt="Happy students celebrating their admissions" width={520} height={480} className="h-auto w-full object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105" priority />
                <div className="glass-panel absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-ink sm:left-auto sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">10 stories</p>
                  <p className="mt-1 font-semibold">Real journeys, real outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">In their words</p>
              <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">The people behind the outcomes.</h2>
            </div>
            <span className="font-mono text-sm text-muted-foreground">01 - 10</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <article key={story.name} className="interactive-card group flex min-h-72 flex-col justify-between rounded-2xl border border-border bg-background p-6">
                <Quote className="size-7 text-accent transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" />
                <p className="mt-8 text-lg font-semibold leading-8 text-ink">"{story.quote}"</p>
                <div className="mt-8 border-t border-border pt-4">
                  <p className="font-bold text-ink">{story.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{story.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-ink text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Your story next</p>
              <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">The result matters. So does the journey.</h2>
            </div>
            <a href="tel:+919876543210" className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              Start your journey
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}
