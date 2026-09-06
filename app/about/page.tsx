import Image from 'next/image'
import { ArrowUpRight, Compass, HeartHandshake, Target } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'

export default function AboutPage() {
  return (
    <PageFrame>
      <main>
        <section className="bg-secondary">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-[55fr_45fr] md:py-28">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">About Us</p>
              <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                Guidance built around <span className="text-primary">your potential.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                We help students and families navigate important academic decisions with clarity, context, and confidence.
              </p>
            </div>
            <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
              <Image
                src="/images/about-us-banner.png"
                alt="Student smiling with academic guidance illustrations"
                width={524}
                height={381}
                className="w-full max-w-md md:max-w-none h-auto object-contain object-right"
                priority
              />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Our story</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink">
                The right direction is easier to find with the right people beside you.
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                MBAConnect India was created to make academic guidance more human and more useful. No one-size-fits-all roadmaps. Instead, we listen closely, understand the full picture, and help each student build a practical plan for the future they want.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div>
                  <Compass className="mb-3 size-7 text-primary" />
                  <h3 className="font-bold text-ink">Clarity</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Understand every option before making a decision.</p>
                </div>
                <div>
                  <Target className="mb-3 size-7 text-primary" />
                  <h3 className="font-bold text-ink">Strategy</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Turn ambition into a step-by-step action plan.</p>
                </div>
                <div>
                  <HeartHandshake className="mb-3 size-7 text-primary" />
                  <h3 className="font-bold text-ink">Support</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">A trusted team from preparation to admission.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}
