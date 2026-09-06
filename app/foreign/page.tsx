import Image from "next/image"
import { ArrowUpRight, MapPin, Globe } from "lucide-react"
import { DirectContactCard, PageFrame } from "@/components/site-shell"
import foreign from "@/data/foreign.json"

type Institution = {
  institution: string
  location: string
  programs: string
  counsellorSupport: string
}

// Get unique countries and group by them
const countries = Array.from(new Set((foreign as Institution[]).map((i) => i.location))).sort()

const byCountry = countries.map((country) => ({
  country,
  universities: (foreign as Institution[]).filter((i) => i.location === country),
}))

const countryFlags: Record<string, string> = {
  UK: "🇬🇧",
  Australia: "🇦🇺",
  Canada: "🇨🇦",
  USA: "🇺🇸",
  Ireland: "🇮🇪",
  Germany: "🇩🇪",
  "New Zealand": "🇳🇿",
  UAE: "🇦🇪",
}

export default function ForeignPage() {
  return (
    <PageFrame>
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-[55fr_45fr] md:py-28">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-accent">Foreign University Admissions</p>
              <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                Your future,{" "}
                <span className="text-accent">across borders.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                We help Indian students build strong applications and secure admissions to top universities across{" "}
                {countries.length} countries worldwide.
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
                src="/images/foreign-university-banner.png"
                alt="Students exploring international university opportunities"
                width={584}
                height={381}
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
              [`${(foreign as Institution[]).length}+`, "Partner universities"],
              [`${countries.length}`, "Countries covered"],
              ["UG & PG", "Programs guided"],
              ["End-to-end", "Application support"],
            ].map(([value, label]) => (
              <div key={label} className="px-5 py-7 text-center sm:px-8 sm:py-9">
                <p className="font-mono text-2xl font-bold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Universities by Country */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Partner universities</p>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Universities we help you get into.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Our counsellors have deep knowledge of admission processes, deadlines, and requirements at each of these institutions.
            </p>
          </div>

          <div className="space-y-16">
            {byCountry.map(({ country, universities }) => (
              <div key={country}>
                {/* Country heading */}
                <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                  <span className="text-2xl">{countryFlags[country] ?? "🌍"}</span>
                  <h3 className="text-xl font-bold text-ink">{country}</h3>
                  <span className="ml-auto rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    {universities.length} {universities.length === 1 ? "university" : "universities"}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {universities.map((uni) => (
                    <div
                      key={uni.institution}
                      className="group rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Globe className="size-5" />
                      </div>
                      <h4 className="font-bold text-ink">{uni.institution}</h4>
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-3.5 shrink-0" />
                        <span>{uni.location}</span>
                      </div>
                      <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                        {uni.programs}
                      </p>
                    </div>
                  ))}
                </div>
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
