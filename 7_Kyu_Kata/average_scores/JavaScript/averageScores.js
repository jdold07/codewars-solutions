// 7 kyu - Average Scores  [ ID: 57b68bc7b69bfc8209000307  (average-scores) ]
// URL: https://www.codewars.com/kata/57b68bc7b69bfc8209000307
// Category: undefined  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const average = (scores) => Math.round(scores.reduce((a, c) => a + c) / scores.length)
  
