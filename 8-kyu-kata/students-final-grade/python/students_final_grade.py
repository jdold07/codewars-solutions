# 8 kyu - Student's Final Grade  [ ID: 5ad0d8356165e63c140014d4  (students-final-grade) ]
# URL: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
def final_grade(exam, projects):
      if exam > 90 or projects > 10: return 100
      if exam > 75 and projects > 4: return 90
      if exam > 50 and projects > 1: return 75
      return 0
