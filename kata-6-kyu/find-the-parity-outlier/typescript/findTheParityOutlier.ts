//+ ====================================================================================================================
//+
//+ 6 kyu - Find The Parity Outlier  [ ID: 5526fc09a1bbd946250002dc ] (find-the-parity-outlier)
//+ URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function findOutlier(integers: number[]): number | undefined {
  let test = 0
  integers.slice(0, 3).forEach((v) => {
    test += !(v % 2) ? 1 : 0
  })
  return test >= 2 ? integers.find((x) => x % 2 !== 0) : integers.find((x) => x % 2 === 0)
}

export { findOutlier }
