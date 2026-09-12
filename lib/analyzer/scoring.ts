import {
  AcademicProfile,
  EntranceExamProfile,
  WorkExperienceProfile,
  ProfileFactors,
  UserProfileData,
  SectionScore,
  CompetitivenessLevel,
  AnalysisResult,
} from './types'
import { generateStrengths, generateImprovements, generateTargetContext } from './recommendations'

/**
 * Normalizes an academic percentage to a 0-100 rating scale.
 */
function normalizePercentageToScore(pct: number): number {
  if (pct >= 90) return 96 + Math.min(4, ((pct - 90) / 10) * 4)
  if (pct >= 80) return 85 + ((pct - 80) / 10) * 10
  if (pct >= 70) return 72 + ((pct - 70) / 10) * 12
  if (pct >= 60) return 58 + ((pct - 60) / 10) * 13
  if (pct >= 50) return 45 + ((pct - 50) / 10) * 12
  return Math.max(30, pct * 0.8)
}

/**
 * Calculates academic section score out of 100.
 */
export function calculateAcademicScore(academics: AcademicProfile): SectionScore {
  const c10 = typeof academics.class10Percentage === 'number' ? academics.class10Percentage : 70
  const c12 = typeof academics.class12Percentage === 'number' ? academics.class12Percentage : 70

  let gradPct = 70
  if (typeof academics.graduationScore === 'number') {
    if (academics.graduationScoreType === 'cgpa') {
      // Standard UGC/AICTE conversion: CGPA * 9.5
      gradPct = Math.min(100, academics.graduationScore * 9.5)
    } else {
      gradPct = academics.graduationScore
    }
  }

  const s10 = normalizePercentageToScore(c10)
  const s12 = normalizePercentageToScore(c12)
  const sGrad = normalizePercentageToScore(gradPct)

  // Weighted: 10th (25%), 12th (25%), Grad (50%)
  let baseScore = s10 * 0.25 + s12 * 0.25 + sGrad * 0.5

  // Academic diversity bonus (Non-engineering streams favored in Indian B-schools)
  if (
    academics.graduationStream &&
    ['Commerce', 'Arts / Humanities', 'Science', 'Management'].includes(academics.graduationStream)
  ) {
    baseScore = Math.min(100, baseScore + 3)
  }

  const finalScore = Math.round(baseScore)

  let status: SectionScore['status'] = 'Needs Improvement'
  if (finalScore >= 82) status = 'Strong'
  else if (finalScore >= 70) status = 'Competitive'
  else if (finalScore >= 55) status = 'Moderate'

  return {
    score: Math.min(100, Math.max(30, finalScore)),
    label: 'Academic Profile',
    status,
  }
}

/**
 * Calculates entrance exam section score out of 100.
 */
export function calculateEntranceExamScore(exam: EntranceExamProfile): SectionScore {
  const examType = exam.exam || 'CAT'
  const isTarget = examType === 'Not taken yet' || exam.isTargetScore
  const rawScore = typeof exam.score === 'number' ? exam.score : (typeof exam.targetScore === 'number' ? exam.targetScore : 80)

  let normalized = 75

  switch (examType) {
    case 'CAT':
    case 'XAT':
    case 'SNAP': {
      const p = Math.min(100, Math.max(0, rawScore))
      if (p >= 98) normalized = 98 + ((p - 98) / 2) * 2
      else if (p >= 95) normalized = 92 + ((p - 95) / 3) * 5
      else if (p >= 90) normalized = 84 + ((p - 90) / 5) * 7
      else if (p >= 80) normalized = 73 + ((p - 80) / 10) * 10
      else if (p >= 70) normalized = 62 + ((p - 70) / 10) * 10
      else if (p >= 60) normalized = 50 + ((p - 60) / 10) * 11
      else normalized = Math.max(30, p * 0.8)
      break
    }
    case 'NMAT': {
      // 0 - 360 scale
      const s = Math.min(360, Math.max(0, rawScore))
      if (s >= 240) normalized = 94 + Math.min(6, ((s - 240) / 40) * 6)
      else if (s >= 225) normalized = 86 + ((s - 225) / 15) * 7
      else if (s >= 205) normalized = 76 + ((s - 205) / 20) * 9
      else if (s >= 185) normalized = 64 + ((s - 185) / 20) * 11
      else normalized = Math.max(30, (s / 360) * 80)
      break
    }
    case 'GMAT': {
      // 200 - 800 scale
      const s = Math.min(800, Math.max(200, rawScore))
      if (s >= 730) normalized = 98
      else if (s >= 700) normalized = 92 + ((s - 700) / 30) * 5
      else if (s >= 660) normalized = 84 + ((s - 660) / 40) * 7
      else if (s >= 620) normalized = 74 + ((s - 620) / 40) * 9
      else if (s >= 580) normalized = 62 + ((s - 580) / 40) * 11
      else normalized = Math.max(30, ((s - 200) / 600) * 80)
      break
    }
    case 'GRE': {
      // 260 - 340 scale
      const s = Math.min(340, Math.max(260, rawScore))
      if (s >= 328) normalized = 97
      else if (s >= 320) normalized = 91 + ((s - 320) / 8) * 5
      else if (s >= 310) normalized = 82 + ((s - 310) / 10) * 8
      else if (s >= 300) normalized = 71 + ((s - 300) / 10) * 10
      else normalized = Math.max(30, ((s - 260) / 80) * 70)
      break
    }
    case 'Not taken yet': {
      // Target score calibration: modest deduction since it is a target, not yet proven
      const target = Math.min(100, Math.max(0, rawScore))
      normalized = Math.max(45, target * 0.88 - 4)
      break
    }
    default: {
      const p = Math.min(100, Math.max(0, rawScore))
      normalized = Math.max(35, p * 0.9)
      break
    }
  }

  // Slight adjustment for target projections
  if (isTarget && examType !== 'Not taken yet') {
    normalized = Math.max(45, normalized - 5)
  }

  const finalScore = Math.round(normalized)

  let status: SectionScore['status'] = 'Needs Improvement'
  if (finalScore >= 85) status = 'Strong'
  else if (finalScore >= 72) status = 'Competitive'
  else if (finalScore >= 58) status = 'Moderate'

  return {
    score: Math.min(100, Math.max(30, finalScore)),
    label: 'Entrance Exam',
    status,
  }
}

