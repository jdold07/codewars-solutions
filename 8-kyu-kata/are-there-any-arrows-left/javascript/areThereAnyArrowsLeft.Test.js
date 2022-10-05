// 8 kyu - Are there any arrows left?  [ ID: 559f860f8c0d6c7784000119  (are-there-any-arrows-left) ]
// URL: https://www.codewars.com/kata/559f860f8c0d6c7784000119
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Should handle basic quivers", function () {
  Test.assertEquals(anyArrows([]), false, "Should handle empty quiver")
  Test.assertEquals(
    anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }]),
    true,
    "Should handle quiver with undamaged arrows"
  )
  Test.assertEquals(
    anyArrows([{ range: 10, damaged: true }, { damaged: true }]),
    false,
    "Should handle quiver with damaged arrows"
  )
})

describe("Should handle random quivers", function () {
  function testAnyArrows(arrows) {
    return arrows.some((arrow) => !arrow.damaged)
  }
  for (let testCount = 0; testCount < 100; testCount++) {
    let arrows = []
    for (let index = 0; index < Math.ceil(Math.random() * 100); index++) {
      arrows.push({ damaged: Boolean(Math.floor(Math.random() * 25)) })
    }
    Test.assertEquals(anyArrows(arrows), testAnyArrows(arrows), "Should handle random array")
  }
})
