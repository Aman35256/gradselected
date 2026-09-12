'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowUpRight, CheckCircle2, ExternalLink, GraduationCap, MapPin, Search, X } from 'lucide-react'
import { DirectContactCard, PageFrame } from '@/components/site-shell'
import { AnalyzerBanner } from '@/components/analyzer/analyzer-banner'
import colleges from '@/data/colleges.json'

type College = {
  institution: string
  slug: string
  location: string
  programs: string
  entranceExams: string[]
  counsellorSupport: string
  website: string
}

const steps = [
  'Discover your goals and shortlist the right pathways.',
  'Build an exam and application strategy around your timeline.',
  'Strengthen your profile with focused, practical guidance.',
  'Apply with confidence and prepare for every conversation.',
]

const benefits = [
  { title: 'Personal roadmap', desc: 'A realistic plan based on your profile and target schools.' },
  { title: 'Expert mentoring', desc: 'Guidance from counsellors who know the process inside out.' },
  { title: 'Application confidence', desc: 'Clear feedback and preparation for each milestone.' },
]

const popularExams = ['All', 'CAT', 'XAT', 'GMAT', 'CMAT', 'NMAT', 'MAT', 'SNAP', 'MAH MBA CET']

export default function AdmissionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedExam, setSelectedExam] = useState('All')

  const collegeList = colleges as College[]

  const filteredColleges = useMemo(() => {
    return collegeList.filter((college) => {
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        college.institution.toLowerCase().includes(q) ||
        college.location.toLowerCase().includes(q) ||
        college.programs.toLowerCase().includes(q) ||
        college.entranceExams.some((exam) => exam.toLowerCase().includes(q))

      const matchesExam =
        selectedExam === 'All' ||
        college.entranceExams.some((e) => e.toLowerCase() === selectedExam.toLowerCase())

      return matchesSearch && matchesExam
    })
  }, [collegeList, searchQuery, selectedExam])

  return (
    <PageFrame>
      <main>
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,181,42,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent backdrop-blur">Admissions support</p>
              <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight">
                Your application deserves a <span className="text-accent">strong strategy.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg lg:text-xl lg:leading-8">
                From choosing an exam to choosing a college, MBA Connect India gives you an experienced team for every important decision.
              </p>
              <a href="tel:+919876543210" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink shadow-xl shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Speak with an advisor
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="animate-float group relative overflow-hidden rounded-[1.75rem] bg-primary-foreground/10 p-3 shadow-2xl shadow-ink/20 backdrop-blur sm:p-5">
                <Image src="/images/mba-admissions-banner.png" alt="Students pursuing business and MBA education" width={594} height={380} className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" priority />
                <div className="glass-panel-dark absolute bottom-4 left-4 right-4 rounded-2xl p-4 text-primary-foreground sm:left-auto sm:w-64">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Application ready</p>
                  <p className="mt-1 font-semibold">Shortlist, prepare, apply.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">How it works</p>
              <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">A simple process for a complex decision.</h2>
            </div>
            <div className="grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="interactive-card rounded-2xl border border-border bg-background p-5">
                  <div className="flex gap-4 sm:items-center">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-mono text-sm font-bold text-primary">0{index + 1}</span>
                    <p className="text-base font-semibold leading-7 text-ink sm:text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">What you get</p>
            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map(({ title, desc }) => (
                <div key={title} className="interactive-card group rounded-2xl border border-border/70 bg-background/85 p-6 backdrop-blur">
                  <CheckCircle2 className="mb-5 size-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <AnalyzerBanner />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Our partner institutions</p>
            <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">Colleges we help you get into.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              We guide students into {collegeList.length}+ leading business schools across India. Filter by entrance exam or search by college name and location.
            </p>
          </div>

          {/* Search & Entrance Exam Filters */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by college, location, or exam (e.g. CAT, Mumbai)..."
                className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-9 text-sm text-ink placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-ink"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground mr-1">Filter by exam:</span>
              {popularExams.map((exam) => {
                const isActive = selectedExam === exam
                return (
                  <button
                    key={exam}
                    type="button"
                    onClick={() => setSelectedExam(exam)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-secondary text-primary hover:bg-secondary/80'
                    }`}
                  >
                    {exam}
                  </button>
                )
              })}
            </div>

            <div className="text-xs text-muted-foreground">
              Showing {filteredColleges.length} of {collegeList.length} institutions
              {(searchQuery || selectedExam !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedExam('All')
                  }}
                  className="ml-2 font-semibold text-primary hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* College Cards Grid */}
          {filteredColleges.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.institution} college={college} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-background p-10 text-center">
              <p className="text-base font-semibold text-ink">No institutions match your filters.</p>
              <p className="mt-1 text-sm text-muted-foreground">Try clearing your search term or selecting another entrance exam.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedExam('All')
                }}
                className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
          <DirectContactCard />
        </section>
      </main>
    </PageFrame>
  )
}

function CollegeCard({ college }: { college: College }) {
  return (
    <div className="interactive-card group flex flex-col justify-between rounded-2xl border border-border bg-background p-5">
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-primary">
            {college.programs}
          </span>
        </div>

        <h3 className="font-bold text-ink text-base leading-snug">{college.institution}</h3>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" />
          <span>{college.location}</span>
        </div>

        {college.entranceExams && college.entranceExams.length > 0 && (
          <div className="mt-3.5 pt-3.5 border-t border-border/70">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Entrance Exams
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {college.entranceExams.map((exam) => (
                <span
                  key={exam}
                  className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-0.5 text-[0.75rem] font-semibold text-primary"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 pt-3.5 border-t border-border/70 text-xs">
        {college.website ? (
          <a
            href={college.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-muted-foreground transition hover:text-primary"
            aria-label={`Official website of ${college.institution}`}
          >
            Official Website <ExternalLink className="size-3" />
          </a>
        ) : (
          <span />
        )}
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-1 font-bold text-primary transition hover:underline"
          title={college.counsellorSupport}
        >
          Get Guidance <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  )
}

