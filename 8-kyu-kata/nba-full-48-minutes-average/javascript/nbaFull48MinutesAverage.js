// 8 kyu - NBA full 48 minutes average  [ ID: 587c2d08bb65b5e8040004fd  (nba-full-48-minutes-average) ]
// URL: https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const pointsPer48 = (ppg, mpg) => Math.round((ppg / mpg) * 48 * 10) / 10 || 0
