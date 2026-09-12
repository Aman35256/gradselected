'use client'

import { Check } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

const STEP_LABELS = [
  'Academics',
  'Exam',
  'Experience',
  'Profile',
  'Preferences',
]

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop & Tablet Stepper */}
      <div className="hidden sm:flex items-center justify-between gap-2">
        {STEP_LABELS.map((label, idx) => {
          const stepNum = idx + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep

          return (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isCurrent
                    ? 'text-primary'
                    : isCompleted
                    ? 'text-ink'
                    : 'text-muted-foreground/60'
                }`}
              >
                <span
                  className={`grid size-7 place-items-center rounded-full text-xs font-mono transition-all ${
                    isCurrent
                      ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30 ring-2 ring-primary/20'
                      : isCompleted
                      ? 'bg-secondary text-primary font-bold'
                      : 'border border-border bg-background text-muted-foreground'
                  }`}
                >
                  {isCompleted ? <Check className="size-3.5" /> : `0${stepNum}`}
                </span>
                <span className="hidden md:inline">{label}</span>
              </div>
              {idx < STEP_LABELS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 transition-all ${
                    stepNum < currentStep ? 'bg-primary/70' : 'bg-border'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile Stepper */}
      <div className="flex sm:hidden items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
            0{currentStep}
          </span>
          <span className="text-xs font-bold text-ink">
            {STEP_LABELS[currentStep - 1]}
          </span>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      {/* Mobile progress line */}
      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-secondary sm:hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  )
}
