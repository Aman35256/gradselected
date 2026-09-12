export type GraduationStream =
  | 'Engineering'
  | 'Commerce'
  | 'Science'
  | 'Arts / Humanities'
  | 'Management'
  | 'Computer / IT'
  | 'Other'

export type GraduationStatus = 'Completed' | 'Final Year' | 'Pursuing'

export type GraduationScoreType = 'percentage' | 'cgpa'

export interface AcademicProfile {
  class10Percentage: number | ''
  class12Percentage: number | ''
  graduationScoreType: GraduationScoreType
  graduationScore: number | ''
  graduationStream: GraduationStream | ''
  graduationStatus: GraduationStatus | ''
}

export type EntranceExamType =
  | 'CAT'
  | 'XAT'
  | 'SNAP'
  | 'NMAT'
  | 'GMAT'
  | 'GRE'
  | 'Other'
  | 'Not taken yet'

export interface EntranceExamProfile {
  exam: EntranceExamType | ''
  score: number | ''
  isTargetScore?: boolean
  targetExam?: string
  targetScore?: number | ''
}

export type WorkExperienceTenure =
  | 'Fresher'
  | 'Less than 6 months'
  | '6–12 months'
  | '1–2 years'
  | '2–3 years'
  | '3+ years'

export interface WorkExperienceProfile {
  hasExperience: boolean
  tenure: WorkExperienceTenure
  industry?: string
}

export type InternshipCount = 'None' | '1' | '2' | '3+'

export interface ProfileFactors {
  internships: InternshipCount
  internshipDuration?: string
  achievements: string[]
}

export interface TargetPreferences {
  specialisation: string
  targetCollegePreference?: string
}

export interface UserProfileData {
  academics: AcademicProfile
  exam: EntranceExamProfile
  experience: WorkExperienceProfile
  profile: ProfileFactors
  preferences: TargetPreferences
}

export type CompetitivenessLevel =
  | 'Strong Profile'
  | 'Competitive Profile'
  | 'Needs Improvement'
  | 'Profile Needs Strengthening'

export interface SectionScore {
  score: number // 0 - 100
  label: string
  status: 'Strong' | 'Competitive' | 'Moderate' | 'Needs Improvement'
}

export interface AnalysisResult {
  overallScore: number // 0 - 100
  competitiveness: CompetitivenessLevel
  summaryText: string
  breakdown: {
    academics: SectionScore
    entranceExam: SectionScore
    experience: SectionScore
    profileFactors: SectionScore
  }
  strengths: string[]
  improvements: {
    category: string
    title: string
    description: string
  }[]
  targetContext?: string
}
