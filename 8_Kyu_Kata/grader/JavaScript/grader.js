// 8 kyu - Grader  [ ID: 53d16bd82578b1fb5b00128c  (grader) ]
// URL: https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const grader = (score) =>
    score > 1 ? "F" : score >= 0.9 ? "A" : score >= 0.8 ? "B" : score >= 0.7 ? "C" : score >= 0.6 ? "D" : "F"
