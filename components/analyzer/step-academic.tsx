'use client'

import { AcademicProfile } from '@/lib/analyzer/types'
import { GRADUATION_STREAMS, GRADUATION_STATUSES } from '@/lib/analyzer/constants'

interface StepAcademicProps {
  data: AcademicProfile
  onChange: (updated: Partial<AcademicProfile>) => void
  errors: Record<string, string>
}

export function StepAcademic({ data, onChange, errors }: StepAcademicProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-ink">Let&apos;s understand your academic profile</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Top business schools evaluate consistent academic performance across schooling and graduation.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Class 10 Percentage */}
        <div>
          <label htmlFor="class10" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
            Class 10 Percentage <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="class10"
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={data.class10Percentage}
              onChange={(e) =>
                onChange({
                  class10Percentage: e.target.value === '' ? '' : parseFloat(e.target.value),
                })
              }
              placeholder="e.g. 88.5"
              className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
                errors.class10Percentage
                  ? 'border-destructive focus:ring-destructive'
                  : 'border-border focus:border-primary focus:ring-primary'
              }`}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
              %
            </span>
          </div>
          {errors.class10Percentage && (
            <p className="mt-1 text-xs text-destructive">{errors.class10Percentage}</p>
          )}
        </div>

        {/* Class 12 Percentage */}
        <div>
          <label htmlFor="class12" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
            Class 12 Percentage <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="class12"
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={data.class12Percentage}
              onChange={(e) =>
                onChange({
                  class12Percentage: e.target.value === '' ? '' : parseFloat(e.target.value),
                })
              }
              placeholder="e.g. 85.0"
              className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
                errors.class12Percentage
                  ? 'border-destructive focus:ring-destructive'
                  : 'border-border focus:border-primary focus:ring-primary'
              }`}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
              %
            </span>
          </div>
          {errors.class12Percentage && (
            <p className="mt-1 text-xs text-destructive">{errors.class12Percentage}</p>
          )}
        </div>
      </div>

      {/* Graduation Score */}
      <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <label htmlFor="gradScore" className="block text-xs font-bold uppercase tracking-wider text-ink">
              Graduation Score <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-muted-foreground">Choose percentage or CGPA scale</p>
          </div>

          <div className="flex rounded-lg border border-border bg-background p-0.5">
            <button
              type="button"
              onClick={() => onChange({ graduationScoreType: 'percentage' })}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                data.graduationScoreType === 'percentage'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-ink'
              }`}
            >
              Percentage (%)
            </button>
            <button
              type="button"
              onClick={() => onChange({ graduationScoreType: 'cgpa' })}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                data.graduationScoreType === 'cgpa'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-ink'
              }`}
            >
              CGPA (Scale of 10)
            </button>
          </div>
        </div>

        <div className="mt-3 relative max-w-xs">
          <input
            id="gradScore"
            type="number"
            min="0"
            max={data.graduationScoreType === 'cgpa' ? 10 : 100}
            step="0.01"
            value={data.graduationScore}
            onChange={(e) =>
              onChange({
                graduationScore: e.target.value === '' ? '' : parseFloat(e.target.value),
              })
            }
            placeholder={data.graduationScoreType === 'cgpa' ? 'e.g. 8.4' : 'e.g. 78.5'}
            className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
              errors.graduationScore
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:border-primary focus:ring-primary'
            }`}
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
            {data.graduationScoreType === 'cgpa' ? '/ 10' : '%'}
          </span>
        </div>
        {errors.graduationScore && (
          <p className="mt-1 text-xs text-destructive">{errors.graduationScore}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Graduation Stream */}
        <div>
          <label htmlFor="gradStream" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
            Graduation Stream <span className="text-red-500">*</span>
          </label>
          <select
            id="gradStream"
            value={data.graduationStream}
            onChange={(e) => onChange({ graduationStream: e.target.value as any })}
            className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
              errors.graduationStream
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:border-primary focus:ring-primary'
            }`}
          >
            <option value="">Select your discipline</option>
            {GRADUATION_STREAMS.map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
          {errors.graduationStream && (
            <p className="mt-1 text-xs text-destructive">{errors.graduationStream}</p>
          )}
        </div>

        {/* Graduation Status */}
        <div>
          <label htmlFor="gradStatus" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
            Graduation Status <span className="text-red-500">*</span>
          </label>
          <select
            id="gradStatus"
            value={data.graduationStatus}
            onChange={(e) => onChange({ graduationStatus: e.target.value as any })}
            className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
              errors.graduationStatus
                ? 'border-destructive focus:ring-destructive'
                : 'border-border focus:border-primary focus:ring-primary'
            }`}
          >
            <option value="">Select status</option>
            {GRADUATION_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.graduationStatus && (
            <p className="mt-1 text-xs text-destructive">{errors.graduationStatus}</p>
          )}
        </div>
      </div>
    </div>
  )
}
