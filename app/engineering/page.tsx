import Image from "next/image"
import { ArrowUpRight, MapPin, FlaskConical, Stethoscope } from "lucide-react"
import { DirectContactCard, PageFrame } from "@/components/site-shell"
import engineering from "@/data/engineering.json"

type Institution = {
  institution: string
  location: string
  programs: string
  counsellorSupport: string
}

const engineeringColleges = (engineering as Institution[]).filter(
  (i) => i.programs.toLowerCase().includes("b.tech") || i.programs.toLowerCase().includes("engineering")
)
const medicalColleges = (engineering as Institution[]).filter(
  (i) => i.programs.toLowerCase().includes("mbbs") || i.programs.toLowerCase().includes("medical")
)

function CollegeCard({ college, isMedical }: { college: Institution; isMedical: boolean }) {
  const Icon = isMedical ? Stethoscope : FlaskConical
  return (
    <div className="group rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="size-5" />
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
  )
}

export default function EngineeringPage() {
  return (
    <PageFrame>
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-[55fr_45fr] md:py-28">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-accent">Engineering & Medical</p>
              <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                The right college for your{" "}
                <span className="text-accent">science ambitions.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                From B.Tech admissions to NEET counselling, we guide you to the best engineering and medical colleges in India.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-bold text-ink"
              >
                Speak with an advisor <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
              <Image
                src="/images/engineering-medical-banner.png"
                alt="Engineering and medical students"
                width={744}
                height={682}
                className="w-full max-w-md md:max-w-none h-auto object-contain object-right"
                priority
              />
            </div>
          </div>
        </section>


        {/* Stats */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
            {[
              ["18+", "Engineering colleges"],
              ["15+", "Medical colleges"],
              ["B.Tech / MBBS", "Programs covered"],
              ["Counselling", "& Admission guidance"],
            ].map(([value, label]) => (
              <div key={label} className="px-5 py-7 text-center sm:px-8 sm:py-9">
                <p className="font-mono text-2xl font-bold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Colleges */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Engineering</p>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Top engineering colleges we work with.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Expert guidance for B.Tech admissions across {engineeringColleges.length}+ leading engineering institutions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringColleges.map((college) => (
              <CollegeCard key={college.institution} college={college} isMedical={false} />
            ))}
          </div>
        </section>

        {/* Medical Colleges */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
            <div className="mb-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Medical / MBBS</p>
              <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Medical colleges with NEET guidance.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Comprehensive NEET counselling and admission support for {medicalColleges.length}+ top medical colleges.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {medicalColleges.map((college) => (
                <CollegeCard key={college.institution} college={college} isMedical={true} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}
