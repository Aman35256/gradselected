'use client'

import { EntranceExamProfile, EntranceExamType } from '@/lib/analyzer/types'
import { ENTRANCE_EXAMS, EXAM_CONFIGS } from '@/lib/analyzer/constants'

interface StepExamProps {
  data: EntranceExamProfile
  onChange: (updated: Partial<EntranceExamProfile>) => void
  errors: Record<string, string>
}

export function StepExam({ data, onChange, errors }: StepExamProps) {
  const currentExam = data.exam || ''
  const isNotTaken = currentExam === 'Not taken yet'
  const config = currentExam && currentExam !== 'Not taken yet' ? EXAM_CONFIGS[currentExam] : EXAM_CONFIGS['Not taken yet']

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-ink">Tell us about your entrance exam</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Entrance exam performance is a major component of B-school shortlisting criteria.
        </p>
      </div>

      {/* Exam selection pill grid */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2.5">
          Select Exam <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {ENTRANCE_EXAMS.map((exam) => {
            const isSelected = data.exam === exam
            return (
              <button
                key={exam}
                type="button"
                onClick={() => {
                  onChange({
                    exam,
                    // reset score if switching exam type
                    score: data.exam === exam ? data.score : '',
                    isTargetScore: exam === 'Not taken yet',
                  })
                }}
                className={`flex flex-col items-center justify-center rounded-xl border p-3 text-center transition-all ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold'
                    : 'border-border bg-background text-ink hover:border-primary/40 hover:bg-secondary/60'
                }`}
              >
                <span className="text-sm font-semibold">{exam}</span>
              </button>
            )
          })}
        </div>
        {errors.exam && <p className="mt-1.5 text-xs text-destructive">{errors.exam}</p>}
      </div>

      {/* Dynamic score input */}
      {data.exam && (
        <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5">
          {isNotTaken ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-ink">What score or percentile are you targeting?</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  We will calibrate your profile chances based on your target ambition.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="targetExamSelect" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Targeted Exam
                  </label>
                  <select
                    id="targetExamSelect"
                    value={data.targetExam || 'CAT'}
                    onChange={(e) => onChange({ targetExam: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="CAT">CAT</option>
                    <option value="XAT">XAT</option>
                    <option value="SNAP">SNAP</option>
                    <option value="NMAT">NMAT</option>
                    <option value="GMAT">GMAT</option>
                    <option value="GRE">GRE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="targetScore" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Target Percentile / Score <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="targetScore"
                      type="number"
                      min="0"
                      max="100"
                      step="0.5"
                      value={data.targetScore ?? data.score ?? ''}
                      onChange={(e) => {
                        const val = e.target.value === '' ? '' : parseFloat(e.target.value)
                        onChange({ targetScore: val, score: val })
                      }}
                      placeholder="e.g. 90.0"
                      className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-1 ${
                        errors.score
                          ? 'border-destructive focus:ring-destructive'
                          : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                      %tile
                    </span>
                  </div>
                  {errors.score && <p className="mt-1 text-xs text-destructive">{errors.score}</p>}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="examScore" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                {config.scoreLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-sm">
                <input
                  id="examScore"
                  type="number"
                  min={config.min}
                  max={config.max}
                  step={config.step || 0.1}
                  value={data.score}
                  onChange={(e) =>
                    onChange({
                      score: e.target.value === '' ? '' : parseFloat(e.target.value),
                    })
                  }
                  placeholder={config.placeholder}
                  className={`w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-1 ${
                    errors.score
                      ? 'border-destructive focus:ring-destructive'
                      : 'border-border focus:border-primary focus:ring-primary'
                  }`}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                  {config.unit}
                </span>
              </div>
              <p className="mt-1 text-[0.75rem] text-muted-foreground">
                Range: {config.min} – {config.max} {config.unit}
              </p>
              {errors.score && <p className="mt-1 text-xs text-destructive">{errors.score}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
