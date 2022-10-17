//+ ====================================================================================================================
//+
//+ 8 kyu - Student's Final Grade  [ ID: 5ad0d8356165e63c140014d4 ] (students-final-grade)
//+ URL: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function finalGrade(exam: number, projects: number): number {
  if (exam > 90 || projects > 10) return 100
  if (exam > 75 && projects > 4) return 90
  if (exam > 50 && projects > 1) return 75
  return 0
}

export { finalGrade }
