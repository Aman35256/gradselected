'use client'

import { useState } from 'react'
import { ArrowUpRight, Sparkles, Target, GraduationCap, Award } from 'lucide-react'
import { AnalyzerModal } from './analyzer-modal'

interface AnalyzerBannerProps {
  className?: string
}

export function AnalyzerBanner({ className = '' }: AnalyzerBannerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`interactive-card glass-panel relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-secondary/80 via-background/90 to-secondary/50 p-6 sm:p-10 shadow-xl shadow-primary/5 ${className}`}
      >
        <div className="absolute right-0 top-0 -z-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 -z-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              <Sparkles className="size-3.5 text-accent" />
              MBA Admission Chances Analyzer
            </div>

            <h2 className="text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Not Sure How Competitive Your MBA Profile Is?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Analyse your academic performance, entrance exam score, work experience and achievements to understand where your profile stands.
            </p>

            {/* Quick feature pill tags */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-ink">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-primary">
                <GraduationCap className="size-3.5" /> Academics (10th/12th/Grad)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-primary">
                <Target className="size-3.5" /> CAT / XAT / GMAT / NMAT
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-primary">
                <Award className="size-3.5" /> Experience & Achievements
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-2xl sm:text-base"
            >
              <Sparkles className="size-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
              Check My MBA Chances
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <AnalyzerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
