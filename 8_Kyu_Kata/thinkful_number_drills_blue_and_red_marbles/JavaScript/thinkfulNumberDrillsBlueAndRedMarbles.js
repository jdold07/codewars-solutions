// 8 kyu - Thinkful - Number Drills: Blue and red marbles  [ ID: 5862f663b4e9d6f12b00003b  (thinkful-number-drills-blue-and-red-marbles) ]
// URL: https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
// Category: undefined  |  Tags: PROBABILITY | FUNDAMENTALS
// *****************************************************************************
const guessBlue = (blueStart, redStart, bluePulled, redPulled) =>
  (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled)
