import { UserProfileData, SectionScore, TargetPreferences } from './types'

/**
 * Generates 2 to 4 dynamic, input-grounded strengths for the student's profile.
 */
export function generateStrengths(
  data: UserProfileData,
  academics: SectionScore,
  exam: SectionScore,
  experience: SectionScore,
  profile: SectionScore
): string[] {
  const strengths: string[] = []

  const c10 = typeof data.academics.class10Percentage === 'number' ? data.academics.class10Percentage : 0
  const c12 = typeof data.academics.class12Percentage === 'number' ? data.academics.class12Percentage : 0
  const gradScore = typeof data.academics.graduationScore === 'number' ? data.academics.graduationScore : 0
  const isCgpa = data.academics.graduationScoreType === 'cgpa'
  const gradPctEquivalent = isCgpa ? gradScore * 9.5 : gradScore

  // 1. Academic consistency
  if (c10 >= 80 && c12 >= 80 && gradPctEquivalent >= 75) {
    strengths.push('Strong academic consistency across secondary, senior secondary, and graduation')
  } else if (gradPctEquivalent >= 80 || (isCgpa && gradScore >= 8.2)) {
    strengths.push('High undergraduate performance that strengthens initial shortlisting score')
  } else if (c10 >= 85 || c12 >= 85) {
    strengths.push('Solid school academic foundation (Class 10 / 12 performance)')
  }

  // 2. Entrance Exam
  if (exam.score >= 85) {
    strengths.push(
      `Strong performance in ${data.exam.exam || 'entrance exam'} positioning you well for top-tier cutoffs`
    )
  } else if (exam.score >= 72) {
    strengths.push(
      `Competitive ${data.exam.exam || 'entrance exam'} score meeting eligibility for leading management institutes`
    )
  }

  // 3. Work Experience
  if (data.experience.hasExperience && ['1–2 years', '2–3 years'].includes(data.experience.tenure)) {
    strengths.push(
      `Optimal work experience tenure (${data.experience.tenure}) highly valued for 2-year flagship MBA programs`
    )
  } else if (data.experience.hasExperience && data.experience.tenure === '3+ years') {
    strengths.push(
      'Extensive professional experience making you an attractive candidate for 1-year and executive MBAs'
    )
  } else if (!data.experience.hasExperience || data.experience.tenure === 'Fresher') {
    if (data.profile.internships === '2' || data.profile.internships === '3+') {
      strengths.push('Strong fresher profile bolstered by multiple practical internship experiences')
    }
  }

  // 4. Academic Diversity
  if (
    data.academics.graduationStream &&
    ['Commerce', 'Arts / Humanities', 'Science', 'Management'].includes(data.academics.graduationStream)
  ) {
    strengths.push(
      `Academic diversity advantage from your ${data.academics.graduationStream} background`
    )
  }

  // 5. Internships & Achievements
  if (data.profile.internships === '3+') {
    strengths.push('Extensive practical internship exposure demonstrating industry readiness')
  } else if (data.profile.achievements && data.profile.achievements.length >= 2) {
    strengths.push('Well-rounded extracurricular profile with demonstrated leadership and accomplishments')
  }

  // Fallback if very few matched
  if (strengths.length < 2) {
    if (academics.score >= 60) {
      strengths.push('Clear baseline eligibility for recognized university MBA programs')
    }
    if (data.preferences.specialisation && data.preferences.specialisation !== 'Not decided yet') {
      strengths.push(`Clear clarity regarding target specialisation (${data.preferences.specialisation})`)
    }
  }

  // Ensure between 2 and 4 strengths
  return strengths.slice(0, 4)
}

/**
 * Generates 2 to 4 actionable improvement areas based on actual inputs.
 */
export function generateImprovements(
  data: UserProfileData,
  academics: SectionScore,
  exam: SectionScore,
  experience: SectionScore,
  profile: SectionScore
): { category: string; title: string; description: string }[] {
  const improvements: { category: string; title: string; description: string }[] = []

  // 1. Entrance Exam Improvement
  if (data.exam.exam === 'Not taken yet' || data.exam.isTargetScore) {
    improvements.push({
      category: 'Entrance Exam',
      title: 'Targeted Exam Preparation',
      description:
        'Converting your target percentile into a verified test score (CAT/XAT/SNAP) is the single highest-impact lever to secure premier B-School calls.',
    })
  } else if (exam.score < 85) {
    improvements.push({
      category: 'Entrance Exam',
      title: 'Maximising Percentile',
      description:
        'Securing a slightly higher percentile or appearing for alternative exams (e.g. XAT, NMAT, SNAP) can broaden your options across Tier-1 institutions.',
    })
  }

  // 2. Academics Compensation
  if (academics.score < 72) {
    improvements.push({
      category: 'Academics',
      title: 'Compensating Academic Metrics',
      description:
        'For institutes that weigh undergraduate marks heavily, a standout entrance score and exceptional Written Ability Test (WAT) & Personal Interview (PI) performance can effectively bridge the gap.',
    })
  }

  // 3. Work Experience / Practical Exposure
  if (!data.experience.hasExperience || data.experience.tenure === 'Fresher') {
    if (data.profile.internships === 'None' || data.profile.internships === '1') {
      improvements.push({
        category: 'Experience & Practical Exposure',
        title: 'Building Industry Exposure',
        description:
          'Engaging in live business projects, certified corporate training, or practical internships will add substantial weight during profile evaluations.',
      })
    }
  } else if (data.experience.tenure === 'Less than 6 months') {
    improvements.push({
      category: 'Work Experience',
      title: 'Highlighting Impact & Projects',
      description:
        'With under a year of experience, emphasize concrete project contributions, quantifiable results, and business learnings in your application CV.',
    })
  }

  // 4. Extracurricular & Leadership
  if (!data.profile.achievements || data.profile.achievements.length < 2) {
    improvements.push({
      category: 'Profile Building',
      title: 'Showcasing Initiative & Leadership',
      description:
        'B-School interview panels look for leadership, social responsibility, or certifications (like CFA, digital analytics, or project management) that distinguish your candidacy.',
    })
  }

  // 5. GD/PI Strategy
  if (improvements.length < 2) {
    improvements.push({
      category: 'Interview Strategy',
      title: 'Interview & WAT Preparation',
      description:
        'With a strong profile, your primary focus should be preparing compelling answers for personal interviews, current affairs analysis, and case study discussions.',
    })
  }

  return improvements.slice(0, 4)
}

/**
 * Generates an optional contextual target note without college cards.
 */
export function generateTargetContext(
  preferences: TargetPreferences,
  overallScore: number
): string | undefined {
  if (!preferences) return undefined

  const hasCollege =
    preferences.targetCollegePreference &&
    preferences.targetCollegePreference.trim() !== '' &&
    preferences.targetCollegePreference !== "I haven't decided yet"

  const hasSpec =
    preferences.specialisation &&
    preferences.specialisation !== 'Not decided yet'

  if (hasCollege && hasSpec) {
    return `You indicated a target interest in ${preferences.targetCollegePreference} for ${preferences.specialisation}. Top institutions evaluate composite criteria including entrance cut-offs, academic diversity, and personal interview performance.`
  }

  if (hasCollege) {
    return `You indicated an interest in institutions like ${preferences.targetCollegePreference}. Admission to premier institutes relies on composite scoring, where interview readiness and cut-offs play a decisive role.`
  }

  if (hasSpec) {
    return `Your interest in ${preferences.specialisation} will guide your curriculum and institution selection. Keep in mind that different business schools possess distinct industry networks for this domain.`
  }

  return undefined
}
