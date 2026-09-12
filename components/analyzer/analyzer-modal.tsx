'use client'

import { useState, useEffect, useRef } from 'react'
import { X, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { StepIndicator } from './step-indicator'
import { StepAcademic } from './step-academic'
import { StepExam } from './step-exam'
import { StepExperience } from './step-experience'
import { StepProfile } from './step-profile'
import { StepPreferences } from './step-preferences'
import { ResultsView } from './results-view'
import { UserProfileData, AnalysisResult } from '@/lib/analyzer/types'
import { EXAM_CONFIGS } from '@/lib/analyzer/constants'
import { calculateProfileScore } from '@/lib/analyzer/scoring'

interface AnalyzerModalProps {
  isOpen: boolean
  onClose: () => void
}

const initialProfileData: UserProfileData = {
  academics: {
    class10Percentage: '',
    class12Percentage: '',
    graduationScoreType: 'percentage',
    graduationScore: '',
    graduationStream: '',
    graduationStatus: '',
  },
  exam: {
    exam: 'CAT',
    score: '',
    isTargetScore: false,
    targetExam: 'CAT',
    targetScore: '',
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
    industry: '',
  },
  profile: {
    internships: 'None',
    internshipDuration: '',
    achievements: [],
  },
  preferences: {
    specialisation: 'General Management',
    targetCollegePreference: "I haven't decided yet",
  },
}

export function AnalyzerModal({ isOpen, onClose }: AnalyzerModalProps) {
  const [step, setStep] = useState(1)
  const [profileData, setProfileData] = useState<UserProfileData>(initialProfileData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)

  // Body scroll lock & Escape key handling
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Scroll to top of modal content on step change
  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0
    }
  }, [step, result])

  if (!isOpen) return null

  // Field validation for each step
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      const { class10Percentage, class12Percentage, graduationScore, graduationScoreType, graduationStream, graduationStatus } =
        profileData.academics

      if (class10Percentage === '') {
        newErrors.class10Percentage = 'Class 10 percentage is required.'
      } else if (Number(class10Percentage) < 0 || Number(class10Percentage) > 100) {
        newErrors.class10Percentage = 'Enter a valid percentage between 0 and 100.'
      }

      if (class12Percentage === '') {
        newErrors.class12Percentage = 'Class 12 percentage is required.'
      } else if (Number(class12Percentage) < 0 || Number(class12Percentage) > 100) {
        newErrors.class12Percentage = 'Enter a valid percentage between 0 and 100.'
      }

      if (graduationScore === '') {
        newErrors.graduationScore = 'Graduation score is required.'
      } else {
        const maxScore = graduationScoreType === 'cgpa' ? 10 : 100
        if (Number(graduationScore) < 0 || Number(graduationScore) > maxScore) {
          newErrors.graduationScore = `Enter a valid score between 0 and ${maxScore}.`
        }
      }

      if (!graduationStream) {
        newErrors.graduationStream = 'Please select your graduation discipline.'
      }

      if (!graduationStatus) {
        newErrors.graduationStatus = 'Please select your graduation status.'
      }
    } else if (currentStep === 2) {
      const { exam, score, targetScore } = profileData.exam
      if (!exam) {
        newErrors.exam = 'Please select an entrance exam option.'
      } else if (exam === 'Not taken yet') {
        const tVal = targetScore ?? score
        if (tVal === '' || tVal === undefined) {
          newErrors.score = 'Please enter your target percentile or score.'
        } else if (Number(tVal) < 0 || Number(tVal) > 100) {
          newErrors.score = 'Enter a valid target percentile between 0 and 100.'
        }
      } else {
        const cfg = EXAM_CONFIGS[exam]
        if (score === '' || score === undefined) {
          newErrors.score = `Please enter your ${cfg.scoreLabel}.`
        } else if (Number(score) < cfg.min || Number(score) > cfg.max) {
          newErrors.score = `Enter a valid score between ${cfg.min} and ${cfg.max}.`
        }
      }
    } else if (currentStep === 3) {
      if (profileData.experience.hasExperience && !profileData.experience.tenure) {
        newErrors.tenure = 'Please select your experience tenure.'
      }
    } else if (currentStep === 4) {
      if (!profileData.profile.internships) {
        newErrors.internships = 'Please select your completed internships count.'
      }
    } else if (currentStep === 5) {
      if (!profileData.preferences.specialisation) {
        newErrors.specialisation = 'Please select your target specialisation.'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateStep(step)) return

    if (step < 5) {
      setStep((prev) => prev + 1)
    } else {
      // Calculate final profile score
      const evaluation = calculateProfileScore(profileData)
      setResult(evaluation)
    }
  }

  const handleBack = () => {
    if (result) {
      setResult(null)
      setStep(5)
      return
    }
    if (step > 1) {
      setErrors({})
      setStep((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setResult(null)
    setStep(1)
    setErrors({})
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/65 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col rounded-3xl border border-border/80 bg-background shadow-2xl shadow-ink/20 transition-all duration-300 z-10 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 sm:px-8 sm:py-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-3.5 text-primary" />
              </span>
              <h2 id="modal-title" className="text-lg font-bold text-ink sm:text-xl">
                Check Your MBA Chances
              </h2>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Tell us about your profile and we&apos;ll give you an indicative assessment.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-ink/20 hover:bg-secondary hover:text-ink"
            aria-label="Close modal"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Stepper bar (only when answering questions) */}
        {!result && (
          <div className="border-b border-border/60 bg-secondary/30 px-5 py-3 sm:px-8">
            <StepIndicator currentStep={step} totalSteps={5} />
          </div>
        )}

        {/* Modal Body */}
        <div
          ref={modalContentRef}
          className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8"
        >
          {result ? (
            <ResultsView result={result} onReset={handleReset} />
          ) : (
            <>
              {step === 1 && (
                <StepAcademic
                  data={profileData.academics}
                  onChange={(updated) =>
                    setProfileData((prev) => ({
                      ...prev,
                      academics: { ...prev.academics, ...updated },
                    }))
                  }
                  errors={errors}
                />
              )}

              {step === 2 && (
                <StepExam
                  data={profileData.exam}
                  onChange={(updated) =>
                    setProfileData((prev) => ({
                      ...prev,
                      exam: { ...prev.exam, ...updated },
                    }))
                  }
                  errors={errors}
                />
              )}

              {step === 3 && (
                <StepExperience
                  data={profileData.experience}
                  onChange={(updated) =>
                    setProfileData((prev) => ({
                      ...prev,
                      experience: { ...prev.experience, ...updated },
                    }))
                  }
                  errors={errors}
                />
              )}

              {step === 4 && (
                <StepProfile
                  data={profileData.profile}
                  onChange={(updated) =>
                    setProfileData((prev) => ({
                      ...prev,
                      profile: { ...prev.profile, ...updated },
                    }))
                  }
                  errors={errors}
                />
              )}

              {step === 5 && (
                <StepPreferences
                  data={profileData.preferences}
                  onChange={(updated) =>
                    setProfileData((prev) => ({
                      ...prev,
                      preferences: { ...prev.preferences, ...updated },
                    }))
                  }
                  errors={errors}
                />
              )}
            </>
          )}
        </div>

        {/* Modal Footer (Controls) */}
        {!result && (
          <div className="flex items-center justify-between border-t border-border/70 bg-secondary/20 px-5 py-4 sm:px-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-ink transition hover:border-primary/40 hover:bg-secondary/60"
              >
                <ArrowLeft className="size-3.5" /> Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90"
            >
              {step === 5 ? (
                <>
                  <Sparkles className="size-3.5 text-accent" />
                  Analyse My Profile
                </>
              ) : (
                <>
                  Continue <ArrowRight className="size-3.5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
