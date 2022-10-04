// 8 kyu - 8kyu interpreters: HQ9+  [ ID: 591588d49f4056e13f000001  (8kyu-interpreters-hq9-plus) ]
// URL: https://www.codewars.com/kata/591588d49f4056e13f000001
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function HQ9(code) {
  switch (code) {
    case "H":
      return "Hello World!"
    case "Q":
      return "Q"
    case "9": {
      let song = ""
      for (let i = 99; i > 0; i--) {
        if (i === 1) {
          song += `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        } else if (i === 2) {
          song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
            i - 1
          } bottle of beer on the wall.\n`
        } else {
          song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
            i - 1
          } bottles of beer on the wall.\n`
        }
      }
      return song
    }
    default:
      undefined
  }
}
