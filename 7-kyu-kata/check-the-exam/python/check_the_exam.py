# 7 kyu - Check the exam  [ ID: 5a3dd29055519e23ec000074  (check-the-exam) ]
# URL: https://www.codewars.com/kata/5a3dd29055519e23ec000074
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
def check_exam(arr1, arr2):
      score = 0
      for x in range(len(arr1)):
          if arr2[x] == arr1[x]: score += 4
          elif arr2[x] == "": score += 0
          else: score -= 1
      return score if score >= 0 else 0
