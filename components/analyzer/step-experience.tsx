'use client'

import { WorkExperienceProfile, WorkExperienceTenure } from '@/lib/analyzer/types'
import { WORK_EXPERIENCE_TENURES, INDUSTRIES } from '@/lib/analyzer/constants'
import { Briefcase, UserCheck } from 'lucide-react'

interface StepExperienceProps {
  data: WorkExperienceProfile
  onChange: (updated: Partial<WorkExperienceProfile>) => void
  errors: Record<string, string>
}

export function StepExperience({ data, onChange, errors }: StepExperienceProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-ink">Tell us about your work experience</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Both freshers and working professionals are actively admitted to top MBA institutions.
        </p>
      </div>

      {/* Experience status selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2.5">
          Do you have work experience? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() =>
              onChange({
                hasExperience: false,
                tenure: 'Fresher',
                industry: undefined,
              })
            }
            className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
              !data.hasExperience || data.tenure === 'Fresher'
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-border bg-background hover:border-primary/40 hover:bg-secondary/40'
            }`}
          >
            <div className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
              <UserCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Fresher</p>
              <p className="text-xs text-muted-foreground">No full-time corporate work experience</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              onChange({
                hasExperience: true,
                tenure: data.tenure === 'Fresher' ? '1–2 years' : data.tenure,
              })
            }
            className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
              data.hasExperience && data.tenure !== 'Fresher'
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-border bg-background hover:border-primary/40 hover:bg-secondary/40'
            }`}
          >
            <div className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
              <Briefcase className="size-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Yes, I have work experience</p>
              <p className="text-xs text-muted-foreground">Full-time post-graduation experience</p>
            </div>
          </button>
        </div>
      </div>

      {/* If has experience: tenure & industry */}
      {data.hasExperience && data.tenure !== 'Fresher' && (
        <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Total Full-Time Experience <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {WORK_EXPERIENCE_TENURES.map((tenure) => {
                const isSelected = data.tenure === tenure
                return (
                  <button
                    key={tenure}
                    type="button"
                    onClick={() => onChange({ tenure })}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition ${
                      isSelected
                        ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                        : 'border-border bg-background text-ink hover:border-primary/40'
                    }`}
                  >
                    {tenure}
                  </button>
                )
              })}
            </div>
            {errors.tenure && <p className="mt-1 text-xs text-destructive">{errors.tenure}</p>}
          </div>

          <div>
            <label htmlFor="industrySelect" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
              Industry (Optional)
            </label>
            <select
              id="industrySelect"
              value={data.industry || ''}
              onChange={(e) => onChange({ industry: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select your industry domain</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
