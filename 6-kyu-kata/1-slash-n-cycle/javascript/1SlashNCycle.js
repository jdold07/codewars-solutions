// 6 kyu - 1/n- Cycle  [ ID: 5a057ec846d843c81a0000ad  (1-slash-n-cycle) ]
// URL: https://www.codewars.com/kata/5a057ec846d843c81a0000ad
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const cycle = (n) => {
    if (!(n % 2) || !(n % 5)) return -1
    let remainder = 10 % n
    let count = 1
    while (remainder !== 1) {
      remainder = (10 * remainder) % n
      ++count
    }
    return count
  }
// *****************************************************************************
// *****************************************************************************
const cycle = (n) => {
    if (!(n % 2) || !(n % 5)) return -1
    let remainder = [10 % n]
    let count = 1
    while (remainder !== 1) {
      remainder = (10 * remainder) % n
      ++count
    }
    return count
  }

