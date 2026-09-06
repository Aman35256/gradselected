import Image from 'next/image'
import { ArrowUpRight, Quote } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'

const stories = [
  { name: 'Riya Mehta', detail: 'MBA - Symbiosis International University', quote: 'I was confused about which college would be right for me. The team understood my preferences and helped me shortlist the options that matched my career goals.' },
  { name: 'Arjun Shah', detail: 'IIM Indore - PGP', quote: 'The preparation was structured, honest, and completely tailored to my goals.' },
  { name: 'Neha Kapoor', detail: 'SPJIMR Mumbai - PGDM', quote: 'I went from feeling overwhelmed to having a plan I could actually follow.' },
  { name: 'Aarav Sharma', detail: 'MBA - NMIMS Mumbai', quote: 'MBAConnectIndia helped me understand my options and guided me throughout the admission process. The counselling was clear, practical, and really helped me make a confident decision.' },
  { name: 'Kunal Verma', detail: 'MBA - Manipal Academy of Higher Education', quote: 'The guidance I received made the entire admission process much easier. I got clarity about the college, course, application process, and important deadlines.' },
  { name: 'Ananya Gupta', detail: 'MBA - Christ University', quote: 'The counselling session gave me a much better understanding of my MBA options. I really appreciated the personalised approach and straightforward guidance.' },
  { name: 'Rahul Malhotra', detail: 'MBA - Amity University', quote: 'MBAConnectIndia made the college selection process much less stressful. Their guidance helped me compare different options and choose the one that suited me best.' },
  { name: 'Sneha Kapoor', detail: 'MBA - UPES Dehradun', quote: 'I had several doubts about choosing the right MBA programme. The counselling team patiently answered my questions and helped me move forward with much more confidence.' },
  { name: 'Aditya Jain', detail: 'MBA - Great Lakes Institute of Management', quote: 'The entire experience was smooth and informative. I received useful guidance at every stage and had much more clarity about my admission decision.' },
  { name: 'Ishita Agarwal', detail: 'MBA - Welingkar Institute of Management', quote: 'The personalised counselling was exactly what I needed. Instead of giving generic suggestions, the team helped me understand which options were most suitable for my profile.' },
]

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
