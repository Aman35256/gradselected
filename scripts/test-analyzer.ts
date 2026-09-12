import { calculateProfileScore } from '../lib/analyzer/scoring'
import { UserProfileData } from '../lib/analyzer/types'

console.log('=== RUNNING MBA ADMISSION CHANCES ANALYZER TEST SUITE ===\n')

let passed = 0
let failed = 0

function assert(condition: boolean, testName: string, detail?: any) {
  if (condition) {
    console.log(`PASS: ${testName}`)
    passed++
  } else {
    console.error(`FAIL: ${testName}`, detail || '')
    failed++
  }
}

// Test 1 — Strong Fresher: High academics, strong exam score, no work experience
const test1: UserProfileData = {
  academics: {
    class10Percentage: 94,
    class12Percentage: 92,
    graduationScoreType: 'percentage',
    graduationScore: 88,
    graduationStream: 'Commerce',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'CAT',
    score: 98.8,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: '2',
    achievements: ['Academic achievements / Rank holder', 'Leadership experience (Prefect / Club President)'],
  },
  preferences: {
    specialisation: 'Finance',
    targetCollegePreference: 'IIM Ahmedabad',
  },
}
const res1 = calculateProfileScore(test1)
assert(res1.overallScore >= 80, 'Test 1: Strong Fresher score >= 80', res1.overallScore)
assert(res1.competitiveness === 'Strong Profile', 'Test 1: Competitiveness is Strong Profile', res1.competitiveness)
assert(res1.strengths.length >= 2, 'Test 1: Has 2+ strengths', res1.strengths)
assert(res1.breakdown.academics.status === 'Strong', 'Test 1: Academics is Strong')
assert(res1.breakdown.entranceExam.status === 'Strong', 'Test 1: Exam is Strong')

// Test 2 — Working Professional: Good academics + 2-3 years experience
const test2: UserProfileData = {
  academics: {
    class10Percentage: 84,
    class12Percentage: 81,
    graduationScoreType: 'cgpa',
    graduationScore: 8.4,
    graduationStream: 'Engineering',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'XAT',
    score: 93.5,
  },
  experience: {
    hasExperience: true,
    tenure: '2–3 years',
    industry: 'IT / Software',
  },
  profile: {
    internships: '1',
    achievements: ['Professional certifications (CFA, Six Sigma, etc.)'],
  },
  preferences: {
    specialisation: 'Operations & Supply Chain',
    targetCollegePreference: 'XLRI Jamshedpur',
  },
}
const res2 = calculateProfileScore(test2)
assert(res2.overallScore >= 80, 'Test 2: Working Professional score >= 80', res2.overallScore)
assert(res2.breakdown.experience.status === 'Strong', 'Test 2: Work Exp is Strong', res2.breakdown.experience)
assert(res2.strengths.some((s) => s.includes('work experience')), 'Test 2: Work experience recognized in strengths')

// Test 3 — Strong Exam Profile: Average academics + excellent entrance score
const test3: UserProfileData = {
  academics: {
    class10Percentage: 66,
    class12Percentage: 64,
    graduationScoreType: 'percentage',
    graduationScore: 62,
    graduationStream: 'Science',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'CAT',
    score: 99.4,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: 'None',
    achievements: [],
  },
  preferences: {
    specialisation: 'Marketing',
  },
}
const res3 = calculateProfileScore(test3)
assert(res3.breakdown.entranceExam.score >= 95, 'Test 3: Exam score is extremely high')
assert(res3.improvements.some((i) => i.category === 'Academics'), 'Test 3: Academics flagged in areas to improve')
assert(res3.strengths.some((s) => s.includes('CAT')), 'Test 3: CAT recognized in strengths')

// Test 4 — Strong Academic Profile: Excellent academics + moderate entrance score
const test4: UserProfileData = {
  academics: {
    class10Percentage: 96,
    class12Percentage: 95,
    graduationScoreType: 'percentage',
    graduationScore: 91,
    graduationStream: 'Arts / Humanities',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'CAT',
    score: 75,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: '1',
    achievements: ['Academic achievements / Rank holder'],
  },
  preferences: {
    specialisation: 'Human Resources (HR)',
  },
}
const res4 = calculateProfileScore(test4)
assert(res4.breakdown.academics.score >= 90, 'Test 4: Academics score is top bracket')
assert(res4.improvements.some((i) => i.category === 'Entrance Exam'), 'Test 4: Entrance Exam improvement suggested')

// Test 5 — No Entrance Exam (Targeting score)
const test5: UserProfileData = {
  academics: {
    class10Percentage: 78,
    class12Percentage: 75,
    graduationScoreType: 'percentage',
    graduationScore: 72,
    graduationStream: 'Management',
    graduationStatus: 'Final Year',
  },
  exam: {
    exam: 'Not taken yet',
    score: '',
    targetScore: 90,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: '1',
    achievements: [],
  },
  preferences: {
    specialisation: 'Marketing',
  },
}
const res5 = calculateProfileScore(test5)
assert(res5.overallScore >= 50 && res5.overallScore <= 75, 'Test 5: Target exam profile evaluated accurately', res5.overallScore)
assert(res5.improvements.some((i) => i.title.includes('Targeted Exam Preparation')), 'Test 5: Guides on converting target to real score')

// Test 6 — Multiple Internships & Diverse Achievements
const test6: UserProfileData = {
  academics: {
    class10Percentage: 85,
    class12Percentage: 82,
    graduationScoreType: 'percentage',
    graduationScore: 80,
    graduationStream: 'Engineering',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'SNAP',
    score: 94,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: '3+',
    achievements: [
      'Leadership experience (Prefect / Club President)',
      'Sports / State / National level',
      'Professional certifications (CFA, Six Sigma, etc.)',
      'Research papers / Published projects',
    ],
  },
  preferences: {
    specialisation: 'Business Analytics',
  },
}
const res6 = calculateProfileScore(test6)
assert(res6.breakdown.profileFactors.status === 'Strong', 'Test 6: Profile factors rated Strong', res6.breakdown.profileFactors)

// Test 7 — Minimal Profile: Baseline inputs
const test7: UserProfileData = {
  academics: {
    class10Percentage: 55,
    class12Percentage: 55,
    graduationScoreType: 'percentage',
    graduationScore: 52,
    graduationStream: 'Other',
    graduationStatus: 'Completed',
  },
  exam: {
    exam: 'Other',
    score: 50,
  },
  experience: {
    hasExperience: false,
    tenure: 'Fresher',
  },
  profile: {
    internships: 'None',
    achievements: [],
  },
  preferences: {
    specialisation: 'Not decided yet',
  },
}
const res7 = calculateProfileScore(test7)
assert(typeof res7.overallScore === 'number' && !isNaN(res7.overallScore), 'Test 7: Calculated without errors', res7.overallScore)
assert(res7.competitiveness === 'Needs Improvement' || res7.competitiveness === 'Profile Needs Strengthening', 'Test 7: Accurate low-end tiering')

console.log(`\nResults: ${passed} passed, ${failed} failed.`)
if (failed > 0) {
  process.exit(1)
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY!')
}
