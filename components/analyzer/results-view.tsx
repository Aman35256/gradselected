'use client'

import { AnalysisResult } from '@/lib/analyzer/types'
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Phone,
  RotateCcw,
  Sparkles,
  Info,
  ShieldAlert,
} from 'lucide-react'

interface ResultsViewProps {
  result: AnalysisResult
  onReset: () => void
}

export function ResultsView({ result, onReset }: ResultsViewProps) {
  const getBadgeStyle = (competitiveness: string) => {
    switch (competitiveness) {
      case 'Strong Profile':
        return 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30'
      case 'Competitive Profile':
        return 'bg-primary/15 text-primary border-primary/30'
      case 'Needs Improvement':
        return 'bg-amber-500/15 text-amber-800 border-amber-500/30'
      default:
        return 'bg-rose-500/15 text-rose-700 border-rose-500/30'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Strong':
        return 'text-emerald-700 bg-emerald-500/10'
      case 'Competitive':
        return 'text-primary bg-primary/10'
      case 'Moderate':
        return 'text-amber-800 bg-amber-500/10'
      default:
        return 'text-rose-700 bg-rose-500/10'
    }
  }

  return (
    <div className="space-y-8">
      {/* Top Hero Score Card */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider bg-background text-primary border-primary/20">
                <Sparkles className="size-3.5 text-accent" />
                Indicative Profile Assessment
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${getBadgeStyle(
                  result.competitiveness
                )}`}
              >
                {result.competitiveness}
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Your MBA Profile Evaluation
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              {result.summaryText}
            </p>
          </div>

          {/* Indicative Score Dial */}
          <div className="flex flex-col items-center justify-center shrink-0 rounded-2xl border border-border/80 bg-background p-5 shadow-sm min-w-[140px]">
            <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted-foreground">
              Indicative Score
            </span>
            <div className="my-1 flex items-baseline gap-1 font-mono">
              <span className="text-4xl font-extrabold text-primary sm:text-5xl">
                {result.overallScore}
              </span>
              <span className="text-sm font-bold text-muted-foreground">/ 100</span>
            </div>
            <span className="text-[0.7rem] font-medium text-muted-foreground">
              Profile Competitiveness
            </span>
          </div>
        </div>
      </div>

      {/* Profile Breakdown */}
      <div>
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Detailed Breakdown</p>
          <h3 className="text-lg font-bold text-ink">Evaluation Across Core Admission Pillars</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(result.breakdown).map(([key, item]) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-background p-4 sm:p-5 transition hover:border-primary/30"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-ink">{item.label}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-mono text-xl font-bold text-primary">{item.score}</span>
                <span className="text-xs text-muted-foreground">out of 100</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Areas to Improve Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Strengths */}
        <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-emerald-600" />
            <h4 className="text-base font-bold text-ink">What&apos;s Working In Your Profile?</h4>
          </div>
          <p className="text-xs text-muted-foreground">
            Key factors that bolster your competitiveness during evaluation:
          </p>

          <ul className="mt-3 space-y-2.5">
            {result.strengths.map((str, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-ink/90 leading-relaxed">
                <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas to Improve */}
        <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="size-5 text-amber-600" />
            <h4 className="text-base font-bold text-ink">What Could Strengthen Your Profile?</h4>
          </div>
          <p className="text-xs text-muted-foreground">
            Targeted recommendations to improve your B-school prospects:
          </p>

          <div className="mt-3 space-y-3">
            {result.improvements.map((imp, idx) => (
              <div key={idx} className="rounded-xl border border-border/70 bg-secondary/25 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-primary">
                    {imp.category}
                  </span>
                  <span className="text-xs font-bold text-ink">{imp.title}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {imp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Context (if available) - purely context, NO college cards */}
      {result.targetContext && (
        <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-secondary/35 p-4 text-xs text-ink/85">
          <Info className="size-4 shrink-0 text-primary mt-0.5" />
          <div>
            <p className="font-bold text-ink mb-0.5">Target Context Notice</p>
            <p className="leading-relaxed text-muted-foreground">{result.targetContext}</p>
          </div>
        </div>
      )}

      {/* Counselling Action Section */}
      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-secondary/80 to-secondary/30 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Personalized Strategy
            </span>
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              Want a More Detailed Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Get personalised guidance on your profile, target colleges, applications and MBA admission strategy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919876543210"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Phone className="size-4" />
              Speak With an MBA Advisor
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-[0.72rem] text-muted-foreground leading-relaxed flex items-start gap-2.5">
        <ShieldAlert className="size-4 shrink-0 text-muted-foreground/80 mt-0.5" />
        <p>
          <strong>Disclaimer:</strong> This assessment is indicative and intended for guidance purposes only. Admission decisions depend on each institution&apos;s current admission criteria, entrance examination performance, applicant pool, interviews and other selection factors. MBAConnectIndia does not guarantee admission.
        </p>
      </div>

      {/* Recalculate / Retake button */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-bold text-ink transition hover:border-primary/40 hover:bg-secondary/60"
        >
          <RotateCcw className="size-3.5" />
          Edit Profile / Recalculate Chances
        </button>
      </div>
    </div>
  )
}
