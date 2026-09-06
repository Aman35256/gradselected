import Image from 'next/image'
import { ArrowUpRight, FlaskConical, MapPin, Stethoscope } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'
import engineering from '@/data/engineering.json'

type Institution = {
  institution: string
  location: string
  programs: string
  counsellorSupport: string
}

const engineeringColleges = (engineering as Institution[]).filter(
  (i) => i.programs.toLowerCase().includes('b.tech') || i.programs.toLowerCase().includes('engineering')
)
const medicalColleges = (engineering as Institution[]).filter(
  (i) => i.programs.toLowerCase().includes('mbbs') || i.programs.toLowerCase().includes('medical')
)

const stats = [
  ['18+', 'Engineering colleges'],
  ['15+', 'Medical colleges'],
  ['B.Tech / MBBS', 'Programs covered'],
  ['Counselling', 'Admission guidance'],
]

export default function EngineeringPage() {
  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(245,181,42,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_44%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent backdrop-blur">Engineering & Medical</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight">
                The right college for your <span className="text-accent">science ambitions.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg lg:text-xl lg:leading-8">
                From B.Tech admissions to NEET counselling, we guide you to the best engineering and medical colleges in India.
              </p>
              <a href="tel:+919876543210" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Speak with an advisor
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="animate-float group relative overflow-hidden rounded-[1.75rem] bg-primary-foreground/10 p-3 shadow-2xl shadow-ink/20 backdrop-blur sm:p-5">
                <Image src="/images/engineering-medical-banner.png" alt="Engineering and medical students" width={744} height={682} className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" priority />
                <div className="glass-panel-dark absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-primary-foreground sm:left-auto sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Focused guidance</p>
                  <p className="mt-1 font-semibold">Engineering, medical, and counselling support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-background px-4 py-7 text-center transition-colors duration-300 hover:bg-secondary/55 sm:px-6 sm:py-9">
                <p className="font-mono text-2xl font-bold text-primary sm:text-3xl">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <InstitutionSection eyebrow="Engineering" title="Top engineering colleges we work with." text={`Expert guidance for B.Tech admissions across ${engineeringColleges.length}+ leading engineering institutions.`}>
          {engineeringColleges.map((college) => <CollegeCard key={college.institution} college={college} />)}
        </InstitutionSection>

        <section className="bg-secondary">
          <InstitutionSection eyebrow="Medical / MBBS" title="Medical colleges with NEET guidance." text={`Comprehensive NEET counselling and admission support for ${medicalColleges.length}+ top medical colleges.`} inset>
            {medicalColleges.map((college) => <CollegeCard key={college.institution} college={college} isMedical />)}
          </InstitutionSection>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}

function InstitutionSection({ eyebrow, title, text, children, inset = false }: { eyebrow: string; title: string; text: string; children: React.ReactNode; inset?: boolean }) {
  return (
    <section className={`${inset ? 'mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28' : 'mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28'}`}>
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
        <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">{title}</h2>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{text}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  )
}

function CollegeCard({ college, isMedical = false }: { college: Institution; isMedical?: boolean }) {
  const Icon = isMedical ? Stethoscope : FlaskConical

  return (
    <div className="interactive-card group rounded-2xl border border-border bg-background p-5">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="font-bold text-ink">{college.institution}</h3>
      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" />
        <span>{college.location}</span>
      </div>
      <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{college.programs}</p>
    </div>
  )
}
