// 8 kyu - Grasshopper - Terminal Game #1  [ ID: 55e8aba23d399a59500000ce  (grasshopper-terminal-game-number-1) ]
// URL: https://www.codewars.com/kata/55e8aba23d399a59500000ce
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("hero class", function () {
  it("should create a hero", function () {
    var myHero = new Hero()
    Test.assertEquals(myHero.name, "Hero")
    Test.assertEquals(myHero.experience, 0)
    Test.assertEquals(myHero.health, 100)
    Test.assertEquals(myHero.position, "00")
    Test.assertEquals(myHero.damage, 5)
  })
  it("should use name argument", function () {
    var newHero = new Hero("Greg")
    Test.assertEquals(newHero.name, "Greg")
  })
})
