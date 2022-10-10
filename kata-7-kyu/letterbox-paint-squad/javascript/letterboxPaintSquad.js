//+ ====================================================================================================================
//+
//+ 7 kyu - Letterbox Paint-Squad  [ ID: 597d75744f4190857a00008d ] (letterbox-paint-squad)
//+ URL: https://www.codewars.com/kata/597d75744f4190857a00008d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function paintLetterboxes(start, end) {
  const count = Array.from({ length: end - start + 1 }, (_, i) => [...(i + start + "")])
    .flat()
    .reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {})
  return Array.from({ length: 10 }, (_, i) => count[i] || 0)
}

module.exports = { paintLetterboxes }
