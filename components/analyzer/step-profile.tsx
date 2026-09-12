'use client'

import { ProfileFactors, InternshipCount } from '@/lib/analyzer/types'
import { INTERNSHIP_COUNTS, INTERNSHIP_DURATIONS, ACHIEVEMENTS_LIST } from '@/lib/analyzer/constants'
import { Check } from 'lucide-react'

interface StepProfileProps {
  data: ProfileFactors
  onChange: (updated: Partial<ProfileFactors>) => void
  errors: Record<string, string>
}

export function StepProfile({ data, onChange, errors }: StepProfileProps) {
  const toggleAchievement = (item: string) => {
    const current = data.achievements || []
    if (current.includes(item)) {
      onChange({ achievements: current.filter((a) => a !== item) })
    } else {
      onChange({ achievements: [...current, item] })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-ink">What else strengthens your profile?</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Holistic profile factors help you stand out during shortlist cutoffs and personal interviews.
        </p>
      </div>

      {/* Internships */}
      <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
            How many internships have you completed? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {INTERNSHIP_COUNTS.map((count) => {
              const isSelected = data.internships === count
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => onChange({ internships: count as InternshipCount })}
                  className={`rounded-xl border py-2.5 text-center text-xs font-semibold transition ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                      : 'border-border bg-background text-ink hover:border-primary/40'
                  }`}
                >
                  {count}
                </button>
              )
            })}
          </div>
          {errors.internships && <p className="mt-1 text-xs text-destructive">{errors.internships}</p>}
        </div>

        {data.internships && data.internships !== 'None' && (
          <div>
            <label htmlFor="internDurationSelect" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
              Average Internship Duration (Optional)
            </label>
            <select
              id="internDurationSelect"
              value={data.internshipDuration || ''}
              onChange={(e) => onChange({ internshipDuration: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select duration</option>
              {INTERNSHIP_DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Achievements / Extracurriculars */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
          Achievements & Profile Highlights (Select all that apply)
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          Select any achievements or key credentials that demonstrate leadership, skills, or initiative.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {ACHIEVEMENTS_LIST.map((item) => {
            const isChecked = (data.achievements || []).includes(item)
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleAchievement(item)}
                className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition ${
                  isChecked
                    ? 'border-primary bg-primary/5 ring-1 ring-primary/30'
                    : 'border-border bg-background hover:border-primary/30 hover:bg-secondary/40'
                }`}
              >
                <span
                  className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded border transition ${
                    isChecked
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background'
                  }`}
                >
                  {isChecked && <Check className="size-3" />}
                </span>
                <span className="text-xs font-semibold text-ink leading-snug">{item}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
