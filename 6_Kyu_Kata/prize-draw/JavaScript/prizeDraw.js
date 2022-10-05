// [object Object] - Prize Draw  [ ID: 5616868c81a0f281e500005c  (prize-draw) ]
// URL: https://www.codewars.com/kata/5616868c81a0f281e500005c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | SORTING
// *****************************************************************************
const rank = (st, we, n) => !st ? "No participants" : st.split(",").length < n ? "Not enough participants" :
    st.split(",")
      .reduce((a, c, i) => [...a, [c, ([...c].reduce((x, y) => x + (y.toUpperCase().charCodeAt() - 64), 0) + c.length) * we[i]],],[])
      .sort(([aN, aW], [bN, bW]) => bW - aW || (aN < bN ? -1 : 1))[--n][0]
// *****************************************************************************
// *****************************************************************************
function rank(st, we, n) {
    const som = st
      .split(",")
      .reduce(
        (a, c, i) => [
          ...a,
          [c, ([...c].reduce((x, y) => x + (y.toUpperCase().charCodeAt() - 64), 0) + c.length) * we[i]],
        ],[])
      .sort(([aN, aW], [bN, bW]) => bW - aW || (aN < bN ? -1 : 1))
    return !st ? "No participants" : som.length < n ? "Not enough participants" : som[--n][0]
  }