/**
 * Calculates work experience score out of 100.
 */
export function calculateExperienceScore(
  exp: WorkExperienceProfile,
  profile: ProfileFactors
): SectionScore {
  let score = 70

  if (!exp.hasExperience || exp.tenure === 'Fresher') {
    // Freshers are strong candidates in 2-year flagship Indian MBA programmes.
    // Base 72, with internship booster
    if (profile.internships === '3+') score = 82
    else if (profile.internships === '2') score = 78
    else if (profile.internships === '1') score = 74
    else score = 70
  } else {
    switch (exp.tenure) {
      case 'Less than 6 months':
        score = 75
        break
      case '6–12 months':
        score = 82
        break
      case '1–2 years':
        score = 93 // Prime sweet spot
        break
      case '2–3 years':
        score = 97 // Maximum points at top B-schools
        break
      case '3+ years':
        score = 90 // Strong overall, optimal for executive/1-yr or specialized PGDM
        break
      default:
        score = 72
        break
    }
  }

  let status: SectionScore['status'] = 'Needs Improvement'
  if (score >= 85) status = 'Strong'
  else if (score >= 74) status = 'Competitive'
  else if (score >= 60) status = 'Moderate'

  return {
    score: Math.min(100, Math.max(40, score)),
    label: 'Work Experience',
    status,
  }
}

/**
 * Calculates internships & profile factors score out of 100.
 */
export function calculateProfileFactorsScore(profile: ProfileFactors): SectionScore {
  let internshipPoints = 50
  switch (profile.internships) {
    case 'None':
      internshipPoints = 52
      break
    case '1':
      internshipPoints = 68
      break
    case '2':
      internshipPoints = 82
      break
    case '3+':
      internshipPoints = 94
      break
  }

  const achievementCount = profile.achievements ? profile.achievements.length : 0
  // Each achievement gives +4 points up to +20 points
  const achievementBonus = Math.min(20, achievementCount * 4)

  const combined = Math.round(internshipPoints * 0.75 + achievementBonus * 1.25)
  const finalScore = Math.min(100, Math.max(35, combined))

  let status: SectionScore['status'] = 'Needs Improvement'
  if (finalScore >= 80) status = 'Strong'
  else if (finalScore >= 68) status = 'Competitive'
  else if (finalScore >= 54) status = 'Moderate'

  return {
    score: finalScore,
    label: 'Internships & Profile',
    status,
  }
}

/**
 * Master scoring engine: combines all factors into a weighted indicative profile score.
 */
export function calculateProfileScore(data: UserProfileData): AnalysisResult {
  const academicsScore = calculateAcademicScore(data.academics)
  const examScore = calculateEntranceExamScore(data.exam)
  const experienceScore = calculateExperienceScore(data.experience, data.profile)
  const profileFactorsScore = calculateProfileFactorsScore(data.profile)

  // Overall weighting:
  // Entrance Exam: 35%
  // Academics: 30%
  // Work Experience: 20%
  // Internships & Profile: 15%
  const composite = Math.round(
    examScore.score * 0.35 +
      academicsScore.score * 0.3 +
      experienceScore.score * 0.2 +
      profileFactorsScore.score * 0.15
  )

  const overallScore = Math.min(100, Math.max(30, composite))

  let competitiveness: CompetitivenessLevel = 'Profile Needs Strengthening'
  let summaryText = ''

  if (overallScore >= 80) {
    competitiveness = 'Strong Profile'
    summaryText =
      'Your overall profile is remarkably strong for premier MBA admissions. Your academic foundation, performance indicators, and experiences give you a compelling foundation for top business school shortlists.'
  } else if (overallScore >= 65) {
    competitiveness = 'Competitive Profile'
    summaryText =
      'Your overall profile is competitive for leading MBA admissions. Your academic performance and experience are positive factors, while targeting a higher entrance exam score or GD/PI preparation can strengthen your profile further.'
  } else if (overallScore >= 50) {
    competitiveness = 'Needs Improvement'
    summaryText =
      'Your profile shows positive potential but has specific areas that require strengthening. A strategic entrance exam score and focused profile-building can substantially expand your admission opportunities.'
  } else {
    competitiveness = 'Profile Needs Strengthening'
    summaryText =
      'Your profile currently needs targeted strengthening across key evaluation criteria. Strategic planning, exam preparation, and mentoring can help bridge the gaps for upcoming admission cycles.'
  }

  const strengths = generateStrengths(data, academicsScore, examScore, experienceScore, profileFactorsScore)
  const improvements = generateImprovements(data, academicsScore, examScore, experienceScore, profileFactorsScore)
  const targetContext = generateTargetContext(data.preferences, overallScore)

  return {
    overallScore,
    competitiveness,
    summaryText,
    breakdown: {
      academics: academicsScore,
      entranceExam: examScore,
      experience: experienceScore,
      profileFactors: profileFactorsScore,
    },
    strengths,
    improvements,
    targetContext,
  }
}
