// 7 kyu - Looking for a benefactor  [ ID: 569b5cec755dd3534d00000f  (looking-for-a-benefactor) ]
// URL: https://www.codewars.com/kata/569b5cec755dd3534d00000f
// Category: undefined  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const newAvg = (arr, newavg) => {
  if ((x = (arr.length + 1) * newavg - arr.reduce((a, c) => a + c, 0)) <= 0) throw Error("Expected New Average is too low")
  return Math.ceil(x)
}
