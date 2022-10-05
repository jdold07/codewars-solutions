// 5 kyu - Best travel  [ ID: 55e7280b40e1c4a06d0000aa  (best-travel) ]
// URL: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function chooseBestSum(t, k, ls) {
  if (ls.length < k || Math.min(...ls) * k > t) {
    return null
  }
  let possible = ls.filter((trip) => trip <= t).sort((a, b) => b - a)
  towns = kSizedCombinations(possible, k)

  result = Math.max(
    ...towns
      .map((trips) => trips.reduce((a, b) => a + b, 0))
      .filter((trips) => trips <= t)
      .sort((a, b) => b - a)
  )
  return isFinite(result) ? result : null
}

function kSizedCombinations(possible, k) {
  let i, j, towns, head, tails
  if (possible.length < k || k <= 0) {
    return []
  }
  if (k === possible.length) {
    return [possible]
  }
  if (k === 1) {
    towns = []
    for (i = 0; i < possible.length; i++) {
      towns.push([possible[i]])
    }
    return towns
  }
  towns = []
  for (i = 0; i < possible.length - k + 1; i++) {
    head = possible.slice(i, i + 1)
    tails = kSizedCombinations(possible.slice(i + 1), k - 1)
    for (j = 0; j < tails.length; j++) {
      towns.push(head.concat(tails[j]))
    }
  }
  return towns
}
