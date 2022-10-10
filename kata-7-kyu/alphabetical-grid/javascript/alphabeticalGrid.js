//+ ====================================================================================================================
//+
//+ 7 kyu - Alphabetical Grid  [ ID: 60a94f1443f8730025d1744b ] (alphabetical-grid)
//+ URL: https://www.codewars.com/kata/60a94f1443f8730025d1744b
//+ Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS
//+
//+ ====================================================================================================================

const grid = (N) =>
  N < 0
    ? null
    : Array.from({ length: N }, (_, i) =>
        Array.from({ length: N }, (_, j) => String.fromCharCode(97 + ((i + j) % 26))).join(" ")
      ).join("\n") || ""

// =====================================================================================================================
// =====================================================================================================================

function grid2(N) {
  if (N < 0) return null

  const result = []
  const stupidLongAlpha = "abcdefghijklmnopqrstuvwxyz".repeat(Math.ceil((N / 26) ** 2) + 1)

  for (let i = 0; i < N; i++) {
    result.push(Array.from({ length: N }, (_, j) => stupidLongAlpha[i + j]).join(" "))
  }

  return result.join("\n") || ""
}

module.exports = { grid, grid2 }
