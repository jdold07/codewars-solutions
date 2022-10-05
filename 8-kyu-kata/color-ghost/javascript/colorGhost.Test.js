// 8 kyu - Color Ghost  [ ID: 53f1015fa9fe02cbda00111a  (color-ghost) ]
// URL: https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
// Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
describe("Ghost", function () {
  ghostColors = []
  for (let i = 1; i <= 100; i++) {
    ghostColors.push(new Ghost().color)
  }

  let ghostColor = function (ghostColors, color) {
    let answer
    for (let i = 0; i < ghostColors.length; i++) {
      if (ghostColors[i] == color) {
        answer = true
        break
      }
    }
    return answer
  }

  it("should sometimes make white ghosts", function () {
    Test.assertEquals(ghostColor(ghostColors, "white"), true)
  })

  it("should sometimes make yellow ghosts", function () {
    Test.assertEquals(ghostColor(ghostColors, "yellow"), true)
  })

  it("should sometimes make purple ghosts", function () {
    Test.assertEquals(ghostColor(ghostColors, "purple"), true)
  })

  it("should sometimes make red ghosts", function () {
    Test.assertEquals(ghostColor(ghostColors, "red"), true)
  })
})
