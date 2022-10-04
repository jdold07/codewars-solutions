// 5 kyu - What's a Perfect Power  anyway?  [ ID: 54d4c8b08776e4ad92000835  (whats-a-perfect-power-anyway) ]
// URL: https://www.codewars.com/kata/54d4c8b08776e4ad92000835
// Category: undefined  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const isPP = (n) => {
    const factors = Array.from({ length: Math.ceil(n ** 0.5) }, (_, i) => i + 1)
      .slice(1)
      .filter((el) => !(n % el))
    for (m of factors) {
      let k = 2
      while (m ** k < n) {
        k += 1
      }
      if (m ** k === n) return [m, k]
    }
    return null
  }
