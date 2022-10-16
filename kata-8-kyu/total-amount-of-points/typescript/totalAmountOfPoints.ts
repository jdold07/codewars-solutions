//+ ====================================================================================================================
//+
//+ 8 kyu - Total amount of points  [ ID: 5bb904724c47249b10000131 ] (total-amount-of-points)
//+ URL: https://www.codewars.com/kata/5bb904724c47249b10000131
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ARRAYS
//+
//+ ====================================================================================================================

function points(games: string[]): number {
  const results = games.map((v) => [+v.split(":")[0], +v.split(":")[1]])
  return results.reduce((a, [x, y]) => (x > y ? a + 3 : x === y ? a + 1 : a), 0)
}

//+ ====================================================================================================================
//+ ====================================================================================================================

function points2(games: string[]): number {
  return games.reduce((a, c) => {
    const [x, y] = c.split(":")
    return +x > +y ? a + 3 : +x === +y ? a + 1 : a
  }, 0)
}

export { points, points2 }
