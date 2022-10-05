// 7 kyu - Growth of a Population  [ ID: 563b662a59afc2b5120000c6  (growth-of-a-population) ]
// URL: https://www.codewars.com/kata/563b662a59afc2b5120000c6
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function nbYear(p0, percent, aug, p) {
    percent = percent / 100
    let n = 0
    while (p0 < p) {
      p0 += Math.floor(p0 * percent + aug)
      n++
    }
    return n
  }
