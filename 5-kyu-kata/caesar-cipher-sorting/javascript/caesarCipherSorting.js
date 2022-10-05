// 5 kyu - Caesar Cipher Sorting  [ ID: 5483b69b48cf540cfc000119  (caesar-cipher-sorting) ]
// URL: https://www.codewars.com/kata/5483b69b48cf540cfc000119
// Category: GAMES  |  Tags: PUZZLES | SORTING
// *****************************************************************************
const caesarSort = (arr) => {
  const range = [...Array(26).keys()]
  const cipher = (l, n) => l.replace(/[a-z]/g, (re) => String.fromCharCode(97 + ((re.charCodeAt() - 97 + n) % 26)))

  return [
    ...Object.values(
      arr.reduce(
        (a, c) => ({
          ...a,
          [range.map((v) => cipher(c, v)).sort()]: (a[range.map((v) => cipher(c, v)).sort()] || []).concat(c)
        }),
        {}
      )
    )
  ]
}
