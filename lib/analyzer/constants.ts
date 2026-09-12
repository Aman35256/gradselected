import { GraduationStream, GraduationStatus, EntranceExamType, WorkExperienceTenure, InternshipCount } from './types'

export const GRADUATION_STREAMS: GraduationStream[] = [
  'Engineering',
  'Commerce',
  'Science',
  'Arts / Humanities',
  'Management',
  'Computer / IT',
  'Other',
]

export const GRADUATION_STATUSES: GraduationStatus[] = ['Completed', 'Final Year', 'Pursuing']

export const ENTRANCE_EXAMS: EntranceExamType[] = [
  'CAT',
  'XAT',
  'SNAP',
  'NMAT',
  'GMAT',
  'GRE',
  'Other',
  'Not taken yet',
]

export interface ExamConfig {
  label: string
  scoreLabel: string
  placeholder: string
  min: number
  max: number
  unit: string
  step?: number
}

export const EXAM_CONFIGS: Record<EntranceExamType, ExamConfig> = {
  CAT: {
    label: 'CAT',
    scoreLabel: 'CAT Percentile',
    placeholder: 'e.g. 95.5',
    min: 0,
    max: 100,
    unit: '%tile',
    step: 0.1,
  },
  XAT: {
    label: 'XAT',
    scoreLabel: 'XAT Percentile',
    placeholder: 'e.g. 92.0',
    min: 0,
    max: 100,
    unit: '%tile',
    step: 0.1,
  },
  SNAP: {
    label: 'SNAP',
    scoreLabel: 'SNAP Percentile',
    placeholder: 'e.g. 96.0',
    min: 0,
    max: 100,
    unit: '%tile',
    step: 0.1,
  },
  NMAT: {
    label: 'NMAT',
    scoreLabel: 'NMAT Scaled Score',
    placeholder: 'e.g. 235 (out of 360)',
    min: 0,
    max: 360,
    unit: 'pts',
    step: 1,
  },
  GMAT: {
    label: 'GMAT',
    scoreLabel: 'GMAT Score',
    placeholder: 'e.g. 680 (200 - 800)',
    min: 200,
    max: 800,
    unit: 'pts',
    step: 10,
  },
  GRE: {
    label: 'GRE',
    scoreLabel: 'GRE Score',
    placeholder: 'e.g. 318 (260 - 340)',
    min: 260,
    max: 340,
    unit: 'pts',
    step: 1,
  },
  Other: {
    label: 'Other',
    scoreLabel: 'Score / Percentile',
    placeholder: 'e.g. 88.0',
    min: 0,
    max: 100,
    unit: '% / %tile',
    step: 0.5,
  },
  'Not taken yet': {
    label: 'Not taken yet',
    scoreLabel: 'Target Percentile / Score',
    placeholder: 'e.g. 90.0',
    min: 0,
    max: 100,
    unit: '%tile',
    step: 0.5,
  },
}

export const WORK_EXPERIENCE_TENURES: WorkExperienceTenure[] = [
  'Less than 6 months',
  '6–12 months',
  '1–2 years',
  '2–3 years',
  '3+ years',
]

export const INDUSTRIES = [
  'IT / Software',
  'Finance / Banking',
  'Consulting',
  'Marketing / Sales',
  'Manufacturing / Operations',
  'Healthcare / Pharma',
  'E-commerce / Retail',
  'Government / Public Sector',
  'Education / EdTech',
  'Other',
]

export const INTERNSHIP_COUNTS: InternshipCount[] = ['None', '1', '2', '3+']

export const INTERNSHIP_DURATIONS = ['Less than 2 months', '2–4 months', '4–6 months', '6+ months']

export const ACHIEVEMENTS_LIST = [
  'Academic achievements / Rank holder',
  'Leadership experience (Prefect / Club President)',
  'Sports / State / National level',
  'Extracurricular activities & Debating',
  'Professional certifications (CFA, Six Sigma, etc.)',
  'Research papers / Published projects',
  'Entrepreneurship / Family business initiative',
  'NGO / Community social work',
]

export const SPECIALISATIONS = [
  'Finance',
  'Marketing',
  'Human Resources (HR)',
  'Business Analytics',
  'Operations & Supply Chain',
  'International Business',
  'General Management',
  'Not decided yet',
]
