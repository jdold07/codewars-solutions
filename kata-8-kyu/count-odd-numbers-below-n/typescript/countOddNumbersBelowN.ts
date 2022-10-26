//+ ====================================================================================================================
//+
//+ 8 kyu - Count Odd Numbers below n  [ ID: 59342039eb450e39970000a6 ] (count-odd-numbers-below-n)
//+ URL: https://www.codewars.com/kata/59342039eb450e39970000a6
//+ Category: GAMES  |  Tags: PERFORMANCE | MATHEMATICS
//+
//+ ====================================================================================================================

function oddCount(n: number) {
  return n % 2 ? Math.ceil((n - 2) / 2) : Math.ceil((n - 1) / 2)
}

export { oddCount }
