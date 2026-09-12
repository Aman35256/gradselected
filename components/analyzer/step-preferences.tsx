'use client'

import { TargetPreferences } from '@/lib/analyzer/types'
import { SPECIALISATIONS } from '@/lib/analyzer/constants'
import colleges from '@/data/colleges.json'
import { Compass, Sparkles } from 'lucide-react'

interface StepPreferencesProps {
  data: TargetPreferences
  onChange: (updated: Partial<TargetPreferences>) => void
  errors: Record<string, string>
}

export function StepPreferences({ data, onChange, errors }: StepPreferencesProps) {
  // Sort colleges alphabetically for the selector
  const collegeOptions = [
    "I haven't decided yet",
    ...colleges.map((c) => c.institution).sort((a, b) => a.localeCompare(b)),
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-ink">What are you targeting?</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Let us know your domain interest and target college preferences for tailored assessment context.
        </p>
      </div>

      {/* MBA Specialisation */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
          Target MBA Specialisation <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {SPECIALISATIONS.map((spec) => {
            const isSelected = data.specialisation === spec
            return (
              <button
                key={spec}
                type="button"
                onClick={() => onChange({ specialisation: spec })}
                className={`rounded-xl border p-3 text-center transition ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm font-bold'
                    : 'border-border bg-background text-ink hover:border-primary/40 hover:bg-secondary/40'
                }`}
              >
                <span className="text-xs font-semibold leading-snug">{spec}</span>
              </button>
            )
          })}
        </div>
        {errors.specialisation && (
          <p className="mt-1 text-xs text-destructive">{errors.specialisation}</p>
        )}
      </div>

      {/* Target College Preference (Optional Context) */}
      <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Compass className="size-4 text-primary" />
          <label htmlFor="targetCollegeSelect" className="block text-xs font-bold uppercase tracking-wider text-ink">
            Target College Preference (Optional)
          </label>
        </div>
        <p className="text-xs text-muted-foreground">
          You can select an institution you aspire to join. This serves as contextual guidance for our mentors.
        </p>

        <select
          id="targetCollegeSelect"
          value={data.targetCollegePreference || "I haven't decided yet"}
          onChange={(e) => onChange({ targetCollegePreference: e.target.value })}
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          {collegeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-3 text-xs text-ink/80">
        <Sparkles className="size-4 shrink-0 text-accent mt-0.5" />
        <p>
          Clicking <strong className="text-ink">Analyse My Profile</strong> will generate your personalized profile competitiveness score and actionable feedback.
        </p>
      </div>
    </div>
  )
}
