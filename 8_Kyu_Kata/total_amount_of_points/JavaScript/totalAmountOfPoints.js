// 8 kyu - Total amount of points  [ ID: 5bb904724c47249b10000131  (total-amount-of-points) ]
// URL: https://www.codewars.com/kata/5bb904724c47249b10000131
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS | ARRAYS
// *****************************************************************************
function points(games) {
  let xScore = games.map((el) => scoreToNum(el[0]))
  let yScore = games.map((el) => scoreToNum(el[2]))
  return xScore.map((el, i) => (el > yScore[i] ? 3 : el === yScore[i] ? 1 : 0)).reduce((a, b) => a + b, 0)
}
const scoreToNum = (str) => {
  switch (str) {
    case "1":
      return 1
    case "2":
      return 2
    case "3":
      return 3
    case "4":
      return 4
    default:
      return 0
  }
}
